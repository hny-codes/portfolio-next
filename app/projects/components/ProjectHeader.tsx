'use client';

import { motion } from 'framer-motion';
import { pageVariant } from '@/lib/framerAnim';

export default function ProjectHeader() {
  return (
    <motion.div
      variants={pageVariant}
      initial='pageInitial'
      animate='pageEnter'
    >
      <h1 className='font-bold text-3xl mb-2'>Projects</h1>
      <h2 className='mb-8'>
        Take a look at my work! All projects are available on my{' '}
        <a
          href='https://github.com/hny-codes'
          target='_blank'
          className='underline link-hover'
        >
          Github
        </a>
        .
      </h2>
    </motion.div>
  );
}
