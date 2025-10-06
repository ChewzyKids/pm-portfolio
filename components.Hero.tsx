import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        🚀 Welcome to My PM Portfolio
      </h1>
      <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
        This site is now live on Vercel. Explore case studies, demos, and my résumé.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/cases"
          className="inline-flex items-center rounded-md border border-slate-700/50 bg-slate-800/40 px-4 py-2 text-sm no-underline hover:bg-slate-800/60 transition"
        >
          View Case Studies →
        </a>
        <a
          href="/press"
          className="inline-flex items-center rounded-md border border-slate-700/50 bg-slate-800/40 px-4 py-2 text-sm no-underline hover:bg-slate-800/60 transition"
        >
          Press & Demos
        </a>
        <a
          href="/resume"
          className="inline-flex items-center rounded-md border border-slate-700/50 bg-slate-800/40 px-4 py-2 text-sm no-underline hover:bg-slate-800/60 transition"
        >
          Résumé
        </a>
      </div>
    </section>
  );
};
