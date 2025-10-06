import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span>Joseph M. Bryant</span>
      <span style={{ opacity: 0.6, marginLeft: '0.25rem' }}>• AI-First PM</span>
    </>
  ),

  project: {
    link: 'https://github.com/ChewzyKids/pm-portfolio'
  },

  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/blob/main/',
  footer: {
    text: '© 2025 Joseph M. Bryant — Still Waters Run Deep'
  },

  navigation: true, // 👈 ensures top-level nav is visible on desktop

  darkMode: true,
  feedback: { content: null },
  editLink: { component: null }, // avoids build errors (was "text" before)
  toc: { float: true, title: 'On this page' },
  search: { placeholder: 'Search portfolio…' },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Joseph M. Bryant — AI-First PM Portfolio" />
      <meta property="og:title" content="Joseph M. Bryant — AI-First PM Portfolio" />
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

export default config
