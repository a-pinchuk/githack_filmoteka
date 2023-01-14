import axios from 'axios';
import { log } from 'console';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api/api-vars';
import { fetchFilmById, fetchTrendedFilms } from './api/fetch';
import { ref } from './references/ref';
import { loaderHide } from '../js/fetchAndRenderPopularFilm';
import { saveLocalStorage } from '../js/localStorage';

// ref.openModalBtn.addEventListener('click', openModal);
ref.galleryList.addEventListener('click', openModal);
ref.closeModalBtn.addEventListener('click', closeModal);
ref.modal.addEventListener('keydown', closeModal);
ref.modal.addEventListener('click', closeModalbyClick);

async function openModal(item) {
  document.addEventListener('keydown', closeModal);
  ref.loader.style.display = 'flex';
  const theme = JSON.parse(localStorage.getItem('darkmode'));
  if (theme) {
    ref.modalWindow.classList.add('modal-window-dark');
  } else {
    ref.modalWindow.classList.remove('modal-window-dark');
  }
  ref.modal.classList.toggle('is-hidden');

  document.body.style.overflow = 'hidden';

  const li = item.target.closest('.photo__card');
  const id = li.getAttribute('id');
  const response = await fetchFilmById(id).then(r => {
    return r.data;
	
  });
   renderBackdrop(response);
  ref.modalWrap.insertAdjacentHTML('afterBegin', renderMarkupModal(response));
  loaderHide();
  await saveLocalStorage()
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
            <button type="button" class="modal-btn-trailer">GO!<svg class="btn-trailer-icon"><use href="./img/icons.svg#icon-play"></use></svg>
          </button></div>
      </div>
      <div class="modal-info">
        <h2 class="modal-info-name">${film.title}</h2>
        <ul class="modal-info-list">
          <li class="modal-info-item">
            Vote / Votes
            <span class="modal-info-value"
              ><span class="modal-info-value-vote">${
                film.vote_average
              }</span>/<span
                class="modal-info-value-votes"
                >${film.vote_count}</span
              ></span
            >
          </li>
          <li class="modal-info-item">
            Popularity <span class="modal-info-value">${film.popularity}</span>
          </li>
          <li class="modal-info-item">
            Original Title
            <span class="modal-info-value">${film.original_title}</span>
          </li>
          <li class="modal-info-item">
            Genre <span class="modal-info-value">${film.genres
              .map(item => item.name)
              .join(', ')}</span>
          </li>
        </ul>
        <p class="modal-info-pre-about">About</p>
        <p class="modal-info-about">
          ${film.overview}
        </p>
        <div class="btn-modal-wrap">
		  <div class="modal-btn-wrap">
          <button type="button" class="modal-btn modal-btn-watched" data-watched="${film.id}">
            Add to watched
          </button>
			 <button type="button" class="modal-btn modal-btn-watched" data-watched-rem="${film.id}">
			 Rem to watched
          </button>
			 </div>
			 <div class="modal-btn-wrap">
          <button type="button" class="modal-btn modal-btn-queue" data-queue="${film.id}">
            Add to queue
          </button>
			 <button type="button" class="modal-btn modal-btn-queue" data-queue-rem="${film.id}">
			 Rem to queue
          </button>
			 </div>
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
