import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import markets from '@data/markets.json'
import Spinner from '@components/Spinner'
import { VendorProptype } from '@components/Types/PropTypes'
import Container from '@components/Container'

export const getStaticPaths: GetStaticPaths = async () => {
  const vendors = markets

  const paths = vendors.map((vendor) => ({
    params: { vendor: vendor.id },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const vendors = markets

  const result = vendors.find(({ id }) => id === params.vendor)
  if (!result) {
    return { notFound: true }
  }

  return {
    props: {
      data: result,
    },
    revalidate: 200,
  }
}

const Vendor = ({ data }: VendorProptype) => {
  const router = useRouter()

  console.log('data', data)

  if (router.isFallback) {
    return <Spinner />
  }

  if (!data) {
    return <Spinner />
  }
  return (
    <Container>
      <div style={{ width: '100%', height: '500px' }}>
        <Image src={data.image} alt={data.title} width={1000} height={500} layout="responsive" />
      </div>
    </Container>
  )
}

export default Vendor
