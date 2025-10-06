import React from ‘react’

export const Hero: React.FC = () => {
return (
<section className="mx-auto max-w-4xl px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
Joseph M. Bryant
<span className="block mt-2 text-3xl sm:text-4xl text-slate-400 font-normal">
AI-First Product Manager
</span>
</h1>

```
    <p className="text-lg sm:text-xl leading-relaxed text-slate-300 max-w-3xl">
      Shipping calm, credible outcomes through enterprise CX expertise, founder-level execution, 
      and live MVPs. Combining 12+ years of product leadership with AI-assisted development 
      to deliver measurable results in days, not quarters.
    </p>

    <p className="text-base text-slate-400 italic max-w-2xl">
      Still waters run deep.
    </p>

    <div className="flex flex-wrap gap-3 pt-4">
      <a 
        href="/cases" 
        className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Case Studies
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </a>
      
      <a 
        href="/resume" 
        className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Résumé
      </a>
      
      <a 
        href="/press" 
        className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Press & Demos
      </a>
    </div>
  </div>

  <div className="mt-12 pt-8 border-t border-slate-700/50">
    <div className="flex flex-wrap gap-8 text-sm">
      <div className="flex items-center gap-2 text-slate-400">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Enterprise CX Systems</span>
      </div>
      <div className="flex items-center gap-2 text-slate-400">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Rapid AI-Assisted Development</span>
      </div>
      <div className="flex items-center gap-2 text-slate-400">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Measurable Business Outcomes</span>
      </div>
    </div>
  </div>
</section>
```

)
}
