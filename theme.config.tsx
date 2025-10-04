// docs-site/theme.config.tsx
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Joseph M. Bryant – Portfolio</span>,
  project: { link: 'https://github.com/ChewzyKids/pm-portfolio' },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main/docs-site',
  head: (
    <>
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  footer: { text: '© Joseph M. Bryant' }
}

export default config
