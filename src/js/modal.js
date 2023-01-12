import axios from 'axios';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api/api-vars';
import { fetchFilmById, fetchTrendedFilms } from './api/fetch';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  // openModalBtn2: document.querySelector('[data-modal-open-2]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalWrap: document.querySelector('.modal-wrap'),
};

refs.openModalBtn.addEventListener('click', openModal);
// refs.openModalBtn2.addEventListener('click', openModal2);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('keydown', closeModal);
refs.modal.addEventListener('click', closeModalbyClick);

async function openModal(item) {
  document.addEventListener('keydown', closeModal);
  refs.modal.classList.toggle('is-hidden');
  const response = await fetchFilmById(item.currentTarget.id).then(r => {
    return r.data;
  });
  console.log(response);
  refs.modalWrap.insertAdjacentHTML('afterBegin', renderMarkupModal(response));
}

// async function openModal2() {
//   document.addEventListener('keydown', closeModal);
//   refs.modal.classList.toggle('is-hidden');
//   const response = await fetchFilmById(76608).then(r => {
//     return r.data;
//   });
//   console.log(response);
//   refs.modalWrap.insertAdjacentHTML('afterBegin', renderMarkupModal(response));
// }

function renderMarkupModal(film) {
  return `<div class="modal-img-wrap">
        <picture class="modal-image">
          <source
            srcset="https://image.tmdb.org/t/p/w500/${
              film.poster_path
            } 1x, https://image.tmdb.org/t/p/w500/${film.poster_path} 2x"
            media="(min-width:1280px)"
          />
          <source
            srcset="https://image.tmdb.org/t/p/w500/${
              film.poster_path
            } 1x, https://image.tmdb.org/t/p/w500/${film.poster_path} 2x"
            media="(min-width:768px)"
          />
          <source
            srcset="https://image.tmdb.org/t/p/w500/${
              film.poster_path
            } 1x, https://image.tmdb.org/t/p/w500/${film.poster_path} 2x"
            media="(max-width:767px)"
          />
          <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${
    film.title
  }" class="modal-image"/>
        </picture>
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
          <button type="button" class="modal-btn modal-btn-watched">
            Add to watched
          </button>
          <button type="button" class="modal-btn modal-btn-queue">
            Add to queue
          </button>
          <button type="button" class="modal-btn modal-btn-trailer">
            Watch trailer
          </button>
        </div>
      </div>`;
}

function closeModal(e) {
  if (e.key === 'Escape' || e.type === 'click') {
    refs.modal.classList.toggle('is-hidden');
    refs.modalWrap.innerHTML = '';
    document.removeEventListener('keydown', closeModal);
  }
}

function closeModalbyClick(e) {
  if (e.target === e.currentTarget) {
    refs.modal.classList.toggle('is-hidden');
    refs.modalWrap.innerHTML = '';
    document.removeEventListener('keydown', closeModal);
  }
}
