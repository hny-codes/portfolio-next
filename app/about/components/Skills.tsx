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
import { pageVariant } from '@/lib/framerAnim';

export default function Skills() {
  return (
    <motion.section
      variants={pageVariant}
      initial='pageInitial'
      whileInView='pageDelayEnter'
      viewport={{ once: true }}
      className='mb-16 sm:mb-10 sm:flex sm:gap-8 sm:justify-around'
    >
      <article className='mb-20 animate-delay-enter'>
        <header className='mb-4'>
          <h1 className='font-bold text-3xl mb-2'>My Skills Tree</h1>
          <h2 className='text-sm italic'>
            I still got more skill points to spare!
          </h2>
        </header>
        <div className='flex gap-2 flex-wrap'>
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
          <h1 className='font-bold text-3xl mb-2'>My Tools Inventory</h1>
          <h2 className='text-sm italic'>My inventory ain&apos;t full yet!</h2>
        </header>
        <div className='flex gap-2 flex-wrap'>
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
