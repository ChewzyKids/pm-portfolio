// components/Hero.tsx
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-14 pb-10">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Joseph M. Bryant — <span className="opacity-80">AI-First Product Manager</span>
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-300">
        Shipping calm, credible outcomes: enterprise CX, founder execution, and live MVPs.
        Still waters run deep.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/cases" className="nx-button nx-button-primary">Case Studies</a>
        <a href="/resume" className="nx-button">Résumé</a>
        <a href="/press" className="nx-button">Press & Demos</a>
      </div>
    </section>
  );
};

export default Hero;
