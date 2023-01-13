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

export function saveLocalStorage() {
	const modalWatchedBtn = document.querySelector('button[data-watched]');
	const modalQueuedBtn = document.querySelector('button[data-queue]');
   //  localStorage.clear();
	let arrayWatched =[];
	let arrayQueued =[];
	const arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
	const arrayLocQueuedStorage = load (LOCALSTORAGE_QUEUE);
	const currentId = Number(modalWatchedBtn.dataset.watched);
	// if (arrayLocalStorage !== undefined && arrayLocalStorage.includes(currentId)) {
	// 	modalWatchedBtn.textContent = "Rem to watched";
	// 	modalWatchedBtn.addEventListener ('click', () => {
	// 		const g = arrayLocalStorage.indexOf(currentId);
	// 		const v = arrayLocalStorage.splice(g, 1);
	// 		save(LOCALSTORAGE_WATCHED, v);
	// 		modalWatchedBtn.textContent = "Add to watched";

	// 		// if (modalWatchedBtn.textContent.toLowerCase()==="add to watched") {
	// 			// modalWatchedBtn.textContent = "Add to watched";
				
	// 	})
		
	// }
	modalWatchedBtn.addEventListener ('click', () => {
				if (arrayLocalStorage ===undefined) {
					saveLocal(arrayWatched, currentId, LOCALSTORAGE_WATCHED);
				return
				}
				saveLocal(arrayLocalStorage, currentId, LOCALSTORAGE_WATCHED);
	})
	

  	modalQueuedBtn.addEventListener ('click', () => {
		if (arrayLocQueuedStorage ===undefined) {
			saveLocal(arrayQueued, currentId, LOCALSTORAGE_QUEUE);
		return
		}
		saveLocal(arrayLocQueuedStorage, currentId, LOCALSTORAGE_QUEUE);
});
	}
function saveLocal(array, id, key) {
	array.push (id);
	save(key, array);
}
// function onClickModalWatchedBtn(params) {
// 	const arrayWatched = load (LOCALSTORAGE_WATCHED);
//  	console.log(params.dataset.watched);
// }
// function onClickModalQueuedBtn(params) {
// 	console.log(10);
// }
function save (key, value) {
	try {
	  const serializedState = JSON.stringify(value);
	  localStorage.setItem(key, serializedState);
	} catch (error) {
	  console.error("Set state error: ", error.message);
	}
 };
function load (key) {
	try {
	  const serializedState = localStorage.getItem(key);
	  return serializedState === null ? undefined : JSON.parse(serializedState);
	} catch (error) {
	  console.error("Get state error: ", error.message);
	}
 };

// document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
// ref.libraryWatchedBtn.addEventListener('click', onClickWatchedBtn);
// ref.libraryQueueBtn.addEventListener('click', onClickQueueBtn);

// function onClickWatchedBtn(e) {
// 	ref.libraryList.innerHTML = "";
//  const arrayWatched = load (LOCALSTORAGE_WATCHED);
//  fetchAndRenderFilm(arrayWatched);
//  }
// function onClickQueueBtn(e) {
// 	ref.libraryList.innerHTML = "";
// 	const arrayQueue = load (LOCALSTORAGE_QUEUE);
// 	fetchAndRenderFilm(arrayQueue);
// }