import axios from 'axios';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api-vars';

const baseUrl = 'https://api.themoviedb.org/3/trending/all/day?';

export async function fetchImg(content, page) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    // query: content,
    // page: page,
  });
  return axios.get(`${baseUrl}${searchParams}`);
}
