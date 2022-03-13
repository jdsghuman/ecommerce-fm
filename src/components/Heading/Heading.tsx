import styles from './Heading.module.scss'

interface Prop {
  message: string
}

const Heading = ({ message }: Prop): JSX.Element => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{message}</h3>
    </div>
  )
}

export default Heading
