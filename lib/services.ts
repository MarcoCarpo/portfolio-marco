'use server';

import { cookies, headers } from 'next/headers';
import { Locale, defaultLocale } from '@/i18n/config';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocaleFromCookie() {
  return (await cookies()).get(COOKIE_NAME)?.value;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}

export async function getUserLocale() {
  const localeFromCookie = await getUserLocaleFromCookie();
  if (localeFromCookie) {
    return localeFromCookie;
  }

  const acceptLanguage = (await headers()).get('accept-language');
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const [locale] = acceptLanguage.split(',').map((lang) => lang.split(';')[0]);
  const parsedLocale = new Intl.Locale(locale);

  return parsedLocale.language as Locale;
}
