import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import styles from './Tabs.module.scss'

const Tabs = ({ tabNames, activeTab, callback }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.tabs}>
      {tabNames?.map((tab, idx) => (
        <button
          key={tab}
          className={styles.tabItem}
          onClick={() => callback(tab)}
        >
          <div className={clsx(styles.tabTitle, tab === activeTab && styles.tabActive)} data-text={t(tab)}>
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