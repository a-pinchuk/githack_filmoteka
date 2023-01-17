import { fetchFilmById } from './api/fetch';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
import { ref } from './references/ref';
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';
import { showQueueHideWatchedPag } from './pagination-lib';
import { showWatchedHideQueuePag } from './pagination-lib';
import { paginationWatched } from './pagination-lib';
import { paginationQueued } from './pagination-lib';
export {moviesWatched}
// export {moviesQueued}

const arrayWatched = load(LOCALSTORAGE_WATCHED);
const arrayQueue = load(LOCALSTORAGE_QUEUE)

const moviesOnPage = 3
let start = (1-1) * moviesOnPage
let end = start + moviesOnPage

// let moviesWatched = arrayWatched.slice(start, end)
// let moviesQueued = arrayQueue.slice(start, end)


export {fetchAndRenderFilm}
export{load}
// console.log(document.title==="Githack Filmoteka Library");

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

  //  /   console.log(load(LOCALSTORAGE_WATCHED));
  // const arrayWatched = load(LOCALSTORAGE_WATCHED);
  //   console.log(arrayWatched);

  const arrayWatched = load(LOCALSTORAGE_WATCHED);


  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  ref.notImg.classList.add('not-img');

  // // console.log(arrayWatched);
  // const ars =arrayWatched.map(ar => ar.id);

  if (arrayWatched !== undefined) {

    let moviesWatched = arrayWatched.slice(start, end)
    showWatchedHideQueuePag()
  
    paginationWatched.movePageTo(1)
  }
  

}
function onClickWatchedBtn(e) {
  ref.libraryWatchedBtn.classList.add('header-library__btn-active');
  ref.libraryQueueBtn.classList.remove('header-library__btn-active');
  ref.galleryList.innerHTML = '';

  // const arrayWatched = load(LOCALSTORAGE_WATCHED);
  // console.log(arrayWatched);

  const arrayWatched = load(LOCALSTORAGE_WATCHED);

  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  ref.notImg.classList.add('not-img');
  // const ars = arrayWatched.map(ar => ar.id);

  if (arrayWatched !== undefined) {
    showWatchedHideQueuePag()
    // fetchAndRenderFilm(moviesWatched);
    paginationWatched.movePageTo(1)
  }
  
  
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

  // const ars = arrayQueue.map(ar => ar.id);

if (arrayQueue !== undefined) {
  paginationQueued.movePageTo(1)
  showQueueHideWatchedPag()
  // fetchAndRenderFilm(moviesQueued);
}

}

export function rederAfterModalWat() {
  ref.galleryList.innerHTML = '';
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    return;
  }
  if (ref.libraryWatchedBtn.classList.contains('header-library__btn-active')) {
    // fetchAndRenderFilm(moviesWatched);
    ref.notImg.classList.add('not-img');
    paginationWatched.movePageTo(1)
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
    // fetchAndRenderFilm(moviesQueued);
    ref.notImg.classList.add('not-img');
    paginationQueued.movePageTo(1)
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
