'use client';

import { allProjects } from 'contentlayer/generated';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { pageVariant } from '@/lib/framerAnim';

export default function ProjectContainer() {
  return (
    <motion.div
      variants={pageVariant}
      animate='projectList'
      className='flex flex-col gap-4 justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 '
    >
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
          delay={idx / 2}
        />
      ))}
    </motion.div>
  );
}
