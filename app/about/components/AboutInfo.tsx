'use client';

import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { pageVariant } from '@/lib/framerAnim';

export default function AboutInfo() {
  return (
    <motion.section
      variants={pageVariant}
      initial='pageInitial'
      animate='pageEnter'
      className='mb-20 sm:mb-10 sm:w-[80ch] '
    >
      <article>
        <header className='mb-8'>
          <h1 className='font-bold text-3xl mb-2'>Character Profile</h1>
          <h2 className='text-sm italic'>
            <span className='text-span font-bold'>WARNING</span>: Professional
            at Google-fu, will search upon{' '}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className='italic underline'>
                  aggro*
                </TooltipTrigger>
                <TooltipContent className=''>
                  <p>
                    game terminology for becoming the state of being attacked{' '}
                  </p>
                  <p className='line-through'>sorry for the joke</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
        </header>
        <p className='mb-4'>
          Jokes aside, call me Henry! I&apos;m a{' '}
          <span className='text-span'> Front-end developer</span> and software
          development, especially the web, is my lingo. My adventure started
          back in high school at the age of 16 when I was learning{' '}
          <a
            href='https://en.wikipedia.org/wiki/Adobe_Flash'
            target='_blank'
            className='underline link-hover'
          >
            Adobe Flash
          </a>{' '}
          (rest in peace 2020) in my multimedia class, learning all sorts of
          design fundamentals.
        </p>
        <p className='mb-4'>
          Seeing simple, yet flashy animated graphics move across the screen
          tickled my brain but only accessible via a .swf file. Thus, my
          interest into this field began with one sole question: <br />
          <br />
          <span className='text-span font-bold text-lg'>
            &quot;What if I made this accessible to anyone to enjoy?&quot;
          </span>
        </p>
        <p className='mb-4'>
          Fast-forward to today, after several twists and turns in my life,
          front-end development is simply my calling to scratch that high school
          itch. Despite the challenges and continuous learning curve in this
          field, I would like to{' '}
          <span className='text-span font-bold'> prove</span> it to you and
          myself by creating websites accessible to all.
        </p>
        <p>
          Outside my development life, nothing beats a productive day than
          sitting down and enjoying a good video game.{' '}
          <a
            href='https://www.ea.com/games/apex-legends'
            target='_blank'
            className='underline link-hover'
          >
            Apex Legends
          </a>{' '}
          anyone?
        </p>
      </article>
    </motion.section>
  );
}
