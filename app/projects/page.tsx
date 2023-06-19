import ProjectCard from './components/ProjectCard';

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
            <ProjectCard
              link='https://github.com/hny-codes/news-homepage-solution'
              title='News Homepage'
              content='A project created to replicate a news webpage with a given design guide.'
              src='/images/projects/news-homepage.png'
              alt='image alt'
            />
            <ProjectCard
              link='https://github.com/hny-codes/summary-component-solution'
              title='Summary Component'
              content='A project to replicate a component displaying summary statistics with a given design guide'
              src='/images/projects/summary-component.png'
              alt='summary component image'
            />
          </div>
        </section>
      </div>
    </main>
  );
}
