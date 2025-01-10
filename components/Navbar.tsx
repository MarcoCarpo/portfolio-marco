'use client';

import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslations } from 'use-intl';

const NavLink = ({ href, text, onClick }: { href: string; text: string; onClick?: () => void }) => {
  const path = usePathname();
  const checkActive = (href: string) => path === href;

  const setTextAsTag = (text: string, path: string): React.ReactNode => {
    return (
      <span onClick={onClick}>
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
      </span>
    );
  };

  return (
    <Link href={href} className={clsx('hover:underline', checkActive(href) && 'underline')}>
      {setTextAsTag(text, href)}
    </Link>
  );
};

const Navbar = () => {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-primary-foreground shadow-md">
      <div className="flex items-center py-4 px-8">
        <button
          className="md:hidden text-primary-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
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
        <div className="hidden md:flex gap-8 items-center justify-center mx-auto">
          <NavLink href="/" text={t('home')} />
          <NavLink href="/about-me" text={t('bio')} />
          <NavLink href="/education" text={t('education')} />
          <NavLink href="/jobs" text={t('work')} />
          <NavLink href="/contact-me" text={t('contact_me')} />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center py-4 px-8 bg-gray-800 text-xl">
          <NavLink href="/" text={t('home')} onClick={() => setIsOpen(false)} />
          <NavLink href="/about-me" text={t('bio')} onClick={() => setIsOpen(false)} />
          <NavLink href="/education" text={t('education')} onClick={() => setIsOpen(false)} />
          <NavLink href="/jobs" text={t('work')} onClick={() => setIsOpen(false)} />
          <NavLink href="/contact-me" text={t('contact_me')} onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
