import { fetchFilmById, fetchFilmTrailer } from './api/fetch';
import { ref } from './references/ref';
import { loaderHide } from '../js/fetchAndRenderPopularFilm';
import { saveLocalStorage } from '../js/localStorage';
import sprite from '../images/sprite.svg';

ref.libraryList.addEventListener('click', openModal);
ref.closeModalBtn.addEventListener('click', closeModal);
ref.modal.addEventListener('keydown', closeModal);
ref.modal.addEventListener('click', closeModalbyClick);

async function openModal(item) {
  document.addEventListener('keydown', closeModal);
  ref.loader.style.display = 'flex';
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
  loaderHide();
  await saveLocalStorage();

  const btnTreil = document.querySelector('.modal-btn-trailer');
  const wrapIMG = document.querySelector('.modal-img-wrap');
  btnTreil.addEventListener('click', onClickWatch);

  async function onClickWatch() {
    const li = item.target.closest('.photo__card');
    const id = li.getAttribute('id');
    const response = await fetchFilmTrailer(id).then(r => {
      return r.data;
    });
    const officialTrail = response.results.length - 1;
    wrapIMG.remove();
    btnTreil.style.display = 'none';
    ref.modalWrap.insertAdjacentHTML(
      'afterBegin',
      renderTrail(response.results[officialTrail])
    );
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
            <button type="button" class="modal-btn-trailer"><svg class="btn-trailer-icon"><use href="${sprite}#icon-play"></use></svg>
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
		  <div class="modal-btn-wrap">
          <button type="button" class="modal-btn modal-btn-watched" data-watched="${
            film.id
          }">
            Add to watched
          </button>
			 <button type="button" class="modal-btn modal-btn-watched" data-watched-rem="${
         film.id
       }">
			 Rem to watched
          </button>
			 </div>
			 <div class="modal-btn-wrap">
          <button type="button" class="modal-btn modal-btn-queue" data-queue="${
            film.id
          }">
            Add to queue
          </button>
			 <button type="button" class="modal-btn modal-btn-queue" data-queue-rem="${
         film.id
       }">
			 Rem to queue
          </button>
			 </div>
        </div>
      </div>`;
}
function renderDarkMarkupModal(film) {
  return `<div class="modal-img-wrap">
          <div class="modal-wrap-img-btn"><img src="https://image.tmdb.org/t/p/w500/${
            film.poster_path
          }" alt="${film.title}" class="modal-image"/>
            <button type="button" class="modal-btn-trailer"><svg class="btn-trailer-icon"><use href="${sprite}#icon-play"></use></svg>
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
		  <div class="modal-btn-wrap">
          <button type="button" class="modal-btn modal-btn-dark modal-btn-watched" data-watched="${
            film.id
          }">
            Add to watched
          </button>
			 <button type="button" class="modal-btn modal-btn-dark modal-btn-watched" data-watched-rem="${
         film.id
       }">
			 Rem to watched
          </button>
			 </div>
			 <div class="modal-btn-wrap">
          <button type="button" class="modal-btn modal-btn-dark modal-btn-queue" data-queue="${
            film.id
          }">
            Add to queue
          </button>
			 <button type="button" class="modal-btn modal-btn-dark modal-btn-queue" data-queue-rem="${
         film.id
       }">
			 Rem to queue
          </button>
			 </div>
        </div>
      </div>`;
}
function closeModal(e) {
  const backdrop = document.querySelector('.backdrop-info');
  if (e.key === 'Escape' || e.type === 'click') {
    ref.modal.classList.toggle('is-hidden');
    ref.modalWrap.innerHTML = '';
    document.body.style.overflow = '';
    backdrop.style.backgroundImage = '';
    document.removeEventListener('keydown', closeModal);
  }
}
function closeModalbyClick(e) {
  const backdrop = document.querySelector('.backdrop-info');
  if (e.target === e.currentTarget) {
    ref.modal.classList.toggle('is-hidden');
    ref.modalWrap.innerHTML = '';
    document.body.style.overflow = '';
    backdrop.style.backgroundImage = '';
    document.removeEventListener('keydown', closeModal);
  }
}

function renderTrail({ key }) {
  return `<iframe
  width="375"
    height="478"
    src="https://www.youtube.com/embed/${key}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    waitUntil()
    class='modal-image'
  ></iframe>`;
}
