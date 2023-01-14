import { createMarkUp } from '../render/renderSearchFilms';
import { fetchSearchedFilms } from '../api/fetch';
import { ref } from '../references/ref';
import { Notify } from 'notiflix';
import { PAGE } from '../api/api-vars';
import { renderPopularFilms } from '../render/renderPopularFilm';
import { loaderHide } from '../fetchAndRenderPopularFilm';

let searchQuery = '';

ref.form.addEventListener('submit', onCLickSubmit);

function onCLickSubmit(e) {
  e.preventDefault();
  searchQuery = ref.input.value.trim();
  if (searchQuery === '') {
    return Notify.warning('Searching starts after providing data to search.');
  }
  if (searchQuery.length > 0) {
    ref.input.value = '';
    renderSearchFilms();
  } else {
    renderPopularFilms();
  }
}

async function renderSearchFilms() {
  // let totalResults = 0;
  try {
    ref.loader.style.display = 'flex';
    const promis = await fetchSearchedFilms(searchQuery, PAGE);
    const data = promis.data.results;
    if (data.length === 0) {
      return Notify.warning('no matches found');
    }
    clearGallery();
    createMarkUp(ref, data);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}

function clearGallery() {
  ref.galleryList.innerHTML = '';
}
