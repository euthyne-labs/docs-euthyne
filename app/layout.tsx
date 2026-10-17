import type { Metadata } from 'next';
import { Banner } from 'fumadocs-ui/components/banner';
import { Provider } from '@/components/provider';
import { GENERAL_SANS_CSS_URL, jetbrainsMono } from '@/lib/fonts';
import { siteUrl } from '@/lib/shared';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Euthyne docs',
    template: '%s | Euthyne docs',
  },
  description: 'Documentation for Euthyne, signed receipts for coding agent actions.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={GENERAL_SANS_CSS_URL} />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <div className="grain" aria-hidden />
        <Provider>
          <Banner>Preview: the CLI and API are not released yet.</Banner>
          {children}
        </Provider>
      </body>
    </html>
  );
}
