'use client';

import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

var _iub = _iub || [];

const Navbar = () => {
  const path = usePathname();
  // Check the url of the page and add the active class to the corresponding link
  const checkActive = (href: string) => {
    return path === href;
  };

  const setTextAsTag = (text: string, path: string): React.ReactNode => {
    return (
      <>
        <span
          className={cn('font-bold', 'main-gradient', checkActive(path) ? 'visible' : 'invisible')}
        >
          {'<'}
        </span>
        <span>{text}</span>
        <span
          className={cn('font-bold', 'main-gradient', checkActive(path) ? 'visible' : 'invisible')}
        >
          {' />'}
        </span>
      </>
    );
  };

  return (
    <div className="flex justify-center gap-8 items-center py-4 px-8 bg-gray-800 text-primary-foreground shadow-md">
      <Link href="/" className={clsx('hover:underline', checkActive('/') && 'underline')}>
        {setTextAsTag('Home', '/')}
      </Link>
      <Link
        href="/about-me"
        className={clsx('hover:underline', checkActive('/about-me') && 'underline')}
      >
        {setTextAsTag('Bio', '/about-me')}
      </Link>
      <Link
        href="/education"
        className={clsx('hover:underline', checkActive('/education') && 'underline')}
      >
        {setTextAsTag('Istruzione e Formazione', '/education')}
      </Link>
      <Link href="/jobs" className={clsx('hover:underline', checkActive('/jobs') && 'underline')}>
        {setTextAsTag('Lavoro', '/jobs')}
      </Link>
      <Link
        href="/contact-me"
        className={clsx('hover:underline', checkActive('/contact-me') && 'underline')}
      >
        {setTextAsTag('Contattami', '/contact-me')}
      </Link>
    </div>
  );
};

export default Navbar;
