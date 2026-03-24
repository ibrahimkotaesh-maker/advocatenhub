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
    images: [{ url: 'https://www.advocaatvinder.nl/images/og-image.png', width: 1200, height: 630, alt: 'AdvocaatVinder' }],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: '_4O-AqYB7ZGBENvXHSEob_9xpYMhKNnI2SAsC_d6Ng4',
  },
};

// ─── Global JSON-LD: WebSite + Organization ────────────────────────────────
const globalJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AdvocaatVinder',
    url: 'https://www.advocaatvinder.nl',
    description:
      'De grootste onafhankelijke gids van Nederlandse advocaten. Zoek op naam, stad, of rechtsgebied.',
    inLanguage: 'nl',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.advocaatvinder.nl/advocaten?naam={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AdvocaatVinder',
    url: 'https://www.advocaatvinder.nl',
    logo: 'https://www.advocaatvinder.nl/images/logo.png',
    description:
      'De grootste onafhankelijke gids van 18.670+ NOvA-geregistreerde advocaten in Nederland.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Dutch', 'English'],
    },
    sameAs: [],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${spaceMono.variable} ${dmSerif.variable}`}>
      <body className="antialiased">
        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
