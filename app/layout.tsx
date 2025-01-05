import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'sonner';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marco Carpona',
  description: 'Welcome on my personal website!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="csConfig" type="text/javascript">
        {
          'var _iub = _iub || [];_iub.csConfiguration = {"siteId":3885782,"cookiePolicyId":67997868,"lang":"it","storage":{"useSiteId":true}};'
        }
      </Script>

      <Script
        type="text/javascript"
        src={`https://cs.iubenda.com/autoblocking/${process.env.NEXT_PUBLIC_SITE_ID}.js`}
      ></Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" async></Script>
      <Script src="https://cdn.iubenda.com/iubenda.js" />

      <body className={`${nunito.className} antialiased flex flex-col`}>
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Toaster />
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
