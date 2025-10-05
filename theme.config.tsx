import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
      Joseph M. Bryant
    </span>
  ),
  project: {
    link: 'https://github.com/ChewzyKids/pm-portfolio',
  },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/blob/main',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Joseph M. Bryant — Built with{' '}
        <a
          href="https://nextra.site"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Nextra
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Joseph M. Bryant',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="AI-first product manager building intelligent systems at the intersection of enterprise CX and rapid execution."
      />
      <meta name="og:title" content="Joseph M. Bryant — AI-First PM" />
      <meta
        name="og:description"
        content="AI-first product manager building intelligent systems at the intersection of enterprise CX and rapid execution."
      />
      <meta name="apple-mobile-web-app-title" content="Joseph M. Bryant" />
    </>
  ),
  primaryHue: 210,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Questions? Feedback?',
    labels: 'feedback',
  },
  navigation: {
    prev: true,
    next: true,
  },
  gitTimestamp: false,
}

export default config
