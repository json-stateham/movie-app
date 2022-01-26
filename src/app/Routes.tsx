import { Outlet, MakeGenerics, ReactLocation, Router } from 'react-location'
import { Main } from 'pages/main'
import { Header } from 'shared/ui'
import { ErrorBoundary } from 'entities/ErrorBoundary'

import { fetchMainPage } from 'pages/main/model'
import { fetchMovieDetails } from 'pages/movie/model'

import type { IMovieDetails, IMainPageData } from 'types/common'
import type { TListType } from 'shared/api/apiConfig'

export type LocationGenerics = MakeGenerics<{
  LoaderData: { main: IMainPageData; movie: IMovieDetails }
  Search: {
    page: number
    list: TListType
  }
}>

const location = new ReactLocation<LocationGenerics>()

const Routes = () => (
  <>
    <ErrorBoundary>
      <Router
        location={location}
        routes={[
          {
            path: '/',
            element: <Main />,
            loader: async () => ({
              main: await fetchMainPage(),
            }),
          },
          {
            path: 'movies',
            element: () => import('pages/movies').then(mod => <mod.default />),
          },
          {
            path: 'movie',
            children: [
              {
                path: ':movieId',
                element: () =>
                  import('pages/movie').then(mod => <mod.default />),
                loader: async ({ params: { movieId } }) => ({
                  movie: await fetchMovieDetails(Number(movieId)),
                }),
              },
            ],
          },
        ]}
      >
        <Header />
        <Outlet />
      </Router>
    </ErrorBoundary>
  </>
)

export { Routes }
