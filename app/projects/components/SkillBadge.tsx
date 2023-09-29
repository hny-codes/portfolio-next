import React from 'react';
import { Badge } from '@/components/ui/badge';

type Prop = {
  skills: string[];
};

const createSkillList = (skill: string, idx: number) => {
  switch (skill) {
    case 'Astro':
      return (
        <Badge variant={'astro'} key={idx}>
          Astro
        </Badge>
      );
    case 'Next':
      return (
        <Badge variant={'next'} key={idx}>
          Next.js
        </Badge>
      );
    case 'Contentful':
      return (
        <Badge variant={'contentful'} key={idx}>
          Contentful CMS
        </Badge>
      );
    case 'React':
      return (
        <Badge variant={'react'} key={idx}>
          React
        </Badge>
      );
    case 'Typescript':
      return (
        <Badge variant={'typescript'} key={idx}>
          Typescript
        </Badge>
      );
    case 'Tailwind':
      return (
        <Badge variant={'tailwind'} key={idx}>
          Tailwind CSS
        </Badge>
      );
    case 'CSS':
      return (
        <Badge variant={'css'} key={idx}>
          CSS
        </Badge>
      );
    case 'VanillaJs':
      return (
        <Badge variant={'vanillaJs'} key={idx}>
          VanillaJs
        </Badge>
      );
    case 'Vite':
      return (
        <Badge variant={'vite'} key={idx}>
          Vite
        </Badge>
      );
    case 'Cypress':
      return (
        <Badge variant={'cypress'} key={idx}>
          Cypress
        </Badge>
      )
  }
};

export default function SkillBadge({ skills }: Prop) {
  return (
    <ul>
      {skills.map((skill, idx) => {
        return createSkillList(skill, idx);
      })}
    </ul>
  );
}
