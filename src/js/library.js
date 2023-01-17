import { fetchFilmById } from './api/fetch';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
import { ref } from './references/ref';
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

if (document.title === 'Githack Filmoteka Library') {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  ref.libraryWatchedBtn.addEventListener('click', onClickWatchedBtn);
  ref.libraryQueueBtn.addEventListener('click', onClickQueueBtn);
}

function onDOMContentLoaded() {
  const arrayWatched = load(LOCALSTORAGE_WATCHED);

  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  ref.notImg.classList.add('not-img');
  fetchAndRenderFilm(arrayWatched);
}
function onClickWatchedBtn(e) {
  ref.libraryWatchedBtn.classList.add('header-library__btn-active');
  ref.libraryQueueBtn.classList.remove('header-library__btn-active');
  ref.galleryList.innerHTML = '';
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  ref.notImg.classList.add('not-img');
  fetchAndRenderFilm(arrayWatched);
}
function onClickQueueBtn(e) {
  ref.libraryWatchedBtn.classList.remove('header-library__btn-active');
  ref.libraryQueueBtn.classList.add('header-library__btn-active');
  ref.galleryList.innerHTML = '';
  const arrayQueue = load(LOCALSTORAGE_QUEUE);
  if (arrayQueue === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  ref.notImg.classList.add('not-img');
  fetchAndRenderFilm(arrayQueue);
}

export function rederAfterModalWat() {
  ref.galleryList.innerHTML = '';
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  if (ref.libraryWatchedBtn.classList.contains('header-library__btn-active')) {
    fetchAndRenderFilm(arrayWatched);
    ref.notImg.classList.add('not-img');
  }
}
export function rederAfterModalQue() {
  ref.galleryList.innerHTML = '';
  const arrayQueue = load(LOCALSTORAGE_QUEUE);

  if (arrayQueue === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  if (ref.libraryQueueBtn.classList.contains('header-library__btn-active')) {
    fetchAndRenderFilm(arrayQueue);
    ref.notImg.classList.add('not-img');
    return;
  }
}

async function fetchAndRenderFilm(ids) {
  try {
    const arrayOfPromises = ids.map(async id => await fetchFilmById(id));
    const data = await Promise.all(arrayOfPromises);
    renderFilmsByIdForLibrary(ref, data);
  } catch (error) {
    console.log(error);
  }
}
