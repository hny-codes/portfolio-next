import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className=''>
      <div className='p-8 flex gap-4 justify-between sm:justify-normal items-center text-white'>
        <Link href={'/'}>
          <Avatar>
            <AvatarImage src='https://avatars.githubusercontent.com/u/104471437?v=4' />
            <AvatarFallback>HN</AvatarFallback>
          </Avatar>
        </Link>
        <div className='gap-4 hidden sm:flex'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Projects</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        <div className='sm:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <div className=''>
                <Button variant='ghost'>
                  <Menu />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent size={'full'}>
              <SheetHeader className='mt-20'>
                <Link href={'/'}>
                  <SheetClose className='text-3xl mb-8'>Home</SheetClose>
                </Link>
                <Link href={'/'}>
                  <SheetClose className='text-3xl mb-8'>About</SheetClose>
                </Link>
                <Link href={'/'}>
                  <SheetClose className='text-3xl mb-8'>Projects</SheetClose>
                </Link>
                <Link href={'/'}>
                  <SheetClose className='text-3xl'>Contact</SheetClose>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
