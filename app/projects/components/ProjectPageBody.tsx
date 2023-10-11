'use client';

import { motion } from 'framer-motion';
import { pageVariant } from '@/lib/framerAnim';
import Link from 'next/link';
import { Milestone } from 'lucide-react';
import TopAnchor from '../components/TopAnchor';
import SkillBadge from '../components/SkillBadge';

type Props = {
  skills: string[];
  html: TrustedHTML;
};

export default function ProjectPageBody({ skills, html }: Props) {
  return (
    <motion.div
      variants={pageVariant}
      initial='pageInitial'
      animate='pageDelayEnter'
      className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto mt-10 sm:mt-0 mb-10 sm:mb-16  bg-gray-100/10 sm:rounded-3xl pt-4 pb-2 sm:pb-0'
    >
      <div className='border-b-2 pb-4 sm:hidden'>
        <SkillBadge skills={skills} />
      </div>
      <div
        className='mt-4 project-page sm:border-t-2 sm:pt-4'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className='flex justify-between my-10 border-t-2 pt-4'>
        <Link
          href={'/projects'}
          className='flex gap-2 hover:transition hover:text-[var(--clr-secondary-01)]'
        >
          <Milestone />
          Projects
        </Link>
        <TopAnchor />
      </div>
    </motion.div>
  );
}
