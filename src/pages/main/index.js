import { useState, useEffect, useRef } from 'react'
import { createEffect, createStore, createEvent } from 'effector'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
// import API from '../API'
import {
  API_URL,
  API_KEY,
  POPULAR_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from '../../config'
// import HeroImage from '../components/HeroImage'
import { Grid } from '../../ui'
import { Thumb } from '../../ui'
import { Tabs } from '../../ui'
// import SearchBar from '../components/SearchBar'
// import Button from '../components/Button'
import NoImage from '../../images/no_image.jpg'

console.log(POPULAR_BASE_URL, BACKDROP_SIZE)


const setPrevPage = createEvent()
const setNextPage = createEvent()
const setUrlParam = createEvent()
const resetPage = createEvent()

const $prevPage = createStore(0)
  .on(setPrevPage, n => n + 1)
  .reset([resetPage])

const $page = createStore(1)
  .on(setNextPage, n => n + 1)
  .reset([resetPage])

const $urlParam = createStore('popular')
  .on(setUrlParam, (_, param) => param)

const fetchMoviesFx = createEffect(
  async url => await (await fetch(url)).json()
)

const fetchGenresFx = createEffect(
  async url => await (await fetch(url)).json()
)

const $movies = createStore([]).on(
  fetchMoviesFx.doneData,
  (state, data) =>
  ({
    ...state,
    total_pages: data.total_pages,
    results: $page.getState() > 1
      ? [...state.results, ...data.results]
      : [...data.results]
  })
)

const $genres = createStore([]).on(
  fetchGenresFx.doneData,
  (_, data) => data
)

/*

Component

*/

export const Main = () => {
  const { t } = useTranslation()
  const { results } = useStore($movies)
  const { total_pages } = useStore($movies)
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

  console.log(results)

  const fetchNextPage = () => setNextPage()
  const fetchWithParam = (param) => {
    setUrlParam(param)
    resetPage()
  }

  console.log(total_pages)

  useEffect(() => {
    if (page !== prevPage) {
      fetchMoviesFx(url)
      fetchGenresFx(genres_url)
      setPrevPage(page)
    }
  }, [page, urlParam])

  const loadMoreRef = useRef()

  const hasNextPage = prevPage > 1 || page < total_pages

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
      const mapGenreIdToName = genre_ids.map(id =>
        genres && genres.map(genre =>
          genre.id === id && genre.name).filter(Boolean))

      const MAX_GENRE_COUNT = 3

      const separatedGenres = mapGenreIdToName
        .slice(0, MAX_GENRE_COUNT)
        .map((genre, index, selfArr) => (
          index !== selfArr.length - 1
            ? <a href='#!' key={genre}>{genre}, </a>
            : <a href='#!' key={genre}>{genre}</a>
        ))

      const moviePoster = `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`

      return (
        <Thumb
          clickable
          key={id}
          alt={title}
          movieId={id}
          title={title}
          release={release_date}
          genres={separatedGenres}
          rating={vote_average}
          image={poster_path ? moviePoster : NoImage}
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
