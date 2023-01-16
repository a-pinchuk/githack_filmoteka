import { fetchTrendedFilms, fetchFilmGenres } from './api/fetch';
import { renderPopularFilms } from './render/renderPopularFilm';
import { ref } from './references/ref';
import { loaderHide } from './loader';
import { showPaginationTrended } from './pagination';

export { fetchAndRenderPopularFilm };

fetchAndRenderPopularFilm(1).then(res => {
  showPaginationTrended(res.data.total_pages);
});

async function fetchAndRenderPopularFilm(page) {
  try {
    ref.galleryList.innerHTML = '';
    ref.loader.style.display = 'flex';
    const image = await fetchTrendedFilms(page);
    const genres = await fetchFilmGenres();
    const data = image.data.results;
    const genresID = genres.data.genres;

    renderPopularFilms(ref, data, genresID);
    loaderHide();

    return image;
  } catch (error) {
    console.log(error);
  }
}
