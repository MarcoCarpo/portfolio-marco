import { getUserLocale } from '@/lib/services';
import { getRequestConfig } from 'next-intl/server';
import { Locale } from './config';

export default getRequestConfig(async () => {
  const locale = (await getUserLocale()) as Locale;

  let messages;

  try {
    messages = (await import(`../messages/${locale}.json`)).default;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    messages = (await import(`../messages/en.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
