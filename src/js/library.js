import { fetchFilmById } from './api/fetch';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
import { ref } from './references/ref';
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';
import { showQueueHideWatchedPag } from './paginationLib';
import { showWatchedHideQueuePag } from './paginationLib';
import { paginationWatched } from './paginationLib';
import { paginationQueued } from './paginationLib';
export { moviesWatched };
// export {moviesQueued}

const moviesOnPage = 20;
let start = (1 - 1) * moviesOnPage;
let end = start + moviesOnPage;


// let moviesWatched = arrayWatched.slice(start, end)
// let moviesQueued = arrayQueue.slice(start, end)

export { fetchAndRenderFilm };
export { load };
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
    ref.paginnationWatchedRef.style.display = 'none';
    return;
  }
  ref.notImg.classList.add('not-img');

  // // console.log(arrayWatched);
  // const ars =arrayWatched.map(ar => ar.id);

  if (arrayWatched !== undefined) {
    ref.notImg.classList.add('not-img');
    let moviesWatched = arrayWatched.slice(start, end);
    // paginationWatched.setTotalItems(arrayWatched.length / moviesOnPage)
    // paginationWatched.movePageTo(1)
    showWatchedHideQueuePag();
    fetchAndRenderFilm(moviesWatched);
    // console.log(ref.galleryList)
    
  }
}
function onClickWatchedBtn(e) {
  ref.libraryWatchedBtn.classList.add('header-library__btn-active');
  ref.libraryQueueBtn.classList.remove('header-library__btn-active');
  ref.galleryList.innerHTML = '';
  showWatchedHideQueuePag();
  // const arrayWatched = load(LOCALSTORAGE_WATCHED);
  // console.log(arrayWatched);

  const arrayWatched = load(LOCALSTORAGE_WATCHED);

  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    ref.paginnationWatchedRef.style.display = 'none';
    return;
  }
  ref.notImg.classList.add('not-img');
  // const ars = arrayWatched.map(ar => ar.id);

  if (arrayWatched !== undefined) {
    const pagWatchedActiveBtnNumber = Number(document.querySelector('.active-pag-btn-watched').textContent)
    start = (pagWatchedActiveBtnNumber - 1) * moviesOnPage;
    end = start + moviesOnPage

    let moviesWatched = arrayWatched.slice(start, end);
    
    fetchAndRenderFilm(moviesWatched);
    // paginationWatched.movePageTo(1)
  }
}
function onClickQueueBtn(e) {
  ref.libraryWatchedBtn.classList.remove('header-library__btn-active');
  ref.libraryQueueBtn.classList.add('header-library__btn-active');
  ref.galleryList.innerHTML = '';
  showQueueHideWatchedPag();

  const arrayQueue = load(LOCALSTORAGE_QUEUE);

  if (arrayQueue === undefined) {
    ref.notImg.classList.remove('not-img');
    ref.paginationQueuedRef.style.display = 'none';
    return;
  }
  ref.notImg.classList.add('not-img');

  // const ars = arrayQueue.map(ar => ar.id);

  if (arrayQueue !== undefined) {
    const pagQueuedActiveBtnNumber = Number(document.querySelector('.active-pag-btn-queue').textContent)
    start = (pagQueuedActiveBtnNumber - 1) * moviesOnPage;
    end = start + moviesOnPage
    
    let moviesQueued = arrayQueue.slice(start, end);
    // paginationQueued.movePageTo(1)
    
    fetchAndRenderFilm(moviesQueued);
  }
}

export function rederAfterModalWat() {
  ref.galleryList.innerHTML = '';
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  if (arrayWatched === undefined) {
    ref.notImg.classList.remove('not-img');
    ref.paginnationWatchedRef.style.display = 'none';
    return;
  }
  if (
    ref.libraryWatchedBtn.classList.contains('header-library__btn-active') &&
    arrayWatched !== undefined
  ) {

    const pagWatchedActiveBtnNumber = Number(document.querySelector('.active-pag-btn-watched').textContent)
    start = (pagWatchedActiveBtnNumber - 1) * moviesOnPage;
    end = start + moviesOnPage
    let moviesWatched = arrayWatched.slice(start, end)

    fetchAndRenderFilm(moviesWatched);
    ref.galleryList.innerHTML = ''
    ref.notImg.classList.add('not-img');
  }
}
export function rederAfterModalQue() {
  ref.galleryList.innerHTML = '';
  const arrayQueue = load(LOCALSTORAGE_QUEUE);
  if (arrayQueue === undefined) {
    ref.notImg.classList.remove('not-img');
    ref.paginationQueuedRef.style.display = 'none';
    return;
  }
  if (
    ref.libraryQueueBtn.classList.contains('header-library__btn-active') &&
    arrayQueue !== undefined
  ) {

    const pagQueuedActiveBtnNumber = Number(document.querySelector('.active-pag-btn-queue').textContent)
    start = (pagQueuedActiveBtnNumber - 1) * moviesOnPage;
    end = start + moviesOnPage
    let moviesQueued = arrayQueue.slice(start, end)

    fetchAndRenderFilm(moviesQueued);
    ref.notImg.classList.add('not-img');
    // paginationQueued.movePageTo(1)
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
