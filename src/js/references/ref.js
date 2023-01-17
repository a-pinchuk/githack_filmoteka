const ref = {
  paginationRef: document.querySelector('.pagination-btns'),
  paginationSearchRef: document.querySelector('#pagination-search'),
  paginnationWatchedRef: document.querySelector('#pagination-lib-watched'),
  paginationQueuedRef: document.querySelector('#pagination-lib-queued'),
  bodyRef: document.querySelector('body'),
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-form__input'),
  alertMessage: document.querySelector('.search-form__info'),
  photoCard: document.querySelector('.photo-card'),
  galleryList: document.querySelector('.gallery__list'),
  studentsModalOpenBtnRef: document.querySelector('.footer__link'),
  studentsModalCloseBtnRef: document.querySelector(
    '.students-modal-close-button'
  ),
  studentsModal: document.querySelector('.students-modal'),
  backdropRef: document.querySelector('.backdrop-students-modal'),
  libraryWatchedBtn: document.querySelector('#library-watched'),
  libraryQueueBtn: document.querySelector('#library-queue'),
  libraryList: document.querySelector('#movie-list'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalWrap: document.querySelector('.modal-wrap'),
  modalWindow: document.querySelector('.modal-window'),
  closeIcon: document.querySelector('.icon-close'),
  checkbox: document.querySelector('.checkbox'),
  loader: document.querySelector('.cssload-loader'),
  div: document.querySelector('.modal-wrap-img-btn'),
  notImg: document.querySelector('.not-img'),
};

export { ref };
