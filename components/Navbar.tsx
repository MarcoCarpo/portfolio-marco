'use client';

import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="bg-gray-800 text-primary-foreground shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
        <button
          className="md:hidden text-primary-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <div className="hidden md:flex gap-8 items-center">
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
          <Link
            href="/jobs"
            className={clsx('hover:underline', checkActive('/jobs') && 'underline')}
          >
            {setTextAsTag('Lavoro', '/jobs')}
          </Link>
          <Link
            href="/contact-me"
            className={clsx('hover:underline', checkActive('/contact-me') && 'underline')}
          >
            {setTextAsTag('Contattami', '/contact-me')}
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center py-4 px-8 bg-gray-800">
          <Link
            href="/"
            className={clsx('hover:underline', checkActive('/') && 'underline')}
            onClick={() => setIsOpen(false)}
          >
            {setTextAsTag('Home', '/')}
          </Link>
          <Link
            href="/about-me"
            className={clsx('hover:underline', checkActive('/about-me') && 'underline')}
            onClick={() => setIsOpen(false)}
          >
            {setTextAsTag('Bio', '/about-me')}
          </Link>
          <Link
            href="/education"
            className={clsx('hover:underline', checkActive('/education') && 'underline')}
            onClick={() => setIsOpen(false)}
          >
            {setTextAsTag('Istruzione e Formazione', '/education')}
          </Link>
          <Link
            href="/jobs"
            className={clsx('hover:underline', checkActive('/jobs') && 'underline')}
            onClick={() => setIsOpen(false)}
          >
            {setTextAsTag('Lavoro', '/jobs')}
          </Link>
          <Link
            href="/contact-me"
            className={clsx('hover:underline', checkActive('/contact-me') && 'underline')}
            onClick={() => setIsOpen(false)}
          >
            {setTextAsTag('Contattami', '/contact-me')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
