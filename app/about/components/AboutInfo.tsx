'use client';

import { motion } from 'framer-motion';

import { pageVariant } from '@/lib/framerAnim';

export default function AboutInfo() {
  return (
    <motion.section
      variants={pageVariant}
      initial='pageInitial'
      animate='pageEnter'
      className='mb-10 sm:mb-10 md:max-w-[50ch] order-1'
    >
      <article>
        <p className='mb-4 leading-loose'>
          Jokes aside, call me Henry! I&apos;m a{' '}
          <span className='text-span font-bold'> Front-end developer</span> and
          software development, especially the web, is my lingo. My adventure
          started back in high school at the age of 16 when I was learning{' '}
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
        <p className='mb-4 leading-loose'>
          Seeing simple, yet flashy animated graphics move across the screen
          tickled my brain but only accessible via a .swf file. Thus, my
          interest into this field began with one sole question: <br />
          <br />
          <span className='text-span font-bold text-lg my-4'>
            &quot;What if I made this accessible to anyone to enjoy?&quot;
          </span>
        </p>
        <p className='mb-4 leading-loose'>
          Fast-forward to today, after several twists and turns in my life,
          front-end development is simply my calling to scratch that high school
          itch. Despite the challenges and continuous learning curve in this
          field, I would like to{' '}
          <span className='text-span font-bold'> prove</span> it to you and
          myself by creating websites accessible to all.
        </p>
        <p className='leading-loose'>
          Outside my development life, nothing beats a productive day than
          sitting down and enjoying a good video game. Coffee, chill, maybe some{' '}
          <a
            href='https://www.terraria.org/'
            target='_blank'
            className='underline link-hover'
          >
            Terraria
          </a>{' '}
          - you know it!
        </p>
      </article>
    </motion.section>
  );
}
