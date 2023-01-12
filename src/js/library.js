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
// import { PAGES } from './api/api-vars';

// let textContent = '';
const  LOCALSTORAGE_WATCHED =  "watched";
const  LOCALSTORAGE_QUEUE =  "queue";

const dyk = [800815];
	  localStorage.setItem(LOCALSTORAGE_WATCHED, JSON.stringify(dyk));

const qyk = [653851];
localStorage.setItem(LOCALSTORAGE_QUEUE, JSON.stringify(qyk));

function load (key) {
	try {
	  const serializedState = localStorage.getItem(key);
	  return serializedState === null ? undefined : JSON.parse(serializedState);
	} catch (error) {
	  console.error("Get state error: ", error.message);
	}
 };

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
ref.libraryWatchedBtn.addEventListener('click', onClickWatchedBtn);
ref.libraryQueueBtn.addEventListener('click', onClickQueueBtn);

function onDOMContentLoaded() {
	// console.log(ref.libraryWatchedBtn.style);
	const arrayWatched = load (LOCALSTORAGE_WATCHED);
	fetchAndRenderFilm(arrayWatched);	
}
function onClickWatchedBtn(e) {
	ref.libraryList.innerHTML = "";
 const arrayWatched = load (LOCALSTORAGE_WATCHED);
 fetchAndRenderFilm(arrayWatched);
 }
function onClickQueueBtn(e) {
	ref.libraryList.innerHTML = "";
	const arrayQueue = load (LOCALSTORAGE_QUEUE);
	fetchAndRenderFilm(arrayQueue);
}
// const ids = [550, 299536, 383498];
// console.log(ids.map(id => console.log(id)));
async function fetchAndRenderFilm(ids) {
	try {
	 const arrayOfPromises = ids.map(async (id) => await fetchFilmById(id));
	 const data = await Promise.all(arrayOfPromises);
	//   console.log(data);
	  renderFilmsByIdForLibrary(ref, data);
	} catch (error) {
	  console.log(error);
	}
 }

