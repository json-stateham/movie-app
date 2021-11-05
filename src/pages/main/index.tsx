import { useEffect, useState, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useGetMoviesQuery } from 'services/moviesApi'
import { useTranslation } from 'react-i18next'
import { API_CONFIG, IMAGE_BACKDROP, IMAGE_THUMB } from 'config'
// const { THUMB } = IMAGE_SIZE
import {
  Grid,
  HeroBlock,
  LoadingTape,
  Thumb,
  Tabs,
  HeroPoster,
  HeroInfo,
} from 'ui'
// import { InfiniteScrollTrigger } from 'entities/InfiniteScrollTrigger'
import NoImage from 'shared/assets/images/no_image.jpg'

import { IGenres, IMoviesList } from 'types/common'

const Main = () => {
  const [page, setPage] = useState<number>(1)
  // const { data, error, isLoading } = useGetMoviesQuery({ listType: 'top_rated', page })
  const { data, error, isLoading } = useGetMoviesQuery({
    listType: 'top_rated',
    page,
  })

  // const { data } = useGetGenresQuery(null)
  console.log(data)
  const mounted = useRef<boolean>(false)
  const { t } = useTranslation()

  const MAX_GENRE_COUNT = 3

  const genreIdsToGenreNames = (genresList: IGenres[], genreIds: number[]) =>
    genresList
      ?.reduce((acc: string[], { id, name }) => {
        genreIds?.includes(id) && acc.push(name)
        return acc
      }, [])
      .slice(0, MAX_GENRE_COUNT)
      .map((genre, idx, { length }) =>
        idx !== length - 1 ? `${genre}, ` : genre,
      )

  const renderMoviesThumbs = data?.map(
    ({
      genre_ids,
      id,
      title,
      poster_path,
      release_date,
      vote_average,
    }: IMoviesList) => {
      // const genresCommaSeparated = genreIdsToGenreNames(genres, genre_ids)

      const moviePoster = poster_path
        ? `${import.meta.env.APP_IMAGE_URL}${IMAGE_THUMB.L}${poster_path}`
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
  // const releaseYear = results?.[0]?.release_date.split('-')[0]

  return (
    <>
      <Grid>{renderMoviesThumbs}</Grid>
      {/* {isFetching ? (
        <LoadingTape />
      ) : (
        <HeroBlock backdrop={{ backgroundImage: `url(${HeroImage})` }}>
          <HeroPoster imageSrc={heroPoster} />
          <HeroInfo
            title={results?.[0].title}
            release={releaseYear}
            genres={genreIdsToGenreNames(genres, results?.[0].genre_ids)}
            overview={results?.[0].overview}
          />
        </HeroBlock>
      )}
      <Tabs
        tabNames={URL_PARAMS}
        activeTab={urlParam}
        callback={fetchWithParam}
      />
      <SwitchTransition mode='out-in'>
        <CSSTransition key={urlParam} timeout={500} classNames='fade'>
          <Grid>{renderMoviesThumbs}</Grid>
        </CSSTransition>
      </SwitchTransition>
      <InfiniteScrollTrigger
        onIntersect={fetchNextPage}
        enabled={hasNextPage}
      /> */}
    </>
  )
}

export { Main }
