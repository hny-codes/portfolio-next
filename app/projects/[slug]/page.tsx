import { allProjects } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Milestone, ArrowUpFromLine } from 'lucide-react';
import SkillBadge from '../components/SkillBadge';

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._raw.flattenedPath,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (projectItem) => projectItem._raw.flattenedPath === params.slug
  );

  if (!project) throw new Error(`Project not found: ${params.slug}`);
  return { title: project.title };
};

export default function ProjectLayout({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find(
    (projectItem) => projectItem._raw.flattenedPath === params.slug
  );
  if (!project) throw new Error(`Project not found: ${params.slug}`);

  return (
    <article className='text-white' id='project-article'>
      <div className='relative py-24 group rounded-lg text-center animate-enter'>
        <Image
          src={project.src}
          alt={project.alt}
          fill={true}
          className='object-cover overflow-hidden brightness-50 group-hover:brightness-[0.6] transition group-hover:object-[110%] '
        />
        <h1 className='absolute text-3xl left-1/2 -translate-x-1/2 font-bold bottom-1/2 translate-y-1/2 animate-fadeIn group-hover:animate-fadeOut'>
          {project.title}
        </h1>
        <p className='absolute w-full p-8 left-1/2 -translate-x-1/2 font-bold bottom-1/2 translate-y-1/2 animate-fadeOut group-hover:animate-fadeIn'>
          {project.content}
        </p>
        <div className='absolute flex gap-4 right-0 bottom-3 px-8'>
          <a
            href={project.site}
            target='_blank'
            className='hover:rotate-12 hover:transition hover:text-[var(--clr-secondary-01)]'
          >
            <ExternalLink />
          </a>
          <a
            href={project.link}
            target='_blank'
            className='hover:rotate-12 hover:transition hover:text-[var(--clr-secondary-01)]'
          >
            <Github />
          </a>
        </div>
      </div>
      <div className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto mt-4 mb-20 animate-delay-enter'>
        <div className='border-b-2 pb-4'>
          <SkillBadge skills={project.skills} />
        </div>
        <div
          className='mt-4 project-page'
          dangerouslySetInnerHTML={{ __html: project.body.html }}
        />
        <div className='flex justify-between my-10 border-t-2 pt-4'>
          <Link
            href={'/projects'}
            className='flex gap-2 hover:transition hover:text-[var(--clr-secondary-01)]'
          >
            <Milestone />
            Projects
          </Link>
          <a
            href='#'
            className='flex gap-2 hover:transition hover:text-[var(--clr-secondary-01)]'
          >
            <ArrowUpFromLine /> Top
          </a>
        </div>
      </div>
    </article>
  );
}
