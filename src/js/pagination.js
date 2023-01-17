// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { renderSearchFilms } from './requests/searchFilms';
// import { ref } from './references/ref';
// import { darkmode } from './switcher';
// import { fetchAndRenderPopularFilm } from './fetchAndRenderPopularFilm';
// import { renderSearchFilms } from './requests/searchFilms';
// export { showPagination };


// const containerPopular = document.getElementById('pagination');
// const containerSearch = document.getElementById('pagination-search')

// containerSearch.style.display = 'none'



// if (darkmode) {
//   ref.paginationRef.classList.add('pagination-btns-dark-theme');
// }

// const options = {
//   totalItems: 200,
//   itemsPerPage: 1,
//   visiblePages: 5,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'pagination-first-button',
//   lastItemClassName: 'pagination-last-button',

//   template: {
//     page: '<a href="#" class="pagination-page-button">{{page}}</a>',
//     currentPage: '<a class="pagination-active-button">{{page}}</a>',
//     moveButton:
//       '<a href="#" class="pagination-next-button">' +
//       '<span class="pag-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="pagination-disabled-button">' +
//       '<span class="pag-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="pagination-more-button">' +
//       '<span class="pag-ico-more"> </span>' +
//       '</a>',
//   },
// };


// //пагінація для трендів
// const pagination = new Pagination(containerPopular, options)

// pagination.on('afterMove', onPaginationMove);

// function onPaginationMove({ page }) { 
//   ref.galleryList.innerHTML = ''
//   fetchAndRenderPopularFilm(page)
//   // renderSearchFilms(page)
//    window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }

// function showPagination(totalPages) {
//   pagination.setTotalItems(totalPages);
//   pagination.movePageTo(options.page);
//   ref.paginationRef.style.display = 'flex';
// }


// function showPaginationTrended(totalPages) {
//   pagination.setTotalItems(totalPages)
//   pagination.movePageTo(options.page)
//   ref.paginationRef.style.display = 'flex'
//   ref.paginationSearchRef.style.display = 'none'
// }


// //пагінація для пошуку 

// const paginationSearch = new Pagination(containerSearch, options)

// paginationSearch.on('afterMove', onPaginationSearchMove)

// function onPaginationSearchMove ({page}) {
//   renderSearchFilms(page)
//    window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }

// function showPaginationSearched(totalPages) {
//   paginationSearch.setTotalItems(totalPages)
//   paginationSearch.movePageTo(options.page)
//   ref.paginationRef.style.display = 'none'
//   ref.paginationSearchRef.style.display = 'flex'
// }

// // пагінація для watched

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { renderSearchFilms } from './requests/searchFilms';
import { ref } from './references/ref';
import { darkmode } from './switcher';
import { fetchAndRenderPopularFilm } from './fetchAndRenderPopularFilm';
export {showPaginationTrended}
export {showPaginationSearched}



const containerPopular = document.getElementById('pagination');
const containerSearch = document.getElementById('pagination-search')

containerSearch.style.display = 'none'

if(darkmode) {
  ref.paginationRef.classList.add('pagination-btns-dark-theme')
  ref.paginationSearchRef.classList.add('pagination-btns-dark-theme')
}


const options = {
  totalItems: 200,
  itemsPerPage: 1,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'pagination-first-button',
  lastItemClassName: 'pagination-last-button',

  template: {
    page: '<a href="#" class="pagination-page-button">{{page}}</a>',
    currentPage: '<a class="pagination-active-button">{{page}}</a>',
    moveButton:
      '<a href="#" class="pagination-next-button">' +
        '<span class="pag-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="pagination-disabled-button">' +
        '<span class="pag-ico-{{type}}">{{type}}</span>' +
      '</span>',
      moreButton:
      '<a href="#" class="pagination-more-button">' +
        '<span class="pag-ico-more"> </span>' +
      '</a>'

  }}
//пагінація для трендів
const pagination = new Pagination(containerPopular, options)

pagination.on('afterMove', onPaginationMove);

function onPaginationMove({ page }) { 
  ref.galleryList.innerHTML = ''
  fetchAndRenderPopularFilm(page)
  // renderSearchFilms(page)
   window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function showPaginationTrended(totalPages) {
  pagination.setTotalItems(totalPages)
  pagination.movePageTo(options.page)
  ref.paginationRef.style.display = 'flex'
  ref.paginationSearchRef.style.display = 'none'
}


//пагінація для пошуку 

const paginationSearch = new Pagination(containerSearch, options)

paginationSearch.on('afterMove', onPaginationSearchMove)

function onPaginationSearchMove ({page}) {
  ref.galleryList.innerHTML = ''
  renderSearchFilms(page)
   window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function showPaginationSearched(totalPages) {
  paginationSearch.setTotalItems(totalPages)
  paginationSearch.movePageTo(options.page)
  ref.paginationRef.style.display = 'none'
  ref.paginationSearchRef.style.display = 'flex'
}