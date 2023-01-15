// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { fetchTrendedFilms } from './api/fetch';
// import { fetchSearchedFilms } from './api/fetch';
import { fetchFilmById } from './api/fetch';
import { fetchFilmGenres } from './api/fetch';
// import { renderPopularFilms } from './render/renderPopularFilm';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
// import { renderFilms } from './render/renderHTML';
import { ref } from './references/ref';
// import { options, pagination } from './pagination';
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/api-vars';

// let textContent = '';
// const  LOCALSTORAGE_WATCHED =  "watched";
// const  LOCALSTORAGE_QUEUE =  "queue";

// const dyk = [800815];
// 	  localStorage.setItem(LOCALSTORAGE_WATCHED, JSON.stringify(dyk));

// const qyk = [653851];
// localStorage.setItem(LOCALSTORAGE_QUEUE, JSON.stringify(qyk));

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

try {
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
  ref.libraryWatchedBtn.addEventListener('click', onClickWatchedBtn);
  ref.libraryQueueBtn.addEventListener('click', onClickQueueBtn);
} catch (error) {
  console.log(error);
}
// ref.libraryWatchedBtn.classList.add("modal-btn-rev")
ref.libraryWatchedBtn.style.backgroundColor = '#ff6b01';
function onDOMContentLoaded() {
  console.log(load(LOCALSTORAGE_WATCHED));
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  console.log(arrayWatched);

  if (arrayWatched === undefined) {
    return;
  }
  // // console.log(arrayWatched);
  // const ars =arrayWatched.map(ar => ar.id);
  fetchAndRenderFilm(arrayWatched);
}
export function onClickWatchedBtn(e) {
  ref.libraryWatchedBtn.style.backgroundColor = '#ff6b01';
  ref.galleryList.innerHTML = '';
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  // console.log(arrayWatched);
  if (arrayWatched === undefined) {
    return;
  }
  // const ars = arrayWatched.map(ar => ar.id);
  fetchAndRenderFilm(arrayWatched);
}
export function onClickQueueBtn(e) {
  ref.libraryWatchedBtn.style.backgroundColor = '#000000';
  ref.galleryList.innerHTML = '';
  const arrayQueue = load(LOCALSTORAGE_QUEUE);
  // console.log(arrayQueue);
  if (arrayQueue === undefined) {
    return;
  }
  // const ars = arrayQueue.map(ar => ar.id);
  fetchAndRenderFilm(arrayQueue);
}
export function yyy () {
	console.log(5);
	ref.galleryList.innerHTML = '';
  const arrayQueue = load(LOCALSTORAGE_QUEUE);
  // console.log(arrayQueue);
  if (arrayQueue === undefined) {
    return;
  }
  // const ars = arrayQueue.map(ar => ar.id);
  fetchAndRenderFilm(arrayQueue);
}
// const ids = [550, 299536, 383498];
// console.log(ids.map(id => console.log(id)));
async function fetchAndRenderFilm(ids) {
  try {
    // console.log(ids);
    const arrayOfPromises = ids.map(async id => await fetchFilmById(id));
    const data = await Promise.all(arrayOfPromises);
    //   console.log(data);
    renderFilmsByIdForLibrary(ref, data);
  } catch (error) {
    console.log(error);
  }
}
