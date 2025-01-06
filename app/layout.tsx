import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'sonner';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import IubendaProvider from '@/features/iubenda/components/IubendaProvider';

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
      <IubendaProvider>
        <body className={`${nunito.className} antialiased flex flex-col min-h-screen`}>
          <Navbar />
          {children}
          <Toaster />
          <Analytics />

          <Footer />
        </body>
      </IubendaProvider>
    </html>
  );
}
