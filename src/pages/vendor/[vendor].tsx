import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Spinner from '@components/Spinner'
import Container from '@components/Container'
import Store from '@components/Store'
import { createClient } from '../../../prismicio'
import { StoreProptype } from '@components/Types/PropTypes'
import { Vendor } from '@components/Types/PropTypes'

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient()
  const vendors = await client.getAllByType('vendor')
  const paths = vendors.map((vendor) => ({
    params: { vendor: vendor.uid as string },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params, previewData }: any) => {
  const client = createClient({ previewData })
  const vendor = await client.getByUID('vendor', params.vendor)
  const allProducts = await client.getByType('product')

  const products = allProducts.results
    .filter((product) => product.data.vendorName.uid === params.vendor)
    .map((product) => product.data)

  if (!vendor) {
    return { notFound: true }
  }

  return {
    props: {
      vendor,
      products,
    },
    revalidate: 200,
  }
}

const Vendor = ({ vendor, products }: StoreProptype) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Spinner />
  }

  if (!vendor) {
    return <Spinner />
  }
  return (
    <Container>
      <Store vendor={vendor} products={products} />
    </Container>
  )
}

export default Vendor
