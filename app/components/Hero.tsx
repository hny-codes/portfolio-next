import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='text-white text-center sm:grid sm:grid-cols-2 sm:items-center sm:p-4 sm:mt-16'>
      <div className=''>
        <h1 className='text-clamp mb-16 sm:mb-0'>
          👀
          <span className='text-span'>H</span>NY-
          <span className='text-span'>C</span>ODES
        </h1>
      </div>
      <div className='w-[85%] mx-auto text-lg sm:text-left'>
        <h2 className='mb-4 p-2'>
          <span className='text-span'>Front-end developer</span> at day, gamer
          at night
        </h2>
        <h3 className='mb-4 p-2'>
          Specialization in <span className='text-span'>React</span>, the web,
          and more
        </h3>
        <h3 className='mb-4 p-2'>
          <span className='text-2xl'>🎮</span> Call me{' '}
          <span className='text-span'>Henry</span>!
        </h3>
        <div className='flex flex-col sm:flex-row sm:p-2 items-center gap-4'>
          <Button variant={'outline'} asChild>
            <Link href={'/about'}>About Me</Link>
          </Button>
          <Button variant={'outline'} asChild>
            <Link href={'/'}>Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
