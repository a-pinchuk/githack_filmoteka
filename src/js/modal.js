import axios from 'axios';
import { log } from 'console';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api/api-vars';
import { fetchFilmById, fetchTrendedFilms } from './api/fetch';
import { ref } from './references/ref';

// ref.openModalBtn.addEventListener('click', openModal);
ref.galleryList.addEventListener('click', openModal);
ref.closeModalBtn.addEventListener('click', closeModal);
ref.modal.addEventListener('keydown', closeModal);
ref.modal.addEventListener('click', closeModalbyClick);

async function openModal(item) {
  document.addEventListener('keydown', closeModal);
  const theme = JSON.parse(localStorage.getItem('darkmode'));

  if (theme) {
    ref.modalWindow.classList.add('modal-window-dark');
    ref.closeIcon.classList.add('icon-close-dark');
  } else {
    ref.modalWindow.classList.remove('modal-window-dark');
    ref.closeIcon.classList.remove('icon-close-dark');
  }
  ref.modal.classList.toggle('is-hidden');
  document.body.style.overflow = 'hidden';

  const li = item.target.closest('.photo__card');
  const id = li.getAttribute('id');
  const response = await fetchFilmById(id).then(r => {
    return r.data;
  });

  renderBackdrop(response);
  if (theme) {
    ref.modalWrap.insertAdjacentHTML(
      'afterBegin',
      renderDarkMarkupModal(response)
    );
  } else {
    ref.modalWrap.insertAdjacentHTML('afterBegin', renderMarkupModal(response));
  }
}

function renderBackdrop(film) {
  const backdrop = document.querySelector('.backdrop-info');
  backdrop.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280/${film.backdrop_path})`;
  backdrop.style.backgroundRepeat = 'no-repeat';
  backdrop.style.backgroundSize = 'cover';
  backdrop.style.backgroundPosition = 'center';
}

function renderMarkupModal(film) {
  return `<div class="modal-img-wrap">
          <div class="modal-wrap-img-btn"><img src="https://image.tmdb.org/t/p/w500/${
            film.poster_path
          }" alt="${film.title}" class="modal-image"/>
            <button type="button" class="modal-btn-trailer">GO!<svg class="btn-trailer-icon"><use href="../images/sprite.svg#icon-play"></use></svg>
          </button></div>
      </div>
      <div class="modal-info">
        <h2 class="modal-info-name">${film.title}</h2>
        <ul class="modal-info-list">
          <li class="modal-info-item">
            <p class="modal-info-name-value">Vote / Votes</p>
            <p class="modal-info-value"><span class="modal-info-value-vote">${
              film.vote_average
            }</span>/<span
                class="modal-info-value-votes"
                >${film.vote_count}</span
              ></p>
          </li>
          <li class="modal-info-item">
            <p class="modal-info-name-value">Popularity</p>
            <p class="modal-info-value">${film.popularity}</p>
          </li>
          <li class="modal-info-item">
            <p class="modal-info-name-value">Original Title</p>
            <p class="modal-info-value">${film.original_title}</p>
          </li>
          <li class="modal-info-item">
            <p class="modal-info-name-value">Genre</p>
            <p class="modal-info-value">${film.genres
              .map(item => item.name)
              .join(', ')}</p>
          </li>
        </ul>
        <p class="modal-info-pre-about">About</p>
        <p class="modal-info-about">
          ${film.overview}
        </p>
        <div class="btn-modal-wrap">
          <button type="button" class="modal-btn modal-btn-watched">
            Add to watched
          </button>
          <button type="button" class="modal-btn modal-btn-queue">
            Add to queue
          </button>
        </div>
      </div>`;
}
function renderDarkMarkupModal(film) {
  return `<div class="modal-img-wrap">
          <div class="modal-wrap-img-btn"><img src="https://image.tmdb.org/t/p/w500/${
            film.poster_path
          }" alt="${film.title}" class="modal-image"/>
            <button type="button" class="modal-btn-trailer">GO!<svg class="btn-trailer-icon"><use href="../images/sprite.svg#icon-play"></use></svg>
          </button></div>
      </div>
      <div class="modal-info">
        <h2 class="modal-info-name">${film.title}</h2>
        <ul class="modal-info-list">
          <li class="modal-info-item">
            <p class="modal-info-name-value">Vote / Votes</p>
            <p class="modal-info-value modal-info-value-dark"><span class="modal-info-value-vote">${
              film.vote_average
            }</span>/<span
                class="modal-info-value-votes"
                >${film.vote_count}</span
              ></p>
          </li>
          <li class="modal-info-item">
            <p class="modal-info-name-value">Popularity</p>
            <p class="modal-info-value-dark modal-info-value">${
              film.popularity
            }</p>
          </li>
          <li class="modal-info-item">
            <p class="modal-info-name-value">Original Title</p>
            <p class="modal-info-value modal-info-value-dark">${
              film.original_title
            }</p>
          </li>
          <li class="modal-info-item">
            <p class="modal-info-name-value">Genre</p>
            <p class="modal-info-value modal-info-value-dark">${film.genres
              .map(item => item.name)
              .join(', ')}</p>
          </li>
        </ul>
        <p class="modal-info-pre-about">About</p>
        <p class="modal-info-about">
          ${film.overview}
        </p>
        <div class="btn-modal-wrap">
          <button type="button" class="modal-btn modal-btn-dark modal-btn-watched">
            Add to watched
          </button>
          <button type="button" class="modal-btn modal-btn-dark modal-btn-queue">
            Add to queue
          </button>
        </div>
      </div>`;
}
function closeModal(e) {
  if (e.key === 'Escape' || e.type === 'click') {
    ref.modal.classList.toggle('is-hidden');
    ref.modalWrap.innerHTML = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeModal);
  }
}
function closeModalbyClick(e) {
  if (e.target === e.currentTarget) {
    ref.modal.classList.toggle('is-hidden');
    ref.modalWrap.innerHTML = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeModal);
  }
}
