import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Navbar from './nav-bar';
import Avatar from './avatar';

export default function Header() {
  return (
    <header className="flex w-full justify-between border-b border-neutral p-4">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-[5px] font-bold hover:no-underline"
        >
          <ComputerDesktopIcon className="aspect-square h-8" />
          Com_munity
        </Link>
        <Navbar />
      </div>
      <div>
        <Avatar />
      </div>
    </header>
  );
}
