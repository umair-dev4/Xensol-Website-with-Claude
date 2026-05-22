import type { Metadata } from 'next';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Xensoltech — Flat-Rate Website Design Subscription',
    template: '%s | Xensol Technologies',
  },
  description:
    'Grow your business effortlessly with Xensoltech. Unlimited web design & development requests, 48-hour turnaround, unlimited revisions, no hiring hassles.',
  keywords: [
    'website design subscription',
    'unlimited web design',
    'flat rate design agency',
    'web design monthly',
    'UI/UX subscription',
    'web development subscription',
    'Xensol Technologies',
  ],
  authors: [{ name: 'Xensol Technologies' }],
  creator: 'Xensol Technologies',
  metadataBase: new URL('https://xensoltech.com'),
  alternates: { canonical: 'https://xensoltech.com' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://xensoltech.com',
    title: 'Xensoltech — Flat-Rate Website Design Subscription',
    description:
      'Grow your business effortlessly with Xensoltech. Unlimited web design & development requests, 48-hour turnaround, unlimited revisions.',
    siteName: 'Xensol Technologies',
    images: [
      {
        url: 'https://xensoltech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xensol Technologies — Flat-Rate Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xensoltech',
    creator: '@xensoltech',
    title: 'Xensoltech — Flat-Rate Website Design Subscription',
    description:
      'Unlimited web design & development on one simple monthly subscription.',
    images: ['https://xensoltech.com/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xensol Technologies',
  url: 'https://xensoltech.com',
  logo: 'https://xensoltech.com/logo.png',
  description:
    'Flat-rate subscription-based web design and development agency. Unlimited requests, 48-hour delivery, unlimited revisions.',
  foundingDate: '2021',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@xensoltech.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://twitter.com/xensoltech',
    'https://linkedin.com/company/xensoltech',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain bg-bg text-primary font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
