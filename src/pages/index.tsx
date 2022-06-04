import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Container from '@components/Container'
import useHasMounted from 'src/hooks/useHasMounted'
import Carousel from '@components/Carousel'
import VendorList from '@components/Vendor/VendorList'
import Heading from '@components/Heading'
import { createClient } from '../../prismicio'
import { Vendor } from '@components/Types/PropTypes'

import styles from '@styles/Home.module.scss'
import Banner from '@components/Banner'

export interface Props {
  vendors: Vendor[]
  featuredVendors: Vendor[]
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const vendors = await client.getAllByType('vendor')
  const featuredVendors = vendors.filter((vendor) => vendor.data.featured)
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
        <meta name="description" content="Shop at our vendors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.padding}>
        <Heading message={'Featured vendors'} />
        <Carousel featuredVendors={featuredVendors} />
        <main className={styles.main}>
          <Banner />
          <Heading message={'Shop at our vendors'} />
          <VendorList vendors={vendors} />
        </main>
      </Container>
    </div>
  )
}

export default Home
