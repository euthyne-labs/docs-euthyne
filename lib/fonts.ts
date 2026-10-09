import { JetBrains_Mono } from 'next/font/google';

export const GENERAL_SANS_CSS_URL =
  'https://api.fontshare.com/v2/css?f[]=general-sans@400,500&display=swap';

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
