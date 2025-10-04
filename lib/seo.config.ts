import type { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s – Joseph M. Bryant',
  defaultTitle: 'Joseph M. Bryant — AI-First PM',
  description:
    'AI-first product manager with enterprise CX depth, founder execution, and live MVPs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Joseph M. Bryant — AI-First PM',
    url: 'https://pm-portfolio-ruby.vercel.app/',
    images: [
      {
        url: 'https://pm-portfolio-ruby.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'Joseph M. Bryant — Portfolio'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image'
  }
}

export default SEO
