import ProjectCard from './components/ProjectCard';
import { allProjects } from 'contentlayer/generated';

export default function page() {
  return (
    <main className='text-white mb-12 '>
      <div className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto'>
        <section>
          <div className='animate-enter'>
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
          </div>
          <div className='flex flex-col gap-4 justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 '>
            {allProjects.map((project, idx) => (
              <ProjectCard
                url={project.url}
                key={idx}
                title={project.title}
                content={project.content}
                link={project.link}
                site={project.site}
                src={project.src}
                alt={project.alt}
                skills={project.skills}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
