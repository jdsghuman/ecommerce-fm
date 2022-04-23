import { useState } from 'react'
import axios from 'axios'
import classNames from 'classnames/bind'
import Button from '@components/Button'
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)

const SubscribeBanner = () => {
  const [email, setEmail] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [required, setRequired] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim())
  }

  const handleSubmit = async () => {
    setLoading(true)
    if (email) {
      setRequired(false)
      if (!validateEmail(email)) {
        setLoading(false)
        setSuccessMessage(null)
        return setErrorMessage('Please enter a valid email')
      }
      try {
        await axios.post('/api/subscribe', { email })
        setLoading(false)
        setEmail('')
        setSuccessMessage('Thank you for subscribing!')
        setErrorMessage(null)
        setLoading(false)
      } catch (e: any) {
        setErrorMessage(e.response.data.error)
        console.log(e.response.data)
        setLoading(false)
      }
    } else {
      setRequired(true)
    }
  }

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  return (
    <div className={styles.banner}>
      <div className={styles['banner__bg-banner']} />
      <div className={styles.banner__container}>
        {successMessage && (
          <p
            className={cx('banner__text', {
              'banner__text--success': successMessage,
            })}
          >
            Thank you for subscribing!
          </p>
        )}
        {errorMessage && (
          <p
            className={cx('banner__text', {
              'banner__text--error': errorMessage || required,
            })}
          >
            {errorMessage}
          </p>
        )}
        {!errorMessage && !successMessage && (
          <p className={styles.banner__text}>Subscribe to market updates!</p>
        )}
        <div className={styles.form}>
          <input
            id="email"
            name="email"
            placeholder="Email"
            className={cx('form__field', {
              'form__field--error': errorMessage || required,
            })}
            onChange={handleChange}
            value={email}
            type="email"
            required
          />
          <label
            className={cx('form__label', {
              'form__label--error': errorMessage || required,
            })}
            htmlFor="email"
          >
            Email
          </label>
          <Button
            onClick={handleSubmit}
            className={styles.banner__button}
            type={'button'}
            disabled={loading}
            primary
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SubscribeBanner
