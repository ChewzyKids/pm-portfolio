
Joseph M. Bryant <joebryantjr@gmail.com>
3:06 PM (0 minutes ago)
to me

import nextra from 'nextra'

const withNextra = nextra({
theme: 'nextra-theme-docs',
themeConfig: './theme.config.tsx'
})

const nextConfig = {
reactStrictMode: true
}

export default withNextra(nextConfig)
