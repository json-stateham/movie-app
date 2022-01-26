import { useSearch } from 'react-location'
import { PageChangeAnimation } from 'entities/PageChangeAnimation'
import { MoviesCardsGrid } from 'entities/MoviesCardsGrid'
import { Pagination } from 'feature/pagination'
import { LocationGenerics } from 'app/Routes'
import { useCustomEventDetail } from 'shared/hooks/useCustomEventDetail'

const Movies = () => {
  const { page } = useSearch<LocationGenerics>()
  const totalPages = useCustomEventDetail('gotTotalPages')

  return (
    <>
      <PageChangeAnimation
        keyProp={page as number}
        timeout={500}
        classNames="fade"
      >
        <MoviesCardsGrid currentPage={page as number} />
      </PageChangeAnimation>
      <Pagination currentPage={page as number} totalPages={totalPages} />
    </>
  )
}

export default Movies
