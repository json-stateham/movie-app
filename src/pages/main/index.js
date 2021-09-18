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
// import API from '../API'
import { config, imagesSize } from 'config'
import { 
  Grid, 
  HeroBlock, 
  LoadingTape, 
  Thumb, 
  Tabs, 
  HeroPoster,
  HeroInfo 
} from 'ui'
import { InfiniteScrollTrigger } from 'entities/InfiniteScrollTrigger'
import NoImage from 'images/no_image.jpg'

const Main = () => {
  const mounted = useRef(false)
  const { t } = useTranslation()
  const { results, total_pages } = useStore($movies)
  const { genres } = useStore($genres)
  const isFetching = useStore(fetchMoviesFx.pending)
  // const isFetchingError = useStore(fetchMoviesFx.fail)
  // const fetchMovie = useEvent(fetchMovieFx)
  const prevPage = useStore($prevPage)
  const page = useStore($page)
  const urlParam = useStore($urlParam)
  const url = `${config.API_URL}movie/${urlParam}?api_key=${config.API_KEY}&language=en-US&page=${page}`
  const genres_url = `${config.API_URL}genre/movie/list?api_key=${config.API_KEY}&language=en-US`
  const URL_PARAMS = ['popular', 'top_rated']
  const hasNextPage = prevPage > 1 || page < total_pages

  const fetchNextPage = () => setNextPage()
  const fetchWithParam = (param) => {
    setUrlParam(param)
    resetPage()
  }

  useEffect(() => {
    mounted.current = true
  }, [])

  useEffect(() => {
    if (page !== prevPage) {
      fetchMoviesFx(url)
      fetchGenresFx(genres_url)
      setPrevPage(page)
    }
  }, [page, urlParam])

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
    }, idx) => {
      const genresCommaSeparated = genreIdsToGenreNames(genres, genre_ids)
      console.log(results);

      const moviePoster =
        poster_path
          ? `${config.IMAGES_URL}${imagesSize.THUMB.w342}${poster_path}`
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
          isLazy
        />
      )
    })

  const HeroImage = `${config.IMAGES_URL}${imagesSize.BACKDROP.w1280}${results?.[0]?.backdrop_path}`
  const heroPoster = `${config.IMAGES_URL}${imagesSize.THUMB.w500}${results?.[0]?.poster_path}`
  const releaseYear = results?.[0]?.release_date.split('-')[0]

  return (
    <>
      {isFetching ?
        <LoadingTape /> :
        <HeroBlock
          backdrop={{ backgroundImage: `url(${HeroImage})` }}    
        >
          <HeroPoster imageSrc={heroPoster} />
          <HeroInfo
            title={results?.[0].title}
            release={releaseYear}
            genres={genreIdsToGenreNames(genres, results?.[0].genre_ids)}
            overview={results?.[0].overview}
          />
        </HeroBlock>}
      <Tabs
        tabNames={URL_PARAMS}
        activeTab={urlParam}
        callback={fetchWithParam}
      />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={urlParam}
          timeout={500}
          classNames="fade"
        >
          <Grid>
            {renderMoviesThumbs}
          </Grid>
        </CSSTransition>
      </SwitchTransition>
      <InfiniteScrollTrigger onIntersect={fetchNextPage} enabled={hasNextPage} />
    </>
  )
}

export { Main }
