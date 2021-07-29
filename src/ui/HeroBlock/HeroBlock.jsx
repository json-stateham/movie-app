import { useState, useEffect } from 'react'
import styles from './HeroBlock.module.scss'

const HeroBlock = ({
  children,
  backdrop,
  title,
  releaseYear,
  genres,
  overview,
}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero} style={backdrop} />
      {children}     
    </div>
  )
}

export { HeroBlock }