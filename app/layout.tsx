import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono, DM_Serif_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | AdvocaatVinder',
    default: 'AdvocaatVinder — Vind de juiste advocaat in Nederland',
  },
  description:
    'AdvocaatVinder is de grootste gids van Nederlandse advocaten. Zoek op naam, stad, of rechtsgebied. Meer dan 18.000 NOvA-geregistreerde advocaten.',
  metadataBase: new URL('https://www.advocaatvinder.nl'),
  openGraph: {
    siteName: 'AdvocaatVinder',
    type: 'website',
    locale: 'nl_NL',
  },
  verification: {
    google: '_4O-AqYB7ZGBENvXHSEob_9xpYMhKNnI2SAsC_d6Ng4',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${spaceMono.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
