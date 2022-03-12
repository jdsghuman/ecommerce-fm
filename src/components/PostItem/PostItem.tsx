import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames/bind'
import { CgArrowRight } from 'react-icons/cg'
import PropTypes from 'prop-types'
import Button from '../Button'
import { truncateText } from '../Util/Util'
import styles from './PostItem.module.scss'

const cx = classNames.bind(styles)

interface PostItemPropTypes {
  id: string
  image: string
  title: string
  description: string
  slug: string
}

const PostItem = ({ id, image, title, description, slug }: PostItemPropTypes) => {
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
        <Link href={`/${slug}/` + slug}>
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

PostItem.propTypes = {
  article: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  slug: PropTypes.string.isRequired,
  lastRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
}

export default PostItem
