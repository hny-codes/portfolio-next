import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='fixed w-full bottom-0 text-white bg-[var(--clr-primary-03)]'>
      <div className='flex justify-between items-center py-2.5 px-8 sm:max-w-[var(--max-width)] sm:mx-auto'>
        <h3 className=''>
          Built with{' '}
          <a
            href='https://nextjs.org/'
            target='_blank'
            className='underline link-hover'
          >
            Next
          </a>
        </h3>
        <div className='flex gap-4'>
          <a
            href='https://github.com/hny-codes'
            target='_blank'
            className='hover:text-[var(--clr-secondary-01)] link-hover'
            aria-label='Link to Github Profile'
          >
            <Github />
          </a>
          <a
            href='#'
            className='hover:text-[var(--clr-secondary-01)] link-hover'
            target='_blank'
            aria-label='Link to LinkedIn Profile'
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
