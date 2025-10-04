import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../lib/seo.config'          // no @ alias
import '../styles/globals.css'
import '../styles/nextra-tweaks.css'          // keep if you still have this file

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
