'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import gsap from 'gsap';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => setStatus('sent'),
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative">

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />

      <div ref={containerRef} className="relative z-10 w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Say Hello
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Contact Me
          </h1>
          <p className="text-neutral-400 text-sm">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm p-8 shadow-2xl">
          {status === 'sent' ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✉️</div>
              <h2 className="text-white text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-neutral-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
                  Name
                </label>
                <input
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-neutral-800/80 border border-neutral-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 outline-none transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-neutral-800/80 border border-neutral-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-neutral-800/80 border border-neutral-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-neutral-600 outline-none transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 mt-2"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-8 text-sm text-neutral-500">
          <a href="#" className="hover:text-violet-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-violet-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-violet-400 transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
}
