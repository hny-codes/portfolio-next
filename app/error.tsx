'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='text-white p-8 text-center text-4xl'>
      <h2>👀 An error occurred! Sorry about that..</h2>
      <Button
        variant={'outline'}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className='text-lg my-16 py-8 animate-bounce'
      >
        Try again
      </Button>
    </div>
  );
}
