import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 700 }}>Joseph M. Bryant</span>
      <span style={{ opacity: 0.6, marginLeft: 8 }}>• AI-First PM</span>
    </>
  ),
  project: { link: 'https://github.com/ChewzyKids/pm-portfolio' },
  docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main',
  navigation: true,
  darkMode: true,
  feedback: { content: null },
  editLink: { text: null },
  toc: { float: true, title: 'On this page' },
  search: { placeholder: 'Search portfolio…' },
  footer: {
    component: (
      <div style={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Joseph M. Bryant — Still Waters Run Deep
      </div>
    )
  }
}
export default config
