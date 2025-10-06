import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
        J. M. Bryant
      </span>
      <span style={{ 
        fontSize: '0.75rem', 
        padding: '2px 8px', 
        borderRadius: '4px',
        backgroundColor: 'rgba(74, 144, 226, 0.15)',
        color: 'rgba(74, 144, 226, 1)',
        fontWeight: 500,
        border: '1px solid rgba(74, 144, 226, 0.3)'
      }}>
        AI-First PM
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/ChewzyKids/pm-portfolio',
  },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Joseph M. Bryant',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Joseph M. Bryant – AI-First Product Manager" />
      <meta property="og:description" content="Product leadership combining enterprise CX, AI integration, and rapid execution. Live case studies and technical depth." />
      <meta name="description" content="Product leadership combining enterprise CX, AI integration, and rapid execution. Live case studies and technical depth." />
      <meta name="theme-color" content="#0a1628" />
      <meta property="og:image" content="/og-image.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  darkMode: true,
  primaryHue: 210,
  primarySaturation: 70,
  footer: {
    component: (
      <footer style={{ 
        borderTop: '1px solid var(--color-border, #2d3f5a)',
        padding: '2rem 0',
        marginTop: '4rem'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '90rem',
          margin: '0 auto',
          padding: '0 1rem',
          fontSize: '0.875rem',
          color: '#7a8a9f'
        }}>
          <span>{new Date().getFullYear()} Joseph M. Bryant. Still waters run deep.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://github.com/ChewzyKids" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#a8b5c7', textDecoration: 'none' }}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/josephmbryant" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#a8b5c7', textDecoration: 'none' }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  toc: {
    title: 'On This Page',
    float: true,
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  gitTimestamp: null,
}

export default config
