import axios from 'axios';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL, GENRE_URL } from './apiVars';

export async function fetchTrendedFilms() {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${TREND_URL}?${searchParams}`);
}

export async function fetchSearchedFilms(content, page) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: content,
    page: page,
  });
  return axios.get(`${SEARCH_URL}?${searchParams}`);
}

export async function fetchFilmById(id) {
  const movie_id = id;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${ID_URL}${movie_id}?${searchParams}`);
}

export async function fetchFilmGenres() {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${GENRE_URL}?${searchParams}`);
}

export async function fetchFilmTrailer(id) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  return axios.get(`${ID_URL}/${id}/videos?${searchParams}`);
}
