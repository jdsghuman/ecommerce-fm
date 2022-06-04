import { StoreProductList } from '@components/Types/PropTypes'
import ProductItem from '../StoreProductItem/ProductItem'

import styles from './StoreProductList.module.scss'

const StoreProductList = ({ products }: StoreProductList): JSX.Element => {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <ProductItem
          uid={product.uid}
          key={product.uid}
          title={product.name}
          image={product.image.url}
          description={product.description}
          price={product.price}
          options={product.options}
          url={product.name}
        />
      ))}
    </ul>
  )
}

export default StoreProductList
