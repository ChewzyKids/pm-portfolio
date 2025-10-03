// CommonJS for Node CJS projects
module.exports = {
logo: (
<div style={{display:'flex',alignItems:'center',gap:8,fontWeight:700}}>
<span>Joseph M. Bryant</span>
<span style={{opacity:.6,fontWeight:500}}>· AI-First PM</span>
</div>
),
project: { link: 'https://github.com/ChewzyKids/pm-portfolio' },
docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main/docs-site',
editLink: { text: 'Suggest an improvement on GitHub' },
feedback: { content: 'Give quick feedback', labels: 'feedback,portfolio' },
banner: {
key: 'ck-demo',
text: (
<a href="https://chewzykids.com" target="_blank" rel="noreferrer">
ChewzyKids MVP — <strong>Try the demo</strong> (Play. Learn. Snack.)
</a>
)
},
useNextSeoProps() { return { titleTemplate: '%s — Joseph M. Bryant · AI-First PM' } },
head: (
<>
<meta name="theme-color" content="#0b1220" />
<meta name="description" content="Recruiter-ready portfolio: AI-first PM with enterprise CX depth, founder execution, and live MVPs." />
<meta property="og:title" content="Joseph M. Bryant — AI-First PM" />
<meta property="og:description" content="Case studies, live demos, and product tooling." />
<meta property="og:image" content="/og.jpg" />
<link rel="icon" href="/favicon.ico" />
</>
),
footer: { text: `© ${new Date().getFullYear()} Joseph M. Bryant — Product Strategy · CX Enablement · Digital Performance` },
primaryHue: 220,
navigation: { prev: true, next: true },
search: { placeholder: 'Search case studies…' },
navbar: {
extraContent: (
<div style={{display:'flex',gap:14,alignItems:'center'}}>
<a href="/cases">Case Studies</a>
<a href="/resume">Resume</a>
<a href="/press">Press</a>
<a href="https://chewzykids.com" target="_blank" rel="noreferrer">Try ChewzyKids</a>
</div>
)
}
}
