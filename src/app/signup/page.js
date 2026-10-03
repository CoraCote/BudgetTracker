import Link from 'next/link';
import AuthShell from '@/components/auth/AuthShell';
import SignupForm from '@/components/SignupForm';

export const metadata = {
  title: 'Start your free trial',
  description: 'Create your AdsOptima account. 14-day free trial, no credit card required.',
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Start your free trial"
      subtitle="14 days free. No credit card required."
      footer={
        <>
          Already have an account?{' '}
          <Link href="/signin" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthShell>
  );
}
