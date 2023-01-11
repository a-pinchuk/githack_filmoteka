import axios from 'axios';
import { API_KEY, TREND_URL, SEARCH_URL, ID_URL } from './api/api-vars';
import { fetchFilmById, fetchTrendedFilms } from './api/fetch';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.modal.addEventListener('keydown', closeModal);
refs.modal.addEventListener('click', closeModalbyClick);

async function openModal() {
  document.addEventListener('keydown', closeModal);
  refs.modal.classList.toggle('is-hidden');
  // fetchFilmById(76600);
}



function closeModal(e) {
  if (e.key === 'Escape' || e.type === 'click') {
    refs.modal.classList.toggle('is-hidden');
    document.removeEventListener('keydown', closeModal);
  }
}

function closeModalbyClick(e) {
  if (e.target === e.currentTarget) {
    refs.modal.classList.toggle('is-hidden');
    document.removeEventListener('keydown', closeModal);
  }
}
