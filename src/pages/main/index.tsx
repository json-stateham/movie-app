import { useStore } from 'effector-react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { fetchMoviesList } from './model'
import { IMAGE_THUMB } from 'config/images'
import { Pagination } from 'feature'
import { $page } from 'feature/pagination/model'

import {
  Grid,
  HeroBlock,
  LoadingTape,
  Thumb,
  Tabs,
  HeroPoster,
  HeroInfo,
} from 'ui'
import NoImage from 'shared/assets/images/no_image.jpg'

const Main = () => {
  const page = useStore($page)

  const { isLoading, data } = useQuery(
    ['moviesList', page],
    () => fetchMoviesList(page),
    { keepPreviousData: true },
  )

  const { t } = useTranslation()

  const renderedMoviesCards = data?.movies?.map(
    ({ genre_ids, id, title, poster_path, release_date, vote_average }) => {
      const moviePoster = poster_path
        ? `${import.meta.env.APP_IMAGE_URL}/${IMAGE_THUMB.L}${poster_path}`
        : NoImage

      return (
        <Thumb
          clickable
          key={id}
          alt={title}
          movieId={id}
          title={title}
          release={release_date}
          genres={genre_ids.join(', ')}
          rating={vote_average}
          image={moviePoster}
          isLazy
        />
      )
    },
  )

  // const HeroImage = `${API_CONFIG.IMAGES_URL}${imagesSize.BACKDROP.w1280}${results?.[0]?.backdrop_path}`
  // const heroPoster = `${API_CONFIG.IMAGES_URL}${imagesSize.THUMB.w500}${results?.[0]?.poster_path}`

  return (
    <>
      {isLoading ? (
        <LoadingTape />
      ) : (
        // <HeroBlock backdrop={{ backgroundImage: `url(${HeroImage})` }}>
        //   <HeroPoster imageSrc={heroPoster} />
        //   <HeroInfo
        //     title={results?.[0].title}
        //     release={releaseYear}
        //     genres={genreIdsToGenreNames(genres, results?.[0].genre_ids)}
        //     overview={results?.[0].overview}
        //   />
        // </HeroBlock>
        <>
          <SwitchTransition mode="out-in">
            <CSSTransition key={page} timeout={500} classNames="fade">
              <Grid>{renderedMoviesCards}</Grid>
            </CSSTransition>
          </SwitchTransition>
          <Pagination currentPage={page} totalPages={data?.totalPages} />
        </>
      )}
      {/* <Tabs
        tabNames={URL_PARAMS}
        activeTab={urlParam}
        callback={fetchWithParam}
      /> */}
    </>
  )
}

export { Main }
