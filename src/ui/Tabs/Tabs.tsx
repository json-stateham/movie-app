import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import styles from './Tabs.module.scss'

interface IProps {
  tabNames: string[]
  activeTab: string
  callback(arg: string): void
}

const Tabs = ({ tabNames, activeTab, callback }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className={styles.tabs}>
      {tabNames?.map(tab => (
        <button
          key={tab}
          className={styles.tabItem}
          onClick={() => callback(tab)}
        >
          <div
            className={clsx(
              styles.tabTitle,
              tab === activeTab && styles.tabActive
            )}
            data-text={t(tab)}
          >
            <span>{t(tab)}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

export { Tabs }
