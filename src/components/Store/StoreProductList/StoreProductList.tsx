import { StoreProductList } from '@components/Types/PropTypes'
import ProductItem from '../StoreProductItem/ProductItem'

const StoreProductList = ({ products }: StoreProductList): JSX.Element => {
  return (
    <>
      {products.map((product) => (
        <ProductItem
          id={product.id}
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
        />
      ))}
    </>
  )
}

export default StoreProductList
