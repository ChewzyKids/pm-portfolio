import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Joseph M. Bryant – Portfolio</span>,
  project: {
    link: 'https://github.com/ChewzyKids/pm-portfolio'
  },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main/docs-site',
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Joseph M. Bryant'
    }
  },
  head: (
    <>
      <meta property="og:title" content="Joseph M. Bryant — Product Portfolio" />
      <meta property="og:description" content="AI-first product strategy, cases, and demos." />
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  primaryHue: 210,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: '© Joseph M. Bryant'
  }
}

export default config
