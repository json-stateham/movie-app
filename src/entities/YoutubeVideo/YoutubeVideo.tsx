import { RefObject } from 'react'

import styles from './YoutubeVideo.module.scss'

interface IYoutubeVideo {
  embedId: string
  title: string
}

const YoutubeVideo = ({ embedId, title = 'Youtube video' }: IYoutubeVideo) => (
  <div style={{ width: '100%' }}>
    <div className={styles.responsiveVideo}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  </div>
)

export { YoutubeVideo }
