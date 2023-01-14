import { createMarkUp } from '../render/renderSearchFilms';
import { fetchSearchedFilms } from '../api/fetch';
import { ref } from '../references/ref';
import { Notify } from 'notiflix';
import { PAGE } from '../api/api-vars';
import { renderPopularFilms } from '../render/renderPopularFilm';
import { showPagination } from '../pagination';

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
    renderSearchFilms().then(res => {
      showPagination(res.data.total_pages)
    }
    )
  } else {
    renderPopularFilms();
  }
  
}

async function renderSearchFilms(page) {
  // let totalResults = 0;
  try {
    const promis = await fetchSearchedFilms(searchQuery, page);
    const data = promis.data.results;
    if (data.length === 0) {
      return Notify.warning('no matches found');
    }
    clearGallery();
    createMarkUp(ref, data);
    return promis
  } catch (error) {
    console.log(error);
  }
}

function clearGallery() {
  ref.galleryList.innerHTML = '';
}

export {renderSearchFilms}