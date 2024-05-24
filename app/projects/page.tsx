import ProjectContainer from './components/ProjectContainer';
import ProjectHeader from './components/ProjectHeader';

export default function page() {
  return (
    <main className='text-white mb-16'>
      <div className='px-8 sm:max-w-[var(--max-width)] sm:mx-auto'>
        <section>
          <ProjectHeader />
          <ProjectContainer />
        </section>
      </div>
    </main>
  );
}
