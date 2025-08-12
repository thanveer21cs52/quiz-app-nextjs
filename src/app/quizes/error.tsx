'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

    const router=useRouter()
  useEffect(() => {
    console.error('Captured error:', error);
  }, [error]);

  return (
    <div  className='text-amber-100 flex flex-col space-y-5'>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>


      <button
       className='px-2 py-2 text-quizbg bg-quizbutton rounded-xs'
        onClick={() => router.back()}
      >
        Try again
      </button>
    </div>
  );
}
