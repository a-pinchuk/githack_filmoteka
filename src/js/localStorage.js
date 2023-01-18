import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';

import { getAuth } from 'firebase/auth';
import { Notify } from 'notiflix';

export function saveLocalStorage() {
  const modalWatchedBtn = document.querySelector('button[data-watched]');
  const modalWatchedRevBtn = document.querySelector('button[data-watched-rem]');
  const modalQueuedBtn = document.querySelector('button[data-queue]');
  const modalQueuedRevBtn = document.querySelector('button[data-queue-rem]');
  let arrayWatched = [];
  let arrayQueued = [];
  const currentId = Number(modalWatchedBtn.dataset.watched);
  const currentIdQueued = Number(modalQueuedBtn.dataset.queue);
  let arrayLocalStorage = load(LOCALSTORAGE_WATCHED);
  let arrayLocalQueuedStorage = load(LOCALSTORAGE_QUEUE);

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
    if (getAuth().currentUser === null) {
      // modalWatchedBtn.disabled = true;
      return Notify.failure('Sign first, motherfucker!');
    }
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
    if (getAuth().currentUser === null) {
      // modalQueuedBtn.disabled = true;
      return Notify.failure('Sign first, motherfucker!');
    }
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
    saveLocal(ar, id, key);
    return;
  }
  if (array.includes(id)) {
    return;
  }
  saveLocal(array, id, key);
}
function remFilm(array, key, id) {
  array = load(key);
  if (array === undefined) {
    return;
  }
  if (array.length >= 1) {
    const b = array.includes(id);

    if (array.length === 1 && b) {
      localStorage.removeItem(key);
      return;
    }
    const v = array.filter(value => value !== id);
    save(key, v);
    return;
  }
}
function defineColorBtn(array, btn1, btn2, id) {
  if (array === undefined) {
    btn2.classList.add('is-hidden');
    return;
  }
  if (array.includes(id)) {
    btn1.classList.add('is-hidden');
    return;
  }
  btn2.classList.add('is-hidden');
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
