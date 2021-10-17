// @ts-nocheck

import { createEffect, createStore, createEvent } from 'effector'

export const setPrevPage = createEvent() as Event<void>
export const setNextPage = createEvent() as Event<void>
export const setUrlParam = createEvent() as Event<void>
export const resetPage = createEvent() as Event<void>

export const $prevPage = createStore(0)
  .on(setPrevPage, n => n + 1)
  .reset([resetPage])

export const $page = createStore(1)
  .on(setNextPage, n => n + 1)
  .reset([resetPage])

export const $urlParam = createStore('popular').on(
  setUrlParam,
  (_, param) => param
)

export const fetchMoviesFx = createEffect(
  async url => await (await fetch(url)).json()
)

export const fetchGenresFx = createEffect(
  async url => await (await fetch(url)).json()
)

export const $movies = createStore([]).on(
  fetchMoviesFx.doneData,
  (state, data) => ({
    ...state,
    total_pages: data.total_pages,
    results:
      $page.getState() > 1
        ? [...state.results, ...data.results]
        : [...data.results],
  })
) as Store<never[]>

export const $genres = createStore([]).on(
  fetchGenresFx.doneData,
  (_, data) => data
) as Store<never[]>
