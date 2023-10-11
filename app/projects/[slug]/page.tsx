import { allProjects } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, Github, Milestone } from 'lucide-react';
import SkillBadge from '../components/SkillBadge';
import TopAnchor from '../components/TopAnchor';

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._raw.flattenedPath,
  }));
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (projectItem) => projectItem._raw.flattenedPath === params.slug
  );

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.content,
    openGraph: {
      type: 'article',
      url: params.slug,
      siteName: project.title,
      description: project.content,
      images: '/images/profile.jpg',
    },
  };
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
    <article
      className='text-white sm:grid sm:grid-cols-2 gap-4 sm:max-w-[var(--max-width)] sm:mx-auto'
      id='project-article'
    >
      <div className='relative py-24 group rounded-lg text-center animate-enter sm:max-h-80 sm:mt-4 sm:sticky sm:top-20'>
        <Image
          src={project.src}
          alt={project.alt}
          fill={true}
          className='object-cover overflow-hidden brightness-50 group-hover:brightness-[0.6] transition  sm:rounded-lg'
        />
        <h1 className='absolute text-3xl sm:text-4xl left-1/2 -translate-x-1/2 font-bold bottom-1/2 translate-y-1/2 animate-fadeIn group-hover:animate-fadeOut'>
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
        <div className='hidden sm:block absolute sm:-bottom-20 xl:-bottom-12'>
          <SkillBadge skills={project.skills} />
        </div>
      </div>
      <div className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto mt-10 sm:mt-0 mb-10 sm:mb-16 animate-delay-enter bg-gray-100/10 sm:rounded-3xl pt-4 pb-2 sm:pb-0'>
        <div className='border-b-2 pb-4 sm:hidden'>
          <SkillBadge skills={project.skills} />
        </div>
        <div
          className='mt-4 project-page sm:border-t-2 sm:pt-4'
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
          <TopAnchor />
        </div>
      </div>
    </article>
  );
}
