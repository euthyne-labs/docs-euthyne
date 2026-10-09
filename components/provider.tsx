'use client';
import { DocsSearchDialog } from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider search={{ SearchDialog: DocsSearchDialog }} theme={{ defaultTheme: 'dark' }}>
      {children}
    </RootProvider>
  );
}
