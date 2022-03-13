import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames/bind'
import { CgArrowRight } from 'react-icons/cg'
import Button from '@components/Button'
import { truncateText } from '@components/Util/Util'
import { Vendor } from '../Types'
import styles from './VendorItem.module.scss'

const cx = classNames.bind(styles)

const VendorItem = ({ id, image, title, description, slug }: Vendor) => {
  return (
    <div className={styles.item} key={id}>
      {image ? (
        <div>
          <Link href={`/vendor/` + slug} passHref>
            <Image
              src={image}
              alt={title}
              className={styles.item__image}
              width={475}
              height={300}
            />
          </Link>
        </div>
      ) : (
        <div className={cx('item__image', 'item__image--default')}></div>
      )}
      <div className={styles.item__link}>
        <Link href={`/vendor/` + slug}>
          <a>{truncateText(title, 60)}</a>
        </Link>
      </div>
      <p className={styles.item__description}>
        {description.length > 154 ? truncateText(description, 154) : description}
      </p>
      <div className={cx('item__container__button')}>
        <Link href={`/vendor/` + slug} passHref>
          <Button className={styles.item__button} type="button" accent>
            Visit vendor <CgArrowRight className={styles.icon} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default VendorItem
