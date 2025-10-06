import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
      J. M. Bryant
    </span>
  ),
  project: {
    link: 'https://github.com/ChewzyKids/pm-portfolio',
  },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Joseph M. Bryant – AI-First Product Manager" />
      <meta property="og:description" content="Product leadership combining enterprise CX, AI integration, and rapid execution." />
      <meta name="description" content="Product leadership combining enterprise CX, AI integration, and rapid execution." />
      <meta name="theme-color" content="#0a1628" />
      <meta property="og:image" content="/og-image.png" />
      <link rel="icon" href="/favicon.ico" />
      <title>Joseph M. Bryant – AI-First Product Manager</title>
    </>
  ),
  primaryHue: 210,
  primarySaturation: 70,
  footer: {
    component: (
      <div style={{ 
        borderTop: '1px solid #2d3f5a',
        padding: '2rem 1rem',
        marginTop: '4rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#7a8a9f'
      }}>
        {new Date().getFullYear()} Joseph M. Bryant. Still waters run deep.
      </div>
    ),
  },
  toc: {
    title: 'On This Page',
    float: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config
