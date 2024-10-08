import AboutInfo from './components/AboutInfo';
import Skills from './components/Skills';

export default function AboutPage() {
  return (
    <main className='text-white mb-8 xl:mb-14'>
      <div className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto md:grid grid-cols-2 sm:gap-16 bg-gray-100/10 sm:rounded-3xl pt-8 pb-2'>
        <Skills />
        <AboutInfo />
      </div>
    </main>
  );
}
