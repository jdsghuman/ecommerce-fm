import Link from 'next/link'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Container from '@components/Container'
import useHasMounted from '@components/hooks/useHasMounted'
import markets from '@data/markets.json'
import Carousel from '@components/Carousel'
import VendorList from '@components/Vendor/VendorList'
import { Vendor, VendorsPropType } from '@components/Vendor/Types'
import Heading from '@components/Heading'
import styles from '@styles/Home.module.scss'

export interface Props {
  vendors: Vendor[]
  featuredVendors: Vendor[]
}

export const getStaticProps: GetStaticProps = async () => {
  const vendors = markets
  const featuredVendors = markets.filter((market) => market.featured === true)
  return {
    props: {
      vendors,
      featuredVendors,
    },
  }
}
const Home = ({ vendors, featuredVendors }: Props) => {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ecommerce-fm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css" />
      </Head>
      <Container className={styles.padding}>
        <Heading message={'Featured vendors'} />
        <Carousel featuredVendors={featuredVendors} />
        <main className={styles.main}>
          <Heading message={'Shop at our vendors'} />
          <VendorList vendors={vendors} />
        </main>
      </Container>
      <script async src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js" />
      <div
        hidden
        id="snipcart"
        data-api-key="N2FjODNkNzMtMDUxNC00OTkzLWFiZDktYWVkZDYxMDE3ZDI5NjM3Njg0Nzc5NTYxNDA4OTUw"
      />
    </div>
  )
}

export default Home
