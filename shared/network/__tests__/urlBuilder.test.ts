import { UrlBuilder } from '../urlBuilder';

const url = new UrlBuilder('https://api.themoviedb.org');

describe('UrlBuilder', () => {
  it('Should create a base URL', () => {
    expect(url.href).toBe('https://api.themoviedb.org/');
  });

  it('Should add a path', () => {
    url.addPath('3', 'movies', 'top_rated');
    expect(url.href).toBe('https://api.themoviedb.org/3/movies/top_rated');
  });

  it('Should add search params', () => {
    url.addParams({
      q: 'search',
      api_key: '123',
    });

    expect(url.href).toBe(
      'https://api.themoviedb.org/3/movies/top_rated?q=search&api_key=123',
    );
  });

  it('Should correctly add a new path segment when url already has the path and params', () => {
    url.addPath('one_more');

    expect(url.href).toBe(
      'https://api.themoviedb.org/3/movies/top_rated/one_more?q=search&api_key=123',
    );
  });

  it('clones url', () => {
    const clone = url.clone();
    expect(clone).not.toBe(url);
    expect(clone instanceof UrlBuilder).toBe(true);
    clone.addPath('test_path');
    expect(clone.url).not.toEqual(url.href);
  });
});
