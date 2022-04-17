import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import markets from '@data/markets.json'
import Spinner from '@components/Spinner'
import { VendorProptype } from '@components/Types/PropTypes'
import Container from '@components/Container'
import Store from '@components/Store'
import { createClient } from '../../../prismicio'

export const getStaticPaths: GetStaticPaths = async () => {
  const vendors = markets

  const paths = vendors.map((vendor) => ({
    params: { vendor: vendor.id },
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
  const vendors = markets

  const result = vendors.find(({ id }) => id === params.vendor)
  if (!result) {
    return { notFound: true }
  }

  return {
    props: {
      data: result,
      vendor,
      products: products,
    },
    revalidate: 200,
  }
}

const Vendor = ({ data, vendor, products }: VendorProptype) => {
  const router = useRouter()

  console.log('data', data)
  console.log('vendor', vendor)
  console.log('products', products)

  if (router.isFallback) {
    return <Spinner />
  }

  if (!data) {
    return <Spinner />
  }
  return (
    <Container>
      <Store data={data} vendor={vendor} products={products} />
    </Container>
  )
}

export default Vendor
