'use client';

import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UnsignedMenu() {
  return (
    <div className="flex flex-col items-start gap-10 p-4">
      <div>
        <UserCircleIcon width={50} height={50} />
        <div className="select-none">Login required.</div>
      </div>
      <div className="flex w-full flex-col gap-3 self-center">
        <Link
          href="/sign-in"
          className="flex items-center justify-center rounded-[25px] border border-primary px-2 py-1 text-primary"
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="flex items-center justify-center rounded-[25px] bg-primary px-2 py-1 text-background"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
