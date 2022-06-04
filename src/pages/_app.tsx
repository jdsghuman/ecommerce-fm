import type { AppProps } from 'next/app'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../../prismicio'
import Layout from '@components/Layout'
import { SnipcartProvider } from 'src/hooks/useSnipcart'

import '../styles/globals.scss'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnipcartProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PrismicPreview>
      </PrismicProvider>
    </SnipcartProvider>
  )
}

export default MyApp
