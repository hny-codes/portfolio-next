import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('./components/Hero'));

export default function Home() {
  return (
    <main className='sm:max-w-[var(--max-width)] sm:mx-auto'>
      <DynamicHero />
    </main>
  );
}
