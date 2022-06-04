import React from 'react'
import classNames from 'classnames/bind'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links__container}>
        <div>
          <ul className={styles.footer__list__container}>
            <li>Market Hours:</li>
            <li>Saturday: 9am - 1pm</li>
          </ul>
        </div>
        <div>
          <ul className={cx('footer__list__container', 'footer__list__container--row')}>
            <li className={styles.footer__social__link}>
              <FaFacebookSquare />
            </li>
            <li className={styles.footer__social__link}>
              <FiInstagram />
            </li>
            <li className={styles.footer__social__link}>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.footer__list__container}>
            <li>Location</li>
            <li>Contact us</li>
            <li>Become a Vendor!</li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          &copy;<span className={styles.logo}>HTX </span> Market {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
