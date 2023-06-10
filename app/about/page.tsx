import Image from 'next/image';
import {
  AstroIcon,
  CssIcon,
  DiscordIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  VSCodeIcon,
  ViteIcon,
} from './components/SkillsIcon';

export default function AboutPage() {
  return (
    <main className='text-white mb-12 '>
      <div className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto sm:flex sm:gap-8'>
        <section className='mb-20 sm:w-[80ch]'>
          <article>
            <header className='mb-8'>
              <h1 className='font-bold text-3xl mb-2'>Character Profile</h1>
              <h2 className='text-sm italic'>
                <span className='text-span font-bold'>WARNING</span>:
                Professional at Google-fu, will search upon aggro*&emsp;
                <span className='line-through'>sorry, just had to</span>
              </h2>
            </header>
            <p className='mb-4'>
              Jokes aside, call me Henry! I&apos;m a{' '}
              <span className='text-span'> Front-end developer</span> and
              software development, especially the web, is my lingo. My
              adventure started back in high school at the age of 16 when I was
              learning{' '}
              <a
                href='https://en.wikipedia.org/wiki/Adobe_Flash'
                target='_blank'
                className='underline'
              >
                Adobe Flash
              </a>{' '}
              (rest in peace 2020) in my multimedia class, learning all sorts of
              design fundamentals.
            </p>
            <p className='mb-4'>
              Seeing simple, yet flashy animated graphics move across the screen
              tickled my brain but only accessible via a .swf file. Thus, my
              interest into this field began with one sole question: <br />
              <br />
              <span className='text-span font-bold text-lg'>
                &quot;What if I made this accessible to anyone for enjoy?&quot;
              </span>
            </p>
            <p className='mb-4'>
              Fast-forward today after several twists and turns in my life,
              front-end development is simply my calling to scratch that high
              school itch. Despite the challenges and continuous learning curve
              in this field, I would like to{' '}
              <span className='text-span font-bold'> prove</span> it to you and
              myself by creating websites accessible to all.
            </p>
            <p>
              Outside of my development life, nothing beats a productive day
              than sitting down and enjoying a good video game.{' '}
              <a
                href='https://www.ea.com/games/apex-legends'
                target='_blank'
                className='underline'
              >
                Apex Legends
              </a>{' '}
              anyone?
            </p>
          </article>
        </section>
        <section className='mb-32 sm:mb-10 sm:flex sm:gap-8 sm:justify-around'>
          <article className='mb-20'>
            <header className='mb-4'>
              <h1 className='font-bold text-3xl mb-2'>My Skills Tree</h1>
              <h2 className='text-sm italic'>
                I still got more skill points to spare!
              </h2>
            </header>
            <div className='flex gap-2 flex-wrap'>
              <HTMLIcon />
              <CssIcon />
              <JavaScriptIcon />
              <ReactIcon />
              <TailwindIcon />
              <PythonIcon />
            </div>
          </article>
          <article>
            <header className='mb-4'>
              <h1 className='font-bold text-3xl mb-2'>My Tools Inventory</h1>
              <h2 className='text-sm italic'>
                My inventory ain&apos;t full yet!
              </h2>
            </header>
            <div className='flex gap-2 flex-wrap'>
              <AstroIcon />
              <NextIcon />
              <DiscordIcon />
              <ViteIcon />
              <GitIcon />
              <GithubIcon />
              <VSCodeIcon />
              <FigmaIcon />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
