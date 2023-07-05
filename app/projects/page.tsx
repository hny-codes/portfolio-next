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
              link='https://github.com/hny-codes/hny-blogs'
              site='https://hny-blogs.vercel.app/'
              title='Hny-Blogs'
              content='A personal blog where I talk about just about my developer experiences, built with Contentful CMS as the backend'
              src='/images/projects/blog.png'
              alt='blog image'
              skills={['Astro', 'Contentful', 'Tailwind', 'React', 'Typescript']}
            />
            <ProjectCard
              link='https://github.com/hny-codes/IP-Address-Tracker'
              site='https://ip-address-tracker-hny-codes.vercel.app/'
              title='IP Address Tracker'
              content='A web app that allow users to enter an IP address and retrieve the location and information of the IP address'
              src='/images/projects/ip-tracker.png'
              alt='ip address image'
              skills={['Next', 'Tailwind', 'Typescript']}
            />
            <ProjectCard
              link='https://github.com/hny-codes/news-homepage-solution'
              site='https://github.com/hny-codes/news-homepage-solution'
              title='News Homepage'
              content='A project created to replicate a news webpage with a given design guide.'
              src='/images/projects/news-homepage.png'
              alt='image alt'
              skills={['Astro', 'VanillaJs', 'CSS']}
            />
            <ProjectCard
              link='https://github.com/hny-codes/summary-component-solution'
              site='https://hny-codes.github.io/summary-component-solution/'
              title='Summary Component'
              content='A project to replicate a component displaying summary statistics with a given design guide'
              src='/images/projects/summary-component.png'
              alt='summary component image'
              skills={['Vite', 'React', 'Typescript', 'CSS']}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
