import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { renderSearchFilms } from './requests/searchFilms';
import { ref } from './references/ref';

import { darkmode } from './switcher';

export {showPagination}

const container = document.getElementById('pagination');

if(darkmode) {
  ref.paginationRef.classList.add('pagination-btns-dark-theme')
}


const options = {
  totalItems: 200,
  itemsPerPage: 1,
  visiblePages: 8,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'pagination-first-button',
  lastItemClassName: 'pagination-last-button',

  template: {
    page: '<a href="#" class="pagination-page-button">{{page}}</a>',
    currentPage: '<a class="pagination-active-button">{{page}}</a>',
    moveButton:
      '<a href="#" class="pagination-next-button">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="pagination-disabled-button">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
      moreButton:
      '<a href="#" class="pagination-more-button">' +
        '<p class="tui-ico-ellip">...</p>' +
      '</a>'

  }
};

const pagination = new Pagination(container, options);
pagination.on('afterMove', ({ page }) =>{
   renderSearchFilms(page) 
   window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
} 
);

function showPagination(totalPages) {
  pagination.setTotalItems(totalPages)
  pagination.movePageTo(options.page)
  ref.paginationRef.style.display = 'flex'
}