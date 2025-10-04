import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../lib/seo.config'      // note the relative path (no "@")
import '../styles/globals.css'
import '../styles/nextra-tweaks.css'      // keep if this file exists

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
