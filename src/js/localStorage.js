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
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';

// ref.modalWindow.addEventListener('click', on);
export function saveLocalStorage() {
  const modalWatchedBtn = document.querySelector('button[data-watched]');
  const modalWatchedRevBtn = document.querySelector('button[data-watched-rem]');
  const modalQueuedBtn = document.querySelector('button[data-queue]');
  const modalQueuedRevBtn = document.querySelector('button[data-queue-rem]');
  //  localStorage.clear();
  let arrayWatched = [];
  let arrayQueued = [];
  const currentId = Number(modalWatchedBtn.dataset.watched);
  const currentIdQueued = Number(modalQueuedBtn.dataset.queue);
  let arrayLocalStorage = load(LOCALSTORAGE_WATCHED);
  let arrayLocalQueuedStorage = load(LOCALSTORAGE_QUEUE);
  // console.log(arrayLocalStorage);
  defineColorBtn(
    arrayLocalStorage,
    modalWatchedBtn,
    modalWatchedRevBtn,
    currentId
  );
  defineColorBtn(
    arrayLocalQueuedStorage,
    modalQueuedBtn,
    modalQueuedRevBtn,
    currentIdQueued
  );

  modalWatchedBtn.addEventListener('click', addFilmLocal);
  modalWatchedRevBtn.addEventListener('click', remFilmLocal);

  function addFilmLocal() {
    changClass(modalWatchedBtn, modalWatchedRevBtn);
    addFilm(arrayLocalStorage, LOCALSTORAGE_WATCHED, arrayWatched, currentId);
  }
  function remFilmLocal() {
    changClass(modalWatchedBtn, modalWatchedRevBtn);
    remFilm(arrayLocalStorage, LOCALSTORAGE_WATCHED, currentId);
  }
  modalQueuedBtn.addEventListener('click', addFilmLocalQueued);
  modalQueuedRevBtn.addEventListener('click', remFilmLocalQueued);

  function addFilmLocalQueued() {
    changClass(modalQueuedBtn, modalQueuedRevBtn);
    addFilm(
      arrayLocalQueuedStorage,
      LOCALSTORAGE_QUEUE,
      arrayQueued,
      currentIdQueued
    );
  }
  function remFilmLocalQueued() {
    changClass(modalQueuedBtn, modalQueuedRevBtn);
    remFilm(arrayLocalQueuedStorage, LOCALSTORAGE_QUEUE, currentIdQueued);
  }
}

function changClass(btn1, btn2) {
  btn1.classList.toggle('is-hidden');
  btn2.classList.toggle('is-hidden');
}

function addFilm(array, key, ar, id) {
  array = load(key);
  if (array === undefined) {
    //  console.log(arrayLocalQueuedStorage);
    saveLocal(ar, id, key);
    // console.log(arrayLocalQueuedStorage);
    return;
  }
  if (array.includes(id)) {
    // console.log(arrayLocalQueuedStorage);
    return;
  }
  saveLocal(array, id, key);
  // console.log(arrayLocalQueuedStorage);
}
function remFilm(array, key, id) {
  array = load(key);
  if (array === undefined) {
    return;
  }
  if (array.length >= 1) {
    const b = array.includes(id);
    // console.log(g);
    // const v = delete arrayLocalQueuedStorage[g];
    if (array.length === 1 && b) {
      localStorage.removeItem(key);
      return;
    }
    const v = array.filter(value => value !== id);
    //  console.log(v);
    // console.log(arrayLocalStorage.splice(g, 1));
    save(key, v);
    //   arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
    //   console.log(load (LOCALSTORAGE_WATCHED));
    return;
  }
}
function defineColorBtn(array, btn1, btn2, id) {
  if (array === undefined) {
    btn2.classList.add('is-hidden');
    // modalWatchedBtn.style.backgroundColor = "#ff6b01";
    return;
  }
  if (array.includes(id)) {
    btn1.classList.add('is-hidden');
    // modalWatchedRevBtn.style.backgroundColor = "#ff6b01";
    return;
  }
  btn2.classList.add('is-hidden');
  // modalWatchedBtn.style.backgroundColor = "#ff6b01"
}

function saveLocal(array, id, key) {
  array.push(id);
  save(key, array);
}
function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
// ref.libraryWatchedBtn.addEventListener('click', onClickWatchedBtn);
// ref.libraryQueueBtn.addEventListener('click', onClickQueueBtn);

// function onClickWatchedBtn(e) {
// 	ref.libraryList.innerHTML = "";
//  const arrayWatched = load (LOCALSTORAGE_WATCHED);
//  fetchAndRenderFilm(arrayWatched);
//  }
// function onClickQueueBtn(e) {
// 	ref.libraryList.innerHTML = "";
// 	const arrayQueue = load (LOCALSTORAGE_QUEUE);
// 	fetchAndRenderFilm(arrayQueue);
// }
