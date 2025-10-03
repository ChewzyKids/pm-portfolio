import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
logo: <span>Joseph M. Bryant — Portfolio</span>,
project: { link: 'https://github.com/josephmbryantjr123/josephmbryantjr-portfolio' },
docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main/docs-site',
footer: { text: '© Joseph M. Bryant' },
useNextSeoProps() {
return {
titleTemplate: '%s — Joseph M. Bryant | AI-First PM'
}
},
primaryHue: 200
}

export default config
