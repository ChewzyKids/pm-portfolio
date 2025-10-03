import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../lib/seo.config'
import '../styles/nextra-tweaks.css'
export default function App({ Component, pageProps }: AppProps) {
return (
<>
<DefaultSeo {...SEO} />
<Component {...pageProps} />
</>
)
}
