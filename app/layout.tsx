// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Next.js Dashboard App',
  description: 'Dashboard built with Next.js 14, Tailwind CSS, and App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100 text-gray-900">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
