import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ritvik Shah | Software Engineer & Robotics Enthusiast',
  description: 'Personal website of Ritvik Shah, showcasing expertise in software engineering, robotics, and AI technologies.',
  keywords: ['Ritvik Shah', 'software engineer', 'robotics', 'AI', 'developer', 'portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans bg-dark text-light`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
} 