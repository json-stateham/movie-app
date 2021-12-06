import { useStore } from 'effector-react'
import { PageChangeAnimation } from 'entities/PageChangeAnimation'
import { MoviesCardsGrid } from 'entities/MoviesCardsGrid'
import { Pagination } from 'feature/pagination'
import { $page } from 'feature/pagination/model'

const Main = () => {
  const page = useStore($page)

  return (
    <>
      <PageChangeAnimation keyProp={page} timeout={500} classNames="fade">
        <MoviesCardsGrid currentPage={page} />
      </PageChangeAnimation>
      <Pagination />
    </>
  )
}

export { Main }
