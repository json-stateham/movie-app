import styles from './Paragraph.module.scss'

const Paragraph = ({ children, spacing = {}, style = {} }) => {
  return (
    <p style={ {...spacing, ...style }} className={styles.paragraph}>
      {children}
    </p>
  )
}

export { Paragraph }