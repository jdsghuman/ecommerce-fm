import Image from 'next/image'
import classNames from 'classnames/bind'
import { CgArrowRight } from 'react-icons/cg'
import { truncateText, convertImage, toBase64 } from '@components/Util/Util'
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

interface ProductItemProps {
  title: string
  description: string
  price: string
  image: string
  options?: string
  url: string
  uid: string
}

const ProductItem = ({ uid, title, description, price, image, options, url }: ProductItemProps) => {
  return (
    <div className={styles.item} key={uid}>
      {image ? (
        <div>
          <Image
            src={image}
            alt={title}
            className={styles.item__image}
            width={475}
            height={300}
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(700, 475))}`}
          />
        </div>
      ) : (
        <div className={cx('item__image', 'item__image--default')}></div>
      )}
      <div className={styles.item__title}>
        <p>{truncateText(title, 60)}</p>
      </div>
      <p className={styles.item__description}>
        {description.length > 154 ? truncateText(description, 154) : description}
      </p>
      <div>
        <p>${price}</p>
      </div>
      <div className={styles.item__container__button}>
        <button
          className={cx('snipcart-add-item', 'item__button')}
          type="button"
          data-item-id={uid}
          data-item-price={price}
          data-item-url={`/vendor/${url}`}
          data-item-description={description}
          data-item-image={image}
          data-item-name={title}
        >
          Add to cart <CgArrowRight className={styles.icon} />
        </button>
      </div>
    </div>
  )
}

export default ProductItem
