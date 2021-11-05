import { createEffect, restore, forward, combine, attach } from 'effector'
import { createGate } from 'effector-react'
import { API } from 'API'

const requestFx = createEffect(({ name, id }: { name: string; id: number }) =>
  // @ts-ignore
  API[name](id)
    .then((res: Record<string, any>) => res.json())
    .catch(console.error),
)

const [
  fetchMovie,
  fetchCredits,
  fetchImages,
  fetchReviews,
  fetchVideos,
  fetchSimilar,
] = [
  'fetchMovie',
  'fetchCredits',
  'fetchImages',
  'fetchReviews',
  'fetchVideos',
  'fetchSimilar',
].map(name =>
  attach({
    effect: requestFx,
    mapParams: id => ({ name, id }),
  }),
)

const promiseAllFx = createEffect((p: any) =>
  Promise.all(
    [
      fetchMovie,
      fetchCredits,
      fetchImages,
      fetchReviews,
      fetchVideos,
      fetchSimilar,
    ].map(effect => effect(p)),
  ),
)

promiseAllFx.fail.watch(error => {
  console.error(error)
})

const moviesGate = createGate()

forward({
  from: moviesGate.open,
  to: promiseAllFx,
})

const $movie = restore(fetchMovie, {})
const $videos = restore(fetchVideos, {})
const $credits = restore(fetchCredits, {})
const $images = restore(fetchImages, {})
const $reviews = restore(fetchReviews, {})
const $similar = restore(fetchSimilar, {})

const $data = combine({
  movie: $movie,
  credits: $credits,
  images: $images,
  reviews: $reviews.map(x => x.results),
  videos: $videos.map(x => x.results),
  similar: $similar.map(x => x.results),
})

const $isFetching = combine(
  [
    fetchCredits.pending,
    fetchMovie.pending,
    fetchImages.pending,
    fetchReviews.pending,
    fetchVideos.pending,
  ],
  pendings => pendings.some(Boolean),
)

export { moviesGate, $data, $isFetching }
