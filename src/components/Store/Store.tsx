import { useState } from 'react'
import Image from 'next/image'
import StoreProductList from './StoreProductList'

import styles from './Store.module.scss'
import Button from '@components/Button'
import { StoreProptype } from '@components/Types/PropTypes'

const Store = ({ vendor, products }: StoreProptype) => {
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{vendor.data.name}</h1>
      <Image
        src={vendor.data.image.url}
        alt={vendor.data.name}
        width={800}
        height={400}
        layout="responsive"
      />
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
      {products && showProducts ? <StoreProductList products={products} /> : null}
      {!showProducts && <p className={styles.about}>{vendor.data.description}</p>}
    </div>
  )
}

export default Store
