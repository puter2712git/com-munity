import Link from 'next/link';

const links: { id: number; href: string; children: React.ReactNode }[] = [
  {
    id: 1,
    href: '/board',
    children: 'Board',
  },
  {
    id: 2,
    href: '/study',
    children: 'Study',
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="flex divide-x divide-secondary">
        {links.map((link) => (
          <li key={link.id} className="px-4">
            <Link href={link.href}>{link.children}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
