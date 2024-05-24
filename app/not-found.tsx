import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='text-white p-8 text-center text-4xl'>
      <h1>👀 Oops! - No adventure here.. <br/> you&apos;ve hit a dead end!</h1>
      <Link href={'/'}>
        <Button
          variant={'outline'}
          className='text-lg my-16 py-8 animate-bounce'
        >
          Home
        </Button>
      </Link>
    </div>
  );
}
