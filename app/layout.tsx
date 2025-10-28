import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: process.env.SITE_TITLE || 'Workers Lofi Radio',
  description: process.env.TAGLINE || 'Global Lofi Labor Stream — warm beats, living history.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
