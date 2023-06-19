'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ControllerAnim from './ControllerAnim';
import { MoveRight, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [aboutHover, setAboutHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <div className='text-white text-center sm:grid sm:grid-cols-2 sm:items-center sm:p-4 pb-16 sm:my-16'>
      <div className=''>
        <h1 className='text-clamp'>
          <span className='text-span'>H</span>NY-
          <span className='text-span'>C</span>ODES
        </h1>
        <ControllerAnim />
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
          👀 Call me <span className='text-span'>Henry</span>!
        </h3>
        <div className='flex flex-col sm:flex-row sm:p-2 items-center gap-4'>
          <Button variant={'outline'} asChild>
            <Link
              href={'/about'}
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              About Me{' '}
              <MoveRight
                className={`text-black ml-2 transition ${
                  aboutHover ? 'block' : 'hidden'
                }`}
              />
            </Link>
          </Button>
          <Button variant={'outline'} asChild>
            <Link
              href={'/contact'}
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              Contact
              <Mail
                className={`text-black ml-2 transition ${
                  contactHover ? 'block' : 'hidden'
                }`}
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
