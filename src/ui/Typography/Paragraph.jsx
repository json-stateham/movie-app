import styles from './Paragraph.module.scss'

const Paragraph = ({ children, spacing = {} }) => {
  return (
    <p style={spacing} className={styles.paragraph}>
      {children}
    </p>
  )
}

export { Paragraph }