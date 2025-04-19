'use client';

import { usePathname } from 'next/navigation';
import Nav from './nav';

export default function NavWrapper() {
  const pathname = usePathname();

  const hideNav = pathname === '/auth/login' || pathname === '/auth/register';

  if (hideNav) return null;

  return <Nav />;
}
