
Joseph M. Bryant <joebryantjr@gmail.com>
3:07 PM (0 minutes ago)
to me

import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
logo: <span>Joseph M. Bryant – Portfolio</span>,
project: { link: 'https://github.com/ChewzyKids/pm-portfolio' },
docsRepositoryBase: 'https://github.com/ChewzyKids/pm-portfolio/tree/main/docs-site',
head: (
<>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="og:image" content="/og.png" />
<link rel="icon" href="/favicon.ico" />
</>
),
footer: { text: '© Joseph M. Bryant' }
}

export default config
