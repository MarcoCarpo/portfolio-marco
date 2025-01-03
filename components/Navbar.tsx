'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const path = usePathname();
  // Check the url of the page and add the active class to the corresponding link
  const checkActive = (href: string) => {
    console.log(path);

    if (path === href) {
      return 'underline';
    }

    return '';
  };

  return (
    <div className="flex justify-center gap-8 items-center py-4 px-8 bg-primary text-primary-foreground shadow-md">
      <Link href="/" className={clsx('hover:underline', checkActive('/'))}>
        Home
      </Link>
      <Link href="/education" className={clsx('hover:underline', checkActive('/education'))}>
        Istruzione
      </Link>
      <Link href="/jobs" className={clsx('hover:underline', checkActive('/jobs'))}>
        Lavoro
      </Link>
      <Link href="/contact-me" className={clsx('hover:underline', checkActive('/contact-me'))}>
        Contattami
      </Link>
    </div>
  );
};

export default Navbar;
