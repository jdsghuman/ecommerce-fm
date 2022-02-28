import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; HTX Farmer&apos;s Market {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
