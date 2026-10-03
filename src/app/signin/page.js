import { Suspense } from 'react';
import Link from 'next/link';
import AuthShell from '@/components/auth/AuthShell';
import SigninForm from '@/components/auth/SigninForm';

export const metadata = {
  title: 'Sign in',
  description: 'Sign in to your AdsOptima account.',
};

export default function SigninPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to keep an eye on your campaigns."
      footer={
        <>
          New to AdsOptima?{' '}
          <Link href="/signup" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline">
            Start your free trial
          </Link>
        </>
      }
    >
      <Suspense fallback={<div className="h-[280px]" aria-hidden="true" />}>
        <SigninForm />
      </Suspense>
    </AuthShell>
  );
}
