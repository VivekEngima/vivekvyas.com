'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/Blogs', label: 'Blogs' },
  { href: '/ShowCases', label: 'ShowCases' },
  { href: '/Contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const activeIndex = navLinks.findIndex((l) => l.href === pathname);
    if (activeIndex === -1) return;

    const activeEl = linkRefs.current[activeIndex];
    const navEl = navRef.current;
    const indicator = indicatorRef.current;
    if (!activeEl || !navEl || !indicator) return;

    // Use offsetLeft for accurate position relative to parent
    const targetX = activeEl.offsetLeft;
    const targetWidth = activeEl.offsetWidth;

    gsap.to(indicator, {
      x: targetX,
      width: targetWidth,
      opacity: 1,
      duration: 0.45,
      ease: 'power3.inOut',
    });

    // Animate glow on indicator
    gsap.to(indicator, {
      boxShadow:
        '0 0 12px 3px rgba(139,92,246,0.6), 0 0 30px 6px rgba(139,92,246,0.25)',
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [pathname, mounted]);

  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
      <div
        ref={navRef}
        className='relative flex items-center bg-neutral-900/80 backdrop-blur-md border border-neutral-700/60 rounded-full px-1 py-1 shadow-xl'
      >
        {/* Sliding glow pill */}
        <div
          ref={indicatorRef}
          className='absolute top-1 left-0 h-[calc(100%-8px)] rounded-full pointer-events-none'
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.2))',
            border: '1px solid rgba(139,92,246,0.5)',
            width: 0,
            opacity: 0,
          }}
        />

        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                isActive
                  ? 'text-white drop-shadow-[0_0_8px_rgba(139,92,246,0.9)]'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
