'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight, Mail, Milestone } from 'lucide-react';
import { useState } from 'react';
import SkillRain from './SkillRain';
import { motion } from 'framer-motion';
import { heroVariant, buttonVariant } from '@/lib/framerAnim';
import dynamic from 'next/dynamic';

const DynamicController = dynamic(() => import('./ControllerAnim'), {
  ssr: false,
});

export default function Hero() {
  const [aboutHover, setAboutHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [projectHover, setProjectHover] = useState(false);

  return (
    <section className='text-white text-center sm:p-4 relative'>
      <div className='font-bold flex flex-col justify-center h-screen sm:h-[85vh] pt-20'>
        <h1 className='text-4xl sm:text-5xl lg:text-7xl'>
          <span className='text-span'>H</span>NY-
          <span className='text-span'>C</span>ODES
        </h1>
        <div className='relative'>
          <div className='min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]'>
            <DynamicController />
          </div>
          <motion.div
            variants={heroVariant}
            initial='hidden'
            animate='show'
            className='[&>*]:mb-8 sm:[&>*]:mb-0 mt-10 sm:mt-0'
          >
            <div className='font-medium'>
              <h2 className='mb-2 text-xl sm:text-2xl'>Software Developer</h2>
              <span>●</span>
              <h2 className='mt-2 text-lg sm:text-xl'>
                <span className='text-span font-bold'>
                  Frontend (Web) <br />
                </span>{' '}
                is my specialty!
              </h2>
            </div>
            <motion.div
              variants={buttonVariant}
              className='sm:absolute -bottom-0 left-[15%] md:left-[21%] lg:left-[28%] xl:left-[33%]'
            >
              <Button variant={'outline'} asChild>
                <Link
                  href={'/about'}
                  onMouseEnter={() => setAboutHover(true)}
                  onMouseLeave={() => setAboutHover(false)}
                >
                  About
                  <MoveRight
                    className={`text-black ml-2 transition ${
                      aboutHover ? 'block' : 'hidden'
                    }`}
                  />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariant}
              className='sm:absolute -bottom-0 right-[15%] md:right-[21%] lg:right-[28%] xl:right-[33%]'
            >
              <Button variant={'outline'} asChild>
                <Link
                  href={'/projects'}
                  onMouseEnter={() => setProjectHover(true)}
                  onMouseLeave={() => setProjectHover(false)}
                >
                  Projects
                  <Milestone
                    className={`text-black ml-2 transition ${
                      projectHover ? 'block' : 'hidden'
                    }`}
                  />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariant}
              className='sm:absolute -bottom-20 left-0 right-0 mx-auto'
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
      <SkillRain />
    </section>
  );
}
