import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { ref } from './references/ref';
import { darkmode } from './switcher';

import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/apiVars';
import { fetchAndRenderFilm, load } from './library';
import { fetchAndRenderFilm } from './library';


export {paginationWatched}
export {paginationQueued}

export {moviesOnPage}
export {onPagginationWatchedMove}
export {showQueueHideWatchedPag}
export {showWatchedHideQueuePag}


const containerWatched = document.getElementById('pagination-lib-watched')
containerWatched.style.display = 'none'
const containerQueued = document.getElementById('pagination-lib-queued')
containerQueued.style.display = 'none'

if(darkmode) {
    ref.paginnationWatchedRef.classList.add('pagination-btns-dark-theme')
    containerQueued.classList.add('pagination-btns-dark-theme')
}

const options = {
    itemsPerPage: 1,
    visiblePages: 1,
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

    
    
const paginationWatched = new Pagination(containerWatched, options)
const watchedMovies = load(LOCALSTORAGE_WATCHED);
const moviesOnPage = 3

if (watchedMovies !== undefined) {

paginationWatched.setTotalItems(watchedMovies.length / moviesOnPage)
paginationWatched.on('afterMove', onPagginationWatchedMove)

function onPagginationWatchedMove(page) {
        const watchedMovies = load(LOCALSTORAGE_WATCHED);
        paginationWatched.setTotalItems(watchedMovies.length / moviesOnPage)
        ref.galleryList.innerHTML = ''
        let start = (Object.values(page)[0] - 1) * moviesOnPage
        let end = start + moviesOnPage
        let moviesWatched = watchedMovies.slice(start, end)

        fetchAndRenderFilm(moviesWatched)
        // return moviesWatched
}
}


const paginationQueued = new Pagination(containerQueued, options)
const queuedMovies = load(LOCALSTORAGE_QUEUE)

if(queuedMovies !== undefined) {
  paginationQueued.setTotalItems(queuedMovies.length / moviesOnPage)
  paginationQueued.on('afterMove', onPaginationQueuedMove)
  
  function onPaginationQueuedMove (page) {
    const queuedMovies = load(LOCALSTORAGE_QUEUE)
  paginationQueued.setTotalItems(queuedMovies.length / moviesOnPage)

    ref.galleryList.innerHTML = ''
    let start = (Object.values(page)[0] - 1) * moviesOnPage
    let end = start + moviesOnPage
    let moviesQueued = queuedMovies.slice(start, end)
  
    fetchAndRenderFilm(moviesQueued)
    // return moviesQueued
  }
}


function showQueueHideWatchedPag () {
  containerWatched.style.display = 'none'
  containerQueued.style.display = 'flex'
}

function showWatchedHideQueuePag () {
  containerWatched.style.display = 'flex'
  containerQueued.style.display = 'none'
}
