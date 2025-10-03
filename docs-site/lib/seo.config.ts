import { NextSeoProps } from 'next-seo'
const SEO: NextSeoProps = {
title: 'Joseph M. Bryant — AI-First PM',
description: 'AI-first product manager with enterprise CX depth, founder execution, and live MVPs.',
openGraph: {
type: 'website',
site_name: 'Joseph M. Bryant — Portfolio',
images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Joseph M. Bryant — AI-First PM' }]
},
twitter: { cardType: 'summary_large_image' }
}
export default SEO
