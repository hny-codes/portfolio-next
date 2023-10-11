'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github, Pencil } from 'lucide-react';
import SkillBadge from './SkillBadge';
import { motion } from 'framer-motion';
import { cardVariant } from '@/lib/framerAnim';

type Props = {
  url: string;
  link: string;
  site: string;
  title: string;
  content: string;
  src: string;
  alt: string;
  skills: string[];
  delay?: number;
};

export default function ProjectCard({
  url,
  link,
  site,
  title,
  content,
  src,
  alt,
  skills,
  delay,
}: Props) {
  return (
    <motion.div
      variants={cardVariant}
      initial='projectCardInitial'
      whileInView='projectCard'
      viewport={{ once: true }}
      custom={delay}
      className='project-hover sm:max-w-[400px]'
    >
      <Card className='h-full sm:grid sm:grid-rows-1'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <SkillBadge skills={skills} />
          <Image
            className='flex-grow object-contain'
            src={src}
            alt={alt}
            width={500}
            height={700}
          />
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className='flex gap-5 justify-between'>
          <div className='hover:rotate-12 hover:transition hover:text-[var(--clr-secondary-01)]'>
            <Link href={url}>
              <Pencil />
            </Link>
          </div>
          <div className='flex gap-6'>
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
        </CardFooter>
      </Card>
    </motion.div>
  );
}
