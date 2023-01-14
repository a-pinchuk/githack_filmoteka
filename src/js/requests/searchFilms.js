import { createMarkUp } from '../render/renderSearchFilms';
import { fetchSearchedFilms } from '../api/fetch';
import { ref } from '../references/ref';
import { Notify } from 'notiflix';
import { PAGE } from '../api/api-vars';
import { renderPopularFilms } from '../render/renderPopularFilm';
import { showPagination } from '../pagination';
import { loaderHide } from '../fetchAndRenderPopularFilm';

let searchQuery = '';
ref.form.addEventListener('submit', onCLickSubmit);

function onCLickSubmit(e) {
  e.preventDefault();
  searchQuery = ref.input.value.trim();
  ref.loader.style.display = 'flex';
  if (searchQuery === '') {
    loaderHide();
    ref.alertMessage.textContent =
      'Searching starts after providing data to search';
    Notify.warning('Searching starts after providing data to search.');
    return;
  }
  if (searchQuery.length > 0) {
    ref.alertMessage.textContent = '';
    ref.input.value = '';
    renderSearchFilms().then(res => {
      showPagination(res.data.total_pages);
    });
  } else {
    renderPopularFilms();
  }
}

async function renderSearchFilms(page) {
  try {
    const promis = await fetchSearchedFilms(searchQuery, page);

    const data = promis.data.results;
    //  const paginationData = promis.data;

    if (data.length === 0) {
      loaderHide();
      ref.alertMessage.textContent =
        'Search result not successful. Enter the correct movie name and ';
      return Notify.warning(
        'Search result not successful. Enter the correct movie name and '
      );
    }
    ref.alertMessage.textContent = '';
    ref.loader.style.display = 'flex';
    clearGallery();
    // paginationPage(paginationData);
    createMarkUp(ref, data);
    loaderHide();
    return promis;
  } catch (error) {
    console.log(error);
  }
}

function clearGallery() {
  ref.galleryList.innerHTML = '';
}

export { renderSearchFilms };
