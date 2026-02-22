import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono, DM_Serif_Display } from 'next/font/google';
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
    template: '%s | AdvocatenHub',
    default: 'AdvocatenHub — Vind de juiste advocaat in Nederland',
  },
  description:
    'AdvocatenHub is de grootste gids van Nederlandse advocaten. Zoek op naam, stad, of rechtsgebied. Meer dan 18.000 NOvA-geregistreerde advocaten.',
  metadataBase: new URL('https://advocatenhub.nl'),
  openGraph: {
    siteName: 'AdvocatenHub',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${spaceMono.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
