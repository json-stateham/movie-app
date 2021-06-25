import { useEffect, useRef } from 'react'
import {
  $movies,
  $genres,
  $page,
  $prevPage,
  $urlParam,
  setNextPage,
  setPrevPage,
  fetchMoviesFx,
  fetchGenresFx,
  setUrlParam,
  resetPage
} from './model'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
// import API from '../API'
import {
  API_URL,
  API_KEY,
  POPULAR_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from 'config'
// import HeroImage from '../components/HeroImage'
import { Grid } from 'ui'
import { Thumb } from 'ui'
import { Tabs } from 'ui'
// import SearchBar from '../components/SearchBar'
// import Button from '../components/Button'
import NoImage from 'images/no_image.jpg'

export const Main = () => {
  const { t } = useTranslation()
  const { results, total_pages } = useStore($movies)
  const { genres } = useStore($genres)
  const isFetching = useStore(fetchMoviesFx.pending)
  // const isFetchingError = useStore(fetchMoviesFx.fail)
  // const fetchMovie = useEvent(fetchMovieFx)
  const prevPage = useStore($prevPage)
  const page = useStore($page)
  const urlParam = useStore($urlParam)
  const url = `${API_URL}movie/${urlParam}?api_key=${API_KEY}&language=en-US&page=${page}`
  const genres_url = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
  const URL_PARAMS = ['popular', 'top_rated', 'upcoming']
  const loadMoreRef = useRef()
  const hasNextPage = prevPage > 1 || page < total_pages

  const fetchNextPage = () => setNextPage()
  const fetchWithParam = (param) => {
    setUrlParam(param)
    resetPage()
  }

  useEffect(() => {
    if (page !== prevPage) {
      fetchMoviesFx(url)
      fetchGenresFx(genres_url)
      setPrevPage(page)
    }
  }, [page, urlParam])

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  const renderMoviesThumbs = results?.map(
    ({
      genre_ids,
      id, title,
      poster_path,
      release_date,
      vote_average
    }) => {
      const MAX_GENRE_COUNT = 3

      const genreIdsToGenreNamesWithCommas =
        genres?.reduce((acc, { id, name }) => {
            genre_ids.includes(id) && acc.push(name)
            return acc
          }, [])
          .slice(0, MAX_GENRE_COUNT)
          .map((genre, idx, { length }) => 
            idx !== length - 1 ? `${genre}, ` : genre
          )

      const moviePoster = 
        poster_path 
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
          : NoImage

      return (
        <Thumb
          clickable
          key={id}
          alt={title}
          movieId={id}
          title={title}
          release={release_date}
          genres={genreIdsToGenreNamesWithCommas}
          rating={vote_average > 0 ? vote_average : 'N/A'}
          image={moviePoster}
        />
      )
    })


  return (
    <>
      <Tabs
        tabNames={URL_PARAMS}
        activeTab={urlParam}
        callback={fetchWithParam}
      />
      <Grid header={`${t(`${urlParam}`)} ${t('movies')}`}>
        {renderMoviesThumbs}
      </Grid>
      <div ref={loadMoreRef} className="load-more-trigger"></div>
    </>
  )
}
