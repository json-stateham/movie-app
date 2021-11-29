import { useStore } from 'effector-react'
import { MoviesCardsGrid, Animation } from 'entities'
import { Pagination } from 'feature'
import { $page } from 'feature/pagination/model'

const Main = () => {
  const page = useStore($page)

  // const HeroImage = `${API_CONFIG.IMAGES_URL}${imagesSize.BACKDROP.w1280}${results?.[0]?.backdrop_path}`
  // const heroPoster = `${API_CONFIG.IMAGES_URL}${imagesSize.THUMB.w500}${results?.[0]?.poster_path}`

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
