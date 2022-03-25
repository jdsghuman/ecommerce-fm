import { useState } from 'react'
import Image from 'next/image'
import { VendorProptype } from '@components/Types/PropTypes'
import StoreProductList from './StoreProductList'

import styles from './Store.module.scss'
import Button from '@components/Button'

const Store = ({ data }: VendorProptype) => {
  const [showProducts, setShowProducts] = useState(true)

  const toggleButton = (type: string) => {
    if (type === 'product') {
      if (!showProducts) {
        setShowProducts(!showProducts)
      }
    }
    if (type === 'about') {
      if (showProducts) {
        setShowProducts(!showProducts)
      }
    }
  }

  console.log('data', data)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <Image src={data.image} alt={data.title} width={800} height={400} layout="responsive" />
      <div className={styles.container__toggle}>
        <Button
          onClick={() => toggleButton('product')}
          className={styles.product__title}
          primary={showProducts ? true : false}
        >
          Products
        </Button>{' '}
        <Button
          onClick={() => toggleButton('about')}
          className={styles.product__title}
          primary={!showProducts ? true : false}
        >
          About us
        </Button>
      </div>
      {data.products && showProducts ? (
        <StoreProductList products={data.products} url={data.slug} />
      ) : null}
      {!showProducts && <p className={styles.about}>{data.description}</p>}
    </div>
  )
}

export default Store
