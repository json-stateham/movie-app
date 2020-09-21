import React from 'react'

import { Actor } from './elements/Actor'
import { MovieInfo } from './elements/MovieInfo'
import { MovieInfoBar } from './elements/MovieInfoBar'
import { Navigation } from './elements/Navigation'
import { Grid } from './elements/Grid'
import { Spinner } from './elements/Spinner'

import { useMovieFetch } from './hooks/useMovieFetch'

export const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId)

  if(error) return <div>Something went wrong</div>
  if (loading) return <Spinner />
  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      
        <Grid header='Actors'>
          {movie.actors.map((actor) => (
            <Actor key={actor.credit_id} actor={actor} />
          ))}
        </Grid>
      
    </>
  )
}
