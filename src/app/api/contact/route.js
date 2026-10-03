import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { getClientIp, handleRouteError, jsonError, readJsonBody } from '@/lib/api';
import { rateLimit } from '@/lib/rate-limit';
import {
  COMPANY_MAX_LENGTH,
  CONTACT_TOPIC_VALUES,
  MESSAGE_MAX_LENGTH,
  MONTHLY_SPEND_OPTIONS,
} from '@/lib/contact';
import { cleanName, compactErrors, normalizeEmail, validateEmail } from '@/lib/validation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/** POST /api/contact: stores a sales/demo/support request. */
export async function POST(request) {
  const limit = rateLimit(`contact:${getClientIp(request)}`, { limit: 5, windowMs: 60 * 60 * 1000 });
  if (!limit.allowed) {
    return jsonError(429, "You've sent several requests already. We'll be in touch soon.", {
      retryAfter: limit.retryAfter,
    });
  }

  const body = await readJsonBody(request);
  if (!body) return jsonError(400, 'Invalid request body');

  // Honeypot: real users never see or fill the `website` field.
  if (body.website) {
    return NextResponse.json({ success: true }, { status: 201 });
  }

  const name = cleanName(body.name);
  const email = normalizeEmail(body.email);
  const company = cleanName(body.company);
  const topic = CONTACT_TOPIC_VALUES.includes(body.topic) ? body.topic : 'sales';
  const monthlySpend = MONTHLY_SPEND_OPTIONS.includes(body.monthlySpend) ? body.monthlySpend : null;
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const fields = compactErrors({
    name: !name ? 'Please tell us your name' : name.length > 100 ? 'Name is too long' : null,
    email: validateEmail(email),
    company: company.length > COMPANY_MAX_LENGTH ? 'Company name is too long' : null,
    message:
      message.length < 10
        ? 'Please add a few more details (at least 10 characters)'
        : message.length > MESSAGE_MAX_LENGTH
          ? `Message must be at most ${MESSAGE_MAX_LENGTH} characters`
          : null,
  });
  if (Object.keys(fields).length > 0) {
    return jsonError(400, Object.values(fields)[0], { fields });
  }

  try {
    const session = await getSession(request);
    await query(
      `INSERT INTO contact_requests (user_id, name, email, company, topic, monthly_spend, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [session?.userId ?? null, name, email, company || null, topic, monthlySpend, message]
    );

    return NextResponse.json(
      { success: true, message: "Thanks! Our team will reply within one business day." },
      { status: 201 }
    );
  } catch (error) {
    return handleRouteError(error, 'contact');
  }
}
