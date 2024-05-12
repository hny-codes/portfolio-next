'use client';

import {
  AstroIcon,
  CssIcon,
  DiscordIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  VSCodeIcon,
  ViteIcon,
} from './SkillsIcon';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { pageVariant } from '@/lib/framerAnim';
import Image from 'next/image';

export default function Skills() {
  return (
    <motion.section
      variants={pageVariant}
      initial='pageInitial'
      whileInView='pageDelayEnter'
      viewport={{ once: true }}
      className='mb-16 sm:mb-10 sm:flex flex-col sm:gap-8'
    >
      <article className='mb-20 sm:mb-2 animate-delay-enter'>
        <header className='mb-4 flex flex-col'>
          <div className='relative w-[200px] h-[200px] rounded-2xl self-center justify-self-end mb-6 border-4 border-double md:self-start'>
            <Image
              src={'/images/profile.jpg'}
              alt='hny picture'
              fill
              className='object-contain rounded-xl'
            />
          </div>
          <h2 className='font-bold text-5xl text-center md:text-left'>
            Character Profile
          </h2>
          <div className='mt-1 mb-8 text-center md:text-left'>
            <span className='text-span font-bold text-sm italic'>WARNING</span>:
            Professional at Google-fu, will search upon{' '}
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className='italic underline'>
                  aggro*
                </TooltipTrigger>
                <TooltipContent className=''>
                  <p>
                    game terminology for becoming the <br /> state of being
                    attacked{' '}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <h3 className='font-bold text-3xl mb-2 text-center md:text-left'>
            Skills Tree
          </h3>
        </header>
        <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
          <HTMLIcon />
          <CssIcon />
          <JavaScriptIcon />
          <ReactIcon />
          <TailwindIcon />
          <PythonIcon />
        </div>
      </article>
      <article className='animate-delay-enter'>
        <header className='mb-4'>
          <h3 className='font-bold text-3xl mb-2 text-center md:text-left'>
            Tools Inventory
          </h3>
        </header>
        <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
          <AstroIcon />
          <NextIcon />
          <DiscordIcon />
          <ViteIcon />
          <GitIcon />
          <GithubIcon />
          <VSCodeIcon />
          <FigmaIcon />
        </div>
      </article>
    </motion.section>
  );
}
