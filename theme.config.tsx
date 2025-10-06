import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 700 }}>Joseph M. Bryant</span>
      <span style={{ opacity: 0.6, marginLeft: 8 }}> • AI-First PM</span>
    </>
  ),
  project: {
    link: 'https://github.com/ChewzyKids/pm-portfolio'
  },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0b1020" />
      <meta
        name="description"
        content="AI-first product manager portfolio. Still Waters Run Deep."
      />
      <meta property="og:title" content="PM Portfolio — Joseph M. Bryant" />
      <meta
        property="og:description"
        content="AI-first product manager portfolio. Still Waters Run Deep."
      />
      <meta property="og:image" content="/og-image.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  ),
  footer: {
    content: (
      <div style={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Joseph M. Bryant — Still Waters Run Deep
      </div>
    )
  },
  navigation: true,
  primaryHue: 215,
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  editLink: { component: null },
  feedback: { content: null },
  toc: { float: true }
}

export default config
