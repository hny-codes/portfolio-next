import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import ProjectPageHeader from '../components/ProjectPageHeader';
import ProjectPageBody from '../components/ProjectPageBody';

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
      <ProjectPageHeader
        title={project.title}
        src={project.src}
        alt={project.alt}
        content={project.content}
        link={project.link}
        site={project.site}
        skills={project.skills}
      />
      <ProjectPageBody skills={project.skills} html={project.body.html} />
    </article>
  );
}
