
'use client'; // required for error boundaries in Next.js

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <div className="p-8 text-red-600">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}
