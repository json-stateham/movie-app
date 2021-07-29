import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './HeroPicture.module.scss'

const HeroPicture = ({ backdrop, poster, title, releaseYear, genres, overview }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(!mounted)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.hero} style={backdrop} />
      <CSSTransition
        in={mounted}
        timeout={4500}
        classNames="poster"
      >
        <div className={styles.poster}>
          <img src={poster} alt="" />
        </div>
      </CSSTransition>
      <CSSTransition
        in={mounted}
        timeout={1500}
        classNames="fade"
      >
        <div className={styles.movieInfoWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.row}>
            <span className={styles.year}>{releaseYear}</span>
            <span className={styles.genres}>{genres}</span>
          </div>
          <p className={styles.overview}>{overview}</p>
        </div>
      </CSSTransition>
    </div>
  )
}

export { HeroPicture }