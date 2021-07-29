import { useEffect, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
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
  MOVIE_THUMB_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from 'config'
import { Grid, HeroPicture, LoadingTape, Thumb, Tabs } from 'ui'
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

  console.log(isFetching)

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

  const MAX_GENRE_COUNT = 3

  const genreIdsToGenreNames = (genresList, genreIds) =>
    genresList?.reduce((acc, { id, name }) => {
      genreIds?.includes(id) && acc.push(name)
      return acc
    }, [])
      .slice(0, MAX_GENRE_COUNT)
      .map((genre, idx, { length }) =>
        idx !== length - 1 ? `${genre}, ` : genre
      )

  const renderMoviesThumbs = results?.map(
    ({
      genre_ids,
      id,
      title,
      poster_path,
      release_date,
      vote_average
    }) => {
      const genresCommaSeparated = genreIdsToGenreNames(genres, genre_ids)

      const moviePoster =
        poster_path
          ? `${IMAGE_BASE_URL}${MOVIE_THUMB_SIZE}${poster_path}`
          : NoImage

      return (
        <Thumb
          clickable
          key={id}
          alt={title}
          movieId={id}
          title={title}
          release={release_date}
          genres={genresCommaSeparated}
          rating={vote_average > 0 ? vote_average : 'N/A'}
          image={moviePoster}
        />
      )
    })

  const HeroImage = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${results?.[0].backdrop_path}`
  const poster = `${IMAGE_BASE_URL}${MOVIE_THUMB_SIZE}${results?.[0].poster_path}`
  const releaseYear = results?.[0]?.release_date.split('-')[0]

  return (
    <>
      {isFetching ?
       <LoadingTape /> :
        <HeroPicture
          backdrop={{
            backgroundImage: `url(${HeroImage})`
          }}
          poster={poster}
          title={results?.[0].title}
          releaseYear={releaseYear}
          genres={genreIdsToGenreNames(genres, results?.[0].genre_ids)}
          overview={results?.[0].overview}
        />}
      <Tabs
        tabNames={URL_PARAMS}
        activeTab={urlParam}
        callback={fetchWithParam}
      />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={urlParam}
          timeout={500}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false)
          }}
          classNames="fade"
        >
          <Grid header={`${t(`${urlParam}`)}`}>
            {renderMoviesThumbs}
          </Grid>
        </CSSTransition>
      </SwitchTransition>
      <div ref={loadMoreRef} className="load-more-trigger"></div>
    </>
  )
}
