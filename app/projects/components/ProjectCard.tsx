import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import SkillBadge from './SkillBadge';

type Props = {
  link: string;
  site: string;
  title: string;
  content: string;
  src: string;
  alt: string;
  skills: string[];
};

export default function ProjectCard({
  link,
  site,
  title,
  content,
  src,
  alt,
  skills
}: Props) {
  return (
    <div className='project-hover animate-delay-enter sm:max-w-[400px]'>
      <Card className='h-full sm:grid sm:grid-rows-1'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <Image src={src} alt={alt} width={500} height={700} />
          <SkillBadge skills={skills} />
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className='flex gap-5 justify-end'>
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
        </CardFooter>
      </Card>
    </div>
  );
}
