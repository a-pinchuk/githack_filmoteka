const API_KEY = '9f3449ca8495a13b6d35e887839f0061';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const GENRE_URL = `${BASE_URL}/genre/movie/list`;
const UPCOMING = `${BASE_URL}/movie/upcoming`;
const DISCOVER = `${BASE_URL}/discover/movie`;
let PAGE = 1;
const LOCALSTORAGE_WATCHED = 'watched';
const LOCALSTORAGE_QUEUE = 'queue';

export {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
  GENRE_URL,
  PAGE,
  LOCALSTORAGE_WATCHED,
  LOCALSTORAGE_QUEUE,
  UPCOMING,
  DISCOVER,
};

// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
