import { useState, useEffect } from 'react'
import { createEffect, createStore, createEvent } from 'effector'
import { useStore } from 'effector-react'
import { useSessionStorage } from '../../hooks/useSessionStorage'
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
import Grid from '../../components/Grid'
import { Thumb } from '../../ui'
// import SearchBar from '../components/SearchBar'
// import Button from '../components/Button'
import NoImage from '../../images/no_image.jpg'


const setNextPage = createEvent()
const resetPage = createEvent()

const $page = createStore(1)
  .on(setNextPage, n => n + 1)
  .reset([resetPage])

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
  const [searchTerm, setSearchTerm] = useState('')
  const [prevPage, setPrevPage] = useSessionStorage('prevPage', 0)
  const { results } = useStore($movies)
  const { genres } = useStore($genres)
  const isFetching = useStore(fetchMoviesFx.pending)
  // const fetchMovie = useEvent(fetchMovieFx)
  const page = useStore($page)
  const url = `${POPULAR_BASE_URL}&page=${page}`
  const genres_url = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`

  console.log(page)

  const fetchNextPage = () => setNextPage()

  useEffect(() => {
    if (page !== prevPage) {
      fetchMoviesFx(url)
      fetchGenresFx(genres_url)
      setPrevPage(page)
    }
  }, [page])

  useEffect(() => {
    const { type, TYPE_RELOAD } = performance.navigation

    if (type === TYPE_RELOAD) {
      fetchMoviesFx(url)
      fetchGenresFx(genres_url)
      setPrevPage(page)
    }
  }, [])

  const renderMoviesThumbs = results?.map(
    ({ genre_ids, id, title, poster_path }) => {
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
          genres={separatedGenres}
          image={moviePoster || NoImage}
        />
      )
    })


  return (
    <>

      {/* {!searchTerm && !isFetching ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${results && results[0].backdrop_path}`}
          title={results && results[0].original_title}
          text={results && results[0].overview}
        />
      ) : null} */}
      {/* <SearchBar setSearchTerm={setSearchTerm} /> */}
      <Grid header={'Trending Movies'}>
        {renderMoviesThumbs}
      </Grid>
      <button onClick={fetchNextPage}>Fetch more</button>
    </>
  )
}
