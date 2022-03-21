import Link from 'next/link'
import { truncateText } from '@components/Util/Util'
import styles from './CarouselItem.module.scss'

interface CarouselItemPropType {
  details: {
    label: string
    description: string
    slug: string
  }
  readMoreRef: any
}

const CarouselItem = ({ details, readMoreRef }: CarouselItemPropType) => (
  <div className={styles.item__container}>
    <div className={styles.item}>
      <h3 className={styles.item__title}>{details.label}</h3>
      <p className={styles.item__description}>{truncateText(details.description, 154)}</p>
      <Link href={`vendor/${details.slug}`}>
        <a ref={readMoreRef} className={styles.item__button}>
          Visit vendor
        </a>
      </Link>
    </div>
  </div>
)

export default CarouselItem
