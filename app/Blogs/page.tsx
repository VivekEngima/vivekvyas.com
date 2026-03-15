'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type Blog = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  gradient: string;
};

const blogs: Blog[] = [
  {
    title: 'Building REST APIs with Rust and Axum',
    excerpt:
      'A deep dive into creating high-performance, type-safe REST APIs using Rust\'s Axum framework with JWT authentication and PostgreSQL integration.',
    date: 'Mar 10, 2026',
    readTime: '8 min read',
    tags: ['Rust', 'Axum', 'Backend'],
    gradient: 'from-violet-600/20 to-blue-600/10',
  },
  {
    title: 'Next.js App Router — Everything You Need to Know',
    excerpt:
      'A complete guide to Next.js 14 App Router: layouts, server components, data fetching patterns, and how it differs from the Pages Router.',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    tags: ['Next.js', 'TypeScript', 'React'],
    gradient: 'from-blue-600/20 to-cyan-600/10',
  },
  {
    title: 'Mastering SQL Query Optimization',
    excerpt:
      'Practical techniques for optimizing slow SQL queries — covering indexes, execution plans, query rewrites, and avoiding N+1 problems.',
    date: 'Feb 28, 2026',
    readTime: '10 min read',
    tags: ['SQL', 'Database', 'Performance'],
    gradient: 'from-cyan-600/20 to-teal-600/10',
  },
  {
    title: 'Tailwind CSS Tips You Wish You Knew Earlier',
    excerpt:
      'Lesser-known Tailwind utilities and patterns that will massively speed up your UI development workflow.',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    tags: ['Tailwind CSS', 'CSS', 'UI'],
    gradient: 'from-pink-600/20 to-rose-600/10',
  },
  {
    title: 'Authentication Deep Dive: JWT vs Sessions',
    excerpt:
      'A thorough comparison of JWT tokens and session-based authentication — when to use each, security trade-offs, and implementation patterns.',
    date: 'Feb 12, 2026',
    readTime: '7 min read',
    tags: ['Auth', 'Security', 'Backend'],
    gradient: 'from-orange-600/20 to-yellow-600/10',
  },
  {
    title: 'Why I Switched from C# to Rust for Backend',
    excerpt:
      'My personal journey moving from ASP.NET Core to Rust — the learning curve, performance gains, and where each language truly shines.',
    date: 'Feb 1, 2026',
    readTime: '9 min read',
    tags: ['Rust', 'C#', '.NET'],
    gradient: 'from-emerald-600/20 to-green-600/10',
  },
];

const ALL_TAGS = ['All', ...Array.from(new Set(blogs.flatMap((b) => b.tags)))];

export default function BlogsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const filtered = activeTag === 'All' ? blogs : blogs.filter((b) => b.tags.includes(activeTag));

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
    gsap.fromTo(
      filterRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    const visible = cardsRef.current.filter(Boolean);
    gsap.fromTo(
      visible,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
    );
  }, [activeTag]);

  return (
    <section className="min-h-screen py-16 px-4 relative">

      {/* Background glow */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Thoughts & Articles
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p className="text-neutral-400 text-base max-w-md mx-auto">
            Writing about backend development, web technologies, and the things I learn along the way.
          </p>
        </div>

        {/* Filter tags */}
        <div ref={filterRef} className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
                activeTag === tag
                  ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-neutral-900 border-neutral-700 text-neutral-400 hover:border-violet-500/50 hover:text-neutral-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((blog, i) => (
            <div
              key={blog.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group relative rounded-2xl border border-neutral-800 bg-gradient-to-br ${blog.gradient} p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              {/* Top accent bar */}
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 mb-4" />

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <span>{blog.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-violet-300 transition-colors duration-300">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
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

              {/* Read more */}
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-violet-500 group-hover:text-violet-300 transition-colors duration-300">
                Read article
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-neutral-600">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-sm">No posts found for this tag.</p>
          </div>
        )}
      </div>
    </section>
  );
}
