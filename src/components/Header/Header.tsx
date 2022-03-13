import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import Container from 'src/components/Container'
import styles from './Header.module.scss'

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href="/">
          <a className={styles.headerTitle}>HTX Farmer&apos;s Market</a>
        </Link>
        <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span className="snipcart-total-price">$0.00</span>
          </button>
        </p>
      </Container>
    </header>
  )
}

export default Header
