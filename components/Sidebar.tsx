// components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        </li>
      </ul>
    </aside>
  );
}
