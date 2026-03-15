'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'REST API Service',
    description: 'High-performance backend API built with Rust and Axum, featuring JWT auth and PostgreSQL.',
    tags: ['Rust', 'Axum', 'PostgreSQL'],
    gradient: 'from-violet-600/20 to-blue-600/10',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio with GSAP animations, Next.js App Router, and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'GSAP'],
    gradient: 'from-blue-600/20 to-cyan-600/10',
    link: '#',
  },
  {
    title: 'Auth System',
    description: 'Secure authentication with refresh tokens, role-based access control, and session management.',
    tags: ['ASP.NET Core', 'JWT', 'SQL Server'],
    gradient: 'from-cyan-600/20 to-teal-600/10',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Full-stack blogging app with markdown support, tags, and an admin dashboard.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    gradient: 'from-pink-600/20 to-rose-600/10',
    link: '#',
  },
];

export default function ShowcasesPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            My Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Showcases
          </h1>
          <p className="text-neutral-400 text-base max-w-lg mx-auto">
            A collection of projects I've built — ranging from APIs to full-stack web apps.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group relative rounded-2xl border border-neutral-800 bg-gradient-to-br ${project.gradient} p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              {/* Top accent */}
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 mb-4" />

              <h2 className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 text-neutral-600 group-hover:text-violet-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
