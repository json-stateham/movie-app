import { Outlet, MakeGenerics, ReactLocation, Router } from 'react-location'
import { Main } from 'pages'
import { Header } from 'ui'
import { ErrorBoundary } from 'entities/ErrorBoundary'

import { fetchMovieDetails } from 'pages/movie/model'

import { IMovieDetails } from 'types/common'

export type LocationGenerics = MakeGenerics<{
  LoaderData: { movie: IMovieDetails }
}>

const location = new ReactLocation<LocationGenerics>()

const Routes = () => (
  <>
    <Router
      location={location}
      routes={[
        { path: '/', element: <Main /> },
        {
          path: 'movie',
          children: [
            {
              path: ':movieId',
              element: () => import('pages/movie').then(mod => <mod.default />),
              loader: async ({ params: { movieId } }) => {
                return {
                  movie: await fetchMovieDetails(Number(movieId)),
                }
              },
            },
          ],
        },
      ]}
    >
      <Header />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </Router>
  </>
)

export { Routes }
