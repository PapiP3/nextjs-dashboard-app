// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export const metadata = {
  title: 'Next.js Dashboard App',
  description: 'Dashboard built with Next.js 14, Tailwind CSS, and App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
