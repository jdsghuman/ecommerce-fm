import styles from './Pagination.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface PaginationPropType {
  active: boolean
  count: number
  setActiveImage: (count: number) => void
}

const Pagination = ({ active, count, setActiveImage }: PaginationPropType) => {
  return (
    <li className={styles.pagination}>
      <div
        className={cx('pagination__circle', {
          'pagination__circle--active': active,
        })}
        onClick={() => setActiveImage(count)}
      ></div>
    </li>
  )
}

export default Pagination
