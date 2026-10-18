import React from 'react';
import type { Dictionary } from '@/types/content';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { FolderGit2 } from 'lucide-react';

export function Projects({ t }: { t: Dictionary }) {

  return (
    <section id="projects" className="py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          icon={FolderGit2}
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Projects List (Single column) */}
        <div className="space-y-6">
          {t.projects.items.map((project, idx) => (
            <Reveal key={project.id} delay={0.05}>
              <ProjectCard project={project} index={idx} t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
