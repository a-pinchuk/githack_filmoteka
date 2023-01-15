import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTrendedFilms } from './api/fetch';
import { fetchFilmGenres } from './api/fetch';
import { fetchFilmTrailer } from './api/fetch';
import { renderPopularFilms } from './render/renderPopularFilm';
import { ref } from './references/ref';
import { loaderHide } from './loader';

fetchAndRenderPopularFilm();

async function fetchAndRenderPopularFilm(e) {
  try {
    ref.loader.style.display = 'flex';
    const image = await fetchTrendedFilms();
    const genres = await fetchFilmGenres();
    const data = image.data.results;
    const genresID = genres.data.genres;

    renderPopularFilms(ref, data, genresID);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}
async function fetchAndRenderTrailerFilm(id) {
  try {
    const image = await fetchFilmTrailer(id);
    const data = image.data;

    // renderPopularFilms(ref, data);
  } catch (error) {
    console.log(error);
  }
}
