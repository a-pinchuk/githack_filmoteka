import { fetchTrendedFilms, fetchFilmGenres } from './api/fetch';
import { renderPopularFilms } from './render/renderPopularFilm';
import { ref } from './references/ref';
import { loaderHide } from './loader';
export {fetchAndRenderPopularFilm}

fetchAndRenderPopularFilm();

async function fetchAndRenderPopularFilm(page) {
  try {
    ref.loader.style.display = 'flex';
    const image = await fetchTrendedFilms(page);
    const genres = await fetchFilmGenres();
    const data = image.data.results;
    const genresID = genres.data.genres;

    renderPopularFilms(ref, data, genresID);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}
