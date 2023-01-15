// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { fetchTrendedFilms } from './api/fetch';
// import { fetchSearchedFilms } from './api/fetch';
import { fetchFilmById } from './api/fetch';
import { fetchFilmGenres } from './api/fetch';
// import { renderPopularFilms } from './render/renderPopularFilm';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
// import { renderFilms } from './render/renderHTML';
import { ref } from './references/ref';
// import { options, pagination } from './pagination';
import { LOCALSTORAGE_WATCHED, LOCALSTORAGE_QUEUE } from './api/api-vars';


// console.log(document.title==="Githack Filmoteka Library");
function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// ref.libraryWatchedBtn.classList.add("modal-btn-rev")
if (document.title==="Githack Filmoteka Library") {
	document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
	ref.libraryWatchedBtn.addEventListener('click', onClickWatchedBtn);
  ref.libraryQueueBtn.addEventListener('click', onClickQueueBtn);
  ref.libraryWatchedBtn.classList.add("header-library__btn-active");
//   header-library__btn.is-active
//   ref.libraryWatchedBtn.style.backgroundColor = '#ff6b01';
 }
 console.log(ref.notImg);

function onDOMContentLoaded() {
	//  /   console.log(load(LOCALSTORAGE_WATCHED));
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
//   console.log(arrayWatched);

  if (arrayWatched === undefined) {
	ref.notImg.classList.remove("not-img")
	  return;
  }
  // // console.log(arrayWatched);
  // const ars =arrayWatched.map(ar => ar.id);
  fetchAndRenderFilm(arrayWatched);
}
function onClickWatchedBtn(e) {
	ref.libraryWatchedBtn.classList.toggle("header-library__btn-active");
	ref.libraryQueueBtn.classList.toggle("header-library__btn-active");
//   ref.libraryWatchedBtn.style.backgroundColor = '#ff6b01';
  ref.galleryList.innerHTML = '';
  const arrayWatched = load(LOCALSTORAGE_WATCHED);
  // console.log(arrayWatched);
  if (arrayWatched === undefined) {
	ref.notImg.classList.remove("not-img")
    return;
  }
  ref.notImg.classList.remove("not-img")
  // const ars = arrayWatched.map(ar => ar.id);
  fetchAndRenderFilm(arrayWatched);
}
function onClickQueueBtn(e) {
	ref.libraryWatchedBtn.classList.toggle("header-library__btn-active");
	ref.libraryQueueBtn.classList.toggle("header-library__btn-active");
//   ref.libraryWatchedBtn.style.backgroundColor = '#000000';
  ref.galleryList.innerHTML = '';
  const arrayQueue = load(LOCALSTORAGE_QUEUE);
  // console.log(arrayQueue);
  if (arrayQueue === undefined) {
	ref.notImg.classList.remove("not-img")
    return;
  }
  // const ars = arrayQueue.map(ar => ar.id);
  fetchAndRenderFilm(arrayQueue);
}

export function rederAfterModalWat () {
	ref.galleryList.innerHTML = '';
	const arrayWatched = load(LOCALSTORAGE_WATCHED);
	const arrayQueue = load(LOCALSTORAGE_QUEUE);
	if (arrayWatched === undefined) {
		ref.notImg.classList.remove("not-img")
	  return;
	} 	
	if (ref.libraryWatchedBtn.classList.contains("header-library__btn-active")) {
		fetchAndRenderFilm(arrayWatched);
		}	
	
	
}
export function rederAfterModalQue () {
	ref.galleryList.innerHTML = '';
	const arrayQueue = load(LOCALSTORAGE_QUEUE);
	
	if (arrayQueue === undefined) {
		ref.notImg.classList.remove("not-img")
	  return;
	} 
	if (ref.libraryQueueBtn.classList.contains("header-library__btn-active")) {
		fetchAndRenderFilm(arrayQueue)
		return
	}	
	
	
}
// const ids = [550, 299536, 383498];
// console.log(ids.map(id => console.log(id)));
async function fetchAndRenderFilm(ids) {
  try {
    // console.log(ids);
    const arrayOfPromises = ids.map(async id => await fetchFilmById(id));
    const data = await Promise.all(arrayOfPromises);
    //   console.log(data);
    renderFilmsByIdForLibrary(ref, data);
  } catch (error) {
    console.log(error);
  }
}
