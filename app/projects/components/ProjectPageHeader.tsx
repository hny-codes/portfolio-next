'use client';

import { motion } from 'framer-motion';
import { pageVariant } from '@/lib/framerAnim';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import SkillBadge from '../components/SkillBadge';

type Props = {
  src: string;
  alt: string;
  title: string;
  content: string;
  site: string;
  link: string;
  skills: string[];
};

export default function ProjectPageHeader({
  src,
  alt,
  title,
  content,
  site,
  link,
  skills,
}: Props) {
  return (
    <motion.div
      variants={pageVariant}
      initial='pageInitial'
      animate='pageEnter'
      className='relative py-36 group rounded-lg text-center md:max-h-80 md:mt-4 md:sticky md:top-20'
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        className='object-cover object-top md:object-center overflow-hidden brightness-50 group-hover:brightness-[0.6] transition  md:rounded-lg'
      />
      <h1 className='absolute text-3xl md:text-4xl left-1/2 -translate-x-1/2 font-bold bottom-1/2 translate-y-1/2 animate-fadeIn group-hover:animate-fadeOut'>
        {title}
      </h1>
      <p className='absolute w-full p-8 left-1/2 -translate-x-1/2 font-bold bottom-1/2 translate-y-1/2 animate-fadeOut group-hover:animate-fadeIn'>
        {content}
      </p>
      <div className='absolute flex gap-4 right-0 bottom-3 px-8'>
        <a
          href={site}
          target='_blank'
          className='hover:rotate-12 hover:transition hover:text-[var(--clr-secondary-01)]'
        >
          <ExternalLink />
        </a>
        <a
          href={link}
          target='_blank'
          className='hover:rotate-12 hover:transition hover:text-[var(--clr-secondary-01)]'
        >
          <Github />
        </a>
      </div>
      <div className='hidden md:block absolute md:-bottom-20 lg:-bottom-[4.2rem] xl:-bottom-12'>
        <SkillBadge skills={skills} />
      </div>
    </motion.div>
  );
}
