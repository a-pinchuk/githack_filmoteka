// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { fetchTrendedFilms } from './api/fetch';
// import { fetchSearchedFilms } from './api/fetch';
import { fetchFilmById } from './api/fetch';
import { fetchFilteredFilms, fetchFilmGenres } from './api/fetch';
import { renderPopularFilms } from './render/renderPopularFilm';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
// import { renderFilms } from './render/renderHTML';
import { ref } from './references/ref';
import { loaderHide } from './loader';
// import { options, pagination } from './pagination';
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';

ref.filterBtn.addEventListener('click', onActiveFilter);
ref.form.addEventListener('change', onChangeInput);

function onActiveFilter(e) {
  // console.log(e.target);
  ref.filter.classList.toggle('filter-form');
  ref.filter.classList.toggle('filter-form-activ');
}
function onChangeInput(e) {
  const property = e.target.getAttribute('name');
  const value = e.target.value;
  fetchAndRenderFilm(property, value);
  // console.log(fetchAndRenderPopularFilm(o.genres));
}

async function fetchAndRenderFilm(property, value) {
  try {
    ref.loader.style.display = 'flex';
    const image = await fetchFilteredFilms(property, value);
    const genres = await fetchFilmGenres();
    const data = image.data.results;
    const genresID = genres.data.genres;
    ref.galleryList.innerHTML = '';

    renderPopularFilms(ref, data, genresID);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}

function onActive(e) {
  e.target.nextElementSibling.classList.toggle('visually-hidden');
  // e.target.nextElementSibling.classList.add ("filter-group-active");
  // ref.filter.classList.toggle ("visually-hidden");
}
