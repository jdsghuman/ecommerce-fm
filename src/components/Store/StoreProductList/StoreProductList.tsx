import { StoreProductList } from '@components/Types/PropTypes'
import ProductItem from '../StoreProductItem/ProductItem'

import styles from './StoreProductList.module.scss'

const StoreProductList = ({ products, url }: StoreProductList): JSX.Element => {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <ProductItem
          id={product.id}
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          options={product.options}
          url={url}
        />
      ))}
    </ul>
  )
}

export default StoreProductList
