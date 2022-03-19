import Image from 'next/image'
import { VendorProptype } from '@components/Types/PropTypes'
import StoreProductList from './StoreProductList'

const Store = ({ data }: VendorProptype) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} alt={data.title} width={800} height={400} layout="responsive" />
      <p>{data.description}</p>
      {data.products ? <StoreProductList products={data.products} /> : null}
    </div>
  )
}

export default Store
