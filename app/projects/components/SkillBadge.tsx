import React from 'react';
import { Badge } from '@/components/ui/badge';

type Prop = {
  skills: string[];
};

const skillList: Record<string, React.JSX.Element> = {
  Astro: <Badge variant={'astro'}>Astro</Badge>,
  Next: <Badge variant={'next'}>Next.js</Badge>,
  Contentful: <Badge variant={'contentful'}>Contentful CMS</Badge>,
  React: <Badge variant={'react'}>React</Badge>,
  Typescript: <Badge variant={'typescript'}>Typescript</Badge>,
  Tailwind: <Badge variant={'tailwind'}>Tailwind CSS</Badge>,
  CSS: <Badge variant={'css'}>CSS</Badge>,
  VanillaJs: <Badge variant={'vanillaJs'}>Vanilla Javascript</Badge>,
  Vite: <Badge variant={'vite'}>Vite</Badge>,
};

export default function SkillBadge({ skills }: Prop) {
  return (
    <ul>
      {skills.map((skill) => {
        return skillList[skill];
      })}
    </ul>
  );
}
