import { UrlBuilder } from '../urlBuilder'

const url = new UrlBuilder('https://api.themoviedb.org')

describe('UrlBuilder', () => {
    it('creates a base URL', () => {
        expect(url.href).toBe('https://api.themoviedb.org/')
    })

    it('adds a path', () => {
        url.addPath('3', 'movies', 'top_rated')
        expect(url.href).toBe('https://api.themoviedb.org/3/movies/top_rated')
    })

    it('adds search params', () => {
        url.addParams({
            q: 'search',
            api_key: '123'
        })
        expect(url.href).toBe('https://api.themoviedb.org/3/movies/top_rated?q=search&api_key=123')
    })

    it('clones url', () => {
        const clone = url.clone()
        expect(clone).not.toBe(url)
        expect(clone instanceof UrlBuilder).toBe(true)
        clone.addPath('test_path')
        expect(clone.url).not.toEqual(url.href)
    })
})