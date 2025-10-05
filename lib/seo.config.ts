import { NextSeoProps } from 'next-seo'

const SEO: NextSeoProps = {
  title: 'Joseph M. Bryant — AI-First Product Manager',
  titleTemplate: '%s | Joseph M. Bryant',
  description: 'AI-first product manager building intelligent systems at the intersection of enterprise CX and rapid execution. Live MVPs, proven traction, deep technical fluency.',
  canonical: 'https://pm-portfolio.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pm-portfolio.vercel.app/',
    site_name: 'Joseph M. Bryant',
    title: 'Joseph M. Bryant — AI-First Product Manager',
    description: 'AI-first product manager building intelligent systems at the intersection of enterprise CX and rapid execution.',
    images: [
      {
        url: 'https://pm-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Joseph M. Bryant — AI-First Product Manager Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@josephmbryant',
    site: '@josephmbryant',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
    {
      name: 'theme-color',
      content: '#0a1628',
    },
    {
      name: 'author',
      content: 'Joseph M. Bryant',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

export default SEO
