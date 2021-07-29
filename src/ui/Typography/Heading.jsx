import clsx from 'clsx'
import styles from './Heading.module.scss'

const Heading = ({ children, variant = 'h3', spacing = {}, upperCase }) => {
  const variantsHash = {
    h1: (
      <h1
        style={spacing}
        className={clsx(styles[variant], upperCase && styles.upper)}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2
        style={spacing}
        className={clsx(styles[variant], upperCase && styles.upper)}
      >
        {children}
      </h2>
    ),
    h3: (
      <h3
        style={spacing}
        className={clsx(styles[variant], upperCase && styles.upper)}
      >
        {children}
      </h3>
    ),
  }

  return variantsHash[variant]
}

export { Heading }
