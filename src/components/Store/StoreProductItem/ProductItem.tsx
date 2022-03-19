import Image from 'next/image'
import classNames from 'classnames/bind'
import { CgArrowRight } from 'react-icons/cg'
import Button from '@components/Button'
import { truncateText } from '@components/Util/Util'
import styles from './ProductItem.module.scss'

const cx = classNames.bind(styles)

interface ProductItemProps {
  id: string
  title: string
  description: string
  price: any[]
  image: string
}

const ProductItem = ({ id, title, description, price, image }: ProductItemProps) => {
  return (
    <div className={styles.item} key={id}>
      {image ? (
        <div>
          <Image src={image} alt={title} className={styles.item__image} width={475} height={300} />
        </div>
      ) : (
        <div className={cx('item__image', 'item__image--default')}></div>
      )}
      <div className={styles.item__title}>
        <a>{truncateText(title, 60)}</a>
      </div>
      <p className={styles.item__description}>
        {description.length > 154 ? truncateText(description, 154) : description}
      </p>
      <div className={cx('item__container__button')}>
        <Button className={styles.item__button} type="button" accent>
          Add to cart <CgArrowRight className={styles.icon} />
        </Button>
      </div>
    </div>
  )
}

export default ProductItem
