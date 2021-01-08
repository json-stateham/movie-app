import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import API from '../API'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// Components
import BreadCrumb from './BreadCrumb'
import Grid from './Grid'
import Spinner from './Spinner'
import MovieInfo from './MovieInfo'
import MovieInfoBar from './MovieInfoBar'
import Actor from './Actor'
import NoImage from '../images/no_image.jpg'

const getMovie = async movieId => {
  const movie = await API.fetchMovie(movieId)
  const credits = await API.fetchCredits(movieId)
  const directors = credits.crew.filter(
    member => member.job === 'Director'
  )

  return {
    ...movie,
    actors: credits.cast,
    directors
  }
}

const Movie = () => {
  const { movieId } = useParams()

  const {
    data: movie,
    isLoading, 
    isError
  } = useQuery(
    movieId,
    () => getMovie(movieId)
  )

  if (isLoading) return <Spinner />
  if (isError) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header='Actors'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  )
}

export default Movie
