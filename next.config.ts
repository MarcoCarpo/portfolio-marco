import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['media.licdn.com'],
  },
};

export default withNextIntl(nextConfig);
