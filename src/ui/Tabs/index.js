import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import './style.scss'
import TrendingIcon from '../../images/icons/movie-camera.png'
import TopRatedIcon from '../../images/icons/trophy.png'
import UpcomingIcon from '../../images/icons/clapper-board.png'

const ICONS = [TrendingIcon, TopRatedIcon, UpcomingIcon]

export const Tabs = ({ tabNames, activeTab, callback }) => {
  const { t } = useTranslation()

  return (
    <div className="tabs">
      {tabNames?.map((tab, idx) => (
        <button
          key={tab}
          className={
            tab === activeTab
              ? 'tabs__tab--active'
              : 'tabs__tab-item'}
          onClick={() => callback(tab)
          }
        >
          <img src={ICONS[idx]} className="tabs__tab-icon" aria-hidden />
          <div className="tabs__tab-title" data-text={t(tab)}>
            <span>
              {t(tab)}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  tabNames: PropTypes.array,
  callback: PropTypes.func
}
