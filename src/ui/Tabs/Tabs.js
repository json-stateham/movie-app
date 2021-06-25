import { useTranslation } from 'react-i18next'
import TrendingIcon from 'images/icons/movie-camera.png'
import TopRatedIcon from 'images/icons/trophy.png'
import UpcomingIcon from 'images/icons/clapper-board.png'

import styles from './Tabs.module.scss'

const Tabs = ({ tabNames, activeTab, callback }) => {
  const { t } = useTranslation()
  const icons = [TrendingIcon, TopRatedIcon, UpcomingIcon]

  return (
    <div className={styles.tabs}>
      {tabNames?.map((tab, idx) => (
        <button
          key={tab}
          className={
            tab === activeTab
              ? styles.tabActive
              : styles.tabItem
          }
          onClick={() => callback(tab)}
        >
          <img src={icons[idx]} className={styles.tabIcon} aria-hidden />
          <div className={styles.tabTitle} data-text={t(tab)}>
            <span>
              {t(tab)}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}

export { Tabs }