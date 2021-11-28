import { createStore, createApi, createEvent } from 'effector'
import { persist } from 'effector-storage/local'

const $page = createStore<number>(1)
persist({ store: $page, key: 'page' })

const { prevPage, nextPage, setPage } = createApi($page, {
  prevPage: page => (page > 1 ? page - 1 : 1),
  nextPage: page => page + 1,
  setPage: (page, nextPage: number) => {
    if (nextPage > page) {
      setAscending()
    } else {
      setDescending()
    }
    return nextPage
  },
})

const setAscending = createEvent()
const setDescending = createEvent()
const $isAscending = createStore<boolean>(false)

$isAscending
  .on([setAscending, nextPage], state => (state = true))
  .on([setDescending, prevPage], state => (state = false))

export { $page, prevPage, nextPage, setPage, $isAscending }
