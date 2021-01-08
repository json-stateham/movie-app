import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import API from '../API'
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'
import NoImage from '../images/no_image.jpg'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {
    data,
    isFetching,
    fetchNextPage,
    isError,
    hasNextPage
  } = useInfiniteQuery(
    `movies-${searchTerm}`,
    (_key, page) => API.fetchMovies(searchTerm, page),
    {
      getNextPageParam: lastPage => {
        // if (lastPage.page === lastPage.total_pages) return undefined
        return lastPage.page + 1
      }
    }
  )

  console.table(data)

  if (isError) return <div>Something went wrong ...</div>

  return (
    <>
      {!searchTerm && !isFetching ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.pages[0].results[0].backdrop_path}`}
          title={data.pages[0].results[0].original_title}
          text={data.pages[0].results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {data && data.pages.map((page, i) => (
          <React.Fragment key={`page-${i}`}>
            {page.results.map(movie => (
              <Thumb
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
              />
            ))}
          </React.Fragment>
        ))}
      </Grid>
      {isFetching && <Spinner />}
      {hasNextPage && !isFetching && (
        <Button text='Load More'
        callback={() => fetchNextPage()}
        />
      )}
    </>
  )
}

export default Home
