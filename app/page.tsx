'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const techStack = [
  'Rust',
  'Axum',
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Tailwind CSS',
];

const typingPhrases = [
  'Scalable APIs',
  'Rust Backends',
  'Next.js Apps',
  'Beautiful UIs',
  'Fast Websites',
  'Clean Code',
];

export default function HomePage() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 },
    ).fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.6',
    );
  }, []);

  // Typing loop
  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setPhraseIndex((p) => (p + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className='min-h-screen flex items-center px-4 relative'>
      {/* Background glow blobs */}
      <div className='absolute top-1/3 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none' />

      <div className='relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* ── LEFT: Text content ── */}
        <div ref={leftRef} className='flex flex-col items-start text-left'>
          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mb-5'>
            Crafting{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400'>
              stunning
            </span>{' '}
            websites &amp; blazing-fast backends
          </h1>

          {/* Paragraph */}
          <p className='text-neutral-400 text-base leading-relaxed mb-8 max-w-md'>
            I'm a full-stack developer passionate about building{' '}
            <span className='text-neutral-200 font-medium'>
              beautiful, high-performance websites
            </span>{' '}
            with Next.js and{' '}
            <span className='text-neutral-200 font-medium'>
              robust, highly scalable APIs
            </span>{' '}
            with Rust — turning ideas into fast, elegant digital products.
          </p>

          {/* Tech stack pills */}
          <div className='flex flex-wrap gap-2 mb-8'>
            {techStack.map((tech) => (
              <span
                key={tech}
                className='text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 hover:border-violet-500/50 hover:text-neutral-100 transition-colors duration-300'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-4'>
            <Link
              href='/ShowCases'
              className='px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5'
            >
              View Showcases
            </Link>
            <Link
              href='/Contact'
              className='px-7 py-3 rounded-full border border-neutral-700 hover:border-violet-500/60 text-neutral-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5'
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Typing animation card ── */}
        <div ref={rightRef} className='flex items-center justify-center'>
          <div className='relative w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8 shadow-2xl'>
            {/* Glow behind card */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/10 to-blue-600/5 pointer-events-none' />

            {/* Top dot row — like a code editor */}
            <div className='flex items-center gap-1.5 mb-6'>
              <span className='w-3 h-3 rounded-full bg-red-500/70' />
              <span className='w-3 h-3 rounded-full bg-yellow-500/70' />
              <span className='w-3 h-3 rounded-full bg-green-500/70' />
              <span className='ml-auto text-xs text-neutral-600 font-mono'>
                portfolio.rs
              </span>
            </div>

            {/* Code-style lines */}
            <div className='font-mono text-sm space-y-3 relative z-10'>
              <p className='text-neutral-600'>
                <span className='text-blue-400'>const </span>
                <span className='text-violet-300'>developer </span>
                <span className='text-neutral-400'>= </span>
                <span className='text-green-400'>"Vivek" </span>;
              </p>
              <p className='text-neutral-600'>
                <span className='text-blue-400'>const </span>
                <span className='text-violet-300'>location </span>
                <span className='text-neutral-400'>=</span>
                <span className='text-green-400'>"India 🇮🇳"</span>;
              </p>
              <p className='text-neutral-600'>
                <span className='text-blue-400'>const </span>
                <span className='text-violet-300'>stack </span>
                <span className='text-neutral-400'>= </span>
                <span className='text-yellow-400'>["Rust", "Next.js"]</span>;
              </p>

              {/* Typing line */}
              <div className='mt-4 pt-4 border-t border-neutral-800'>
                <p className='text-neutral-500 text-xs mb-2'>
                  // currently building
                </p>
                <p className='text-lg font-bold'>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400'>
                    {displayText}
                  </span>
                  <span className='text-violet-400 animate-pulse'>|</span>
                </p>
              </div>

              {/* Status */}
              <div className='mt-4 pt-4 border-t border-neutral-800 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_2px_rgba(74,222,128,0.4)]' />
                <span className='text-neutral-500 text-xs'>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
