import { useStore } from 'effector-react'
import { Animation } from 'entities/Animation'
import { MoviesCardsGrid } from 'entities/MoviesCardsGrid'
import { Pagination } from 'feature/pagination'
import { $page } from 'feature/pagination/model'

const Main = () => {
  const page = useStore($page)

  return (
    <>
      <Animation keyProp={page} timeout={500} classNames="fade">
        <MoviesCardsGrid currentPage={page} />
      </Animation>
      <Pagination />
    </>
  )
}

export { Main }
