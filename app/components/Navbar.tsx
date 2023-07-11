'use client';

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
import { Menu, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Framer motion values
const navVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.175,
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

export default function Navbar() {
  return (
    <nav className=''>
      <div className='p-8 flex gap-4 justify-between sm:justify-normal items-center text-white sm:max-w-[var(--max-width)] sm:mx-auto'>
        <Link href={'/'} aria-label='Link back to homepage'>
          <Avatar>
            <AvatarImage
              src='https://avatars.githubusercontent.com/u/104471437?v=4'
              alt='avatar logo'
            />
            <AvatarFallback>HN</AvatarFallback>
          </Avatar>
        </Link>
        <div className='gap-4 hidden sm:flex'>
          <Link href={'/'} className='link-hover'>
            Home
          </Link>
          <Link href={'/about'} className='link-hover'>
            About
          </Link>
          <Link href={'/projects'} className='link-hover'>
            Projects
          </Link>
          <Link href={'/contact'} className='link-hover'>
            Contact
          </Link>
          <a
            href='https://hny-blogs.vercel.app/'
            target='_blank'
            className='link-hover'
          >
            <div className='flex place-items-center gap-1.5'>
              <h1>Blog</h1>
              <ExternalLink />
            </div>
          </a>
        </div>
        <div className='sm:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <div className=''>
                <Button variant='ghost' aria-label='Menu Button'>
                  <Menu />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent size={'full'}>
              <SheetHeader className='mt-20'>
                <motion.div
                  initial='hidden'
                  whileInView='show'
                  variants={navVariants}
                  className='flex flex-col'
                >
                  <motion.div variants={item} className='w-fit mx-auto'>
                    <Link href={'/'} className='link-hover'>
                      <SheetClose className='text-3xl p-4'>Home</SheetClose>
                    </Link>
                  </motion.div>
                  <motion.div variants={item} className='w-fit mx-auto'>
                    <Link href={'/about'} className='link-hover'>
                      <SheetClose className='text-3xl p-4'>About</SheetClose>
                    </Link>
                  </motion.div>
                  <motion.div variants={item} className='w-fit mx-auto'>
                    <Link href={'/projects'} className='link-hover'>
                      <SheetClose className='text-3xl p-4'>Projects</SheetClose>
                    </Link>
                  </motion.div>
                  <motion.div variants={item} className='w-fit mx-auto'>
                    <Link href={'/contact'} className='link-hover'>
                      <SheetClose className='text-3xl p-4'>Contact</SheetClose>
                    </Link>
                  </motion.div>
                  <motion.div variants={item} className='w-fit mx-auto'>
                    <a
                      href={'https://hny-blogs.vercel.app/'}
                      target='_blank'
                      className='link-hover'
                    >
                      <div className='flex place-items-center p-4'>
                        <h1 className='text-3xl mr-2 ml-6'>Blog</h1>
                        <ExternalLink />
                      </div>
                    </a>
                  </motion.div>
                </motion.div>
              </SheetHeader>
              <div className='flex gap-8 justify-center items-center my-16'>
                <a
                  href='https://github.com/hny-codes'
                  target='_blank'
                  className='hover:text-[var(--clr-secondary-01)] link-hover'
                >
                  <Github />
                </a>
                <a
                  href='#'
                  className='hover:text-[var(--clr-secondary-01)] link-hover'
                >
                  <Linkedin />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
