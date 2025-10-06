import React from ‘react’
import { DocsThemeConfig } from ‘nextra-theme-docs’

const config: DocsThemeConfig = {
logo: (
<div style={{ display: ‘flex’, alignItems: ‘center’, gap: ‘12px’ }}>
<span style={{ fontWeight: 700, fontSize: ‘1.1rem’, letterSpacing: ‘-0.02em’ }}>
J. M. Bryant
</span>
<span style={{
fontSize: ‘0.75rem’,
padding: ‘2px 8px’,
borderRadius: ‘4px’,
backgroundColor: ‘rgba(74, 144, 226, 0.15)’,
color: ‘rgba(74, 144, 226, 1)’,
fontWeight: 500,
border: ‘1px solid rgba(74, 144, 226, 0.3)’
}}>
AI-First PM
</span>
</div>
),
project: {
link: ‘https://github.com/ChewzyKids/pm-portfolio’,
},
docsRepositoryBase: ‘https://github.com/ChewzyKids/pm-portfolio/tree/main’,
useNextSeoProps() {
return {
titleTemplate: ‘%s – Joseph M. Bryant’,
}
},
head: (
<>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="og:title" content="Joseph M. Bryant – AI-First Product Manager" />
<meta property="og:description" content="Product leadership combining enterprise CX, AI integration, and rapid execution. Live case studies and technical depth." />
<meta name="description" content="Product leadership combining enterprise CX, AI integration, and rapid execution. Live case studies and technical depth." />
<meta name="theme-color" content="#0a1628" />
<link rel="icon" href="/favicon.ico" />
</>
),
darkMode: true,
primaryHue: 210,
primarySaturation: 70,
footer: {
text: (
<div style={{
display: ‘flex’,
justifyContent: ‘space-between’,
alignItems: ‘center’,
width: ‘100%’,
fontSize: ‘0.875rem’,
color: ‘var(–color-text-tertiary)’
}}>
<span>© {new Date().getFullYear()} Joseph M. Bryant. Still waters run deep.</span>
<div style={{ display: ‘flex’, gap: ‘16px’ }}>
<a
href=“https://github.com/ChewzyKids”
target=”_blank”
rel=“noopener noreferrer”
style={{ color: ‘var(–color-text-secondary)’, textDecoration: ‘none’ }}
>
GitHub
</a>
<a
href=“https://linkedin.com/in/josephmbryant”
target=”_blank”
rel=“noopener noreferrer”
style={{ color: ‘var(–color-text-secondary)’, textDecoration: ‘none’ }}
>
LinkedIn
</a>
</div>
</div>
),
},
navigation: {
prev: true,
next: true,
},
toc: {
title: ‘On This Page’,
float: true,
backToTop: true,
},
editLink: {
text: null,
},
feedback: {
content: null,
},
sidebar: {
defaultMenuCollapseLevel: 1,
toggleButton: true,
},
gitTimestamp: null,
faviconGlyph: ‘✦’,
}

export default config
