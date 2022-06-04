import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import Container from 'src/components/Container'
import styles from './Header.module.scss'

import { useSnipcart } from 'src/hooks/useSnipcart'

const Header = ({}) => {
  const { cart = {} } = useSnipcart()
  const { subtotal = '0.00' } = cart
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link href="/">
          <a className={styles.headerTitle}>HTX Farmer&apos;s Market</a>
        </Link>
        <div className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>${subtotal}</span>
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header
