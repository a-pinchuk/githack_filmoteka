import { createMarkUp } from '../render/renderSearchFilms';
import { fetchSearchedFilms } from '../api/fetch';
import { ref } from '../references/ref';
import { Notify } from 'notiflix';
import { PAGE } from '../api/api-vars';
import { renderPopularFilms } from '../render/renderPopularFilm';
import { loaderHide } from '../fetchAndRenderPopularFilm';

let searchQuery = '';

console.log(ref.alertMessage);
ref.form.addEventListener('submit', onCLickSubmit);

function onCLickSubmit(e) {
  e.preventDefault();
  searchQuery = ref.input.value.trim();
  if (searchQuery === '') {
    ref.alertMessage.classList.add('active');
    return Notify.warning('Searching starts after providing data to search.');
  }
  if (searchQuery.length > 0) {
    ref.alertMessage.classList.remove('active');
    ref.input.value = '';
    renderSearchFilms();
  } else {
    renderPopularFilms();
  }
}
async function renderSearchFilms() {
  try {
    
    const promis = await fetchSearchedFilms(searchQuery, PAGE);
    const data = promis.data.results;
    if (data.length === 0) {
      ref.alertMessage.classList.add('active');
      return Notify.warning('no matches found');
    }
    ref.alertMessage.classList.remove('active');
    ref.loader.style.display = 'flex';
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
