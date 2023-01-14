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


// ref.modalWindow.addEventListener('click', on);
export function saveLocalStorage() {
	const modalWatchedBtn = document.querySelector('button[data-watched]');
	const modalWatchedRevBtn = document.querySelector('button[data-watched-rem]');
	const modalQueuedBtn = document.querySelector('button[data-queue]');
	const modalQueuedRevBtn = document.querySelector('button[data-queue-rem]');
	   //  localStorage.clear();
	let arrayWatched =[];
	let arrayQueued =[];
	const currentId = Number(modalWatchedBtn.dataset.watched);
	const currentIdQueued = Number(modalQueuedBtn.dataset.queue);
	let arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
	let arrayLocalQueuedStorage = load (LOCALSTORAGE_QUEUE);
	console.log(arrayLocalStorage);
	defineColorBtn (arrayLocalStorage, modalWatchedBtn, modalWatchedRevBtn, currentId);
	// if (arrayLocalStorage===undefined) {
	// 	modalWatchedBtn.classList.add("modal-btn-rev") 
	// 	// modalWatchedBtn.style.backgroundColor = "#ff6b01";
	// 	return
	// }  if (arrayLocalStorage.includes(currentId)) {
	// 	modalWatchedRevBtn.classList.add("modal-btn-rev") 
	// 	// modalWatchedRevBtn.style.backgroundColor = "#ff6b01";
	// 	return
	// } modalWatchedBtn.classList.add("modal-btn-rev") 
	// // modalWatchedBtn.style.backgroundColor = "#ff6b01"

	modalWatchedBtn.addEventListener('click', addFilmLocal)
	// () => {
	// 	arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
	// 	if (arrayLocalStorage ===undefined) {
	// 		// console.log(arrayLocalStorage);
	// 		saveLocal(arrayWatched, currentId, LOCALSTORAGE_WATCHED);
	// 		// console.log(arrayLocalStorage);
	// 		return
	// 		} 
	// 	if (arrayLocalStorage.includes(currentId)) {
	// 		// console.log(arrayLocalStorage);
	// 		return
	// 	}
	// 		saveLocal(arrayLocalStorage, currentId, LOCALSTORAGE_WATCHED);
	// 		// console.log(arrayLocalStorage);
	// });
	modalWatchedRevBtn.addEventListener('click', remFilmLocal);

	function addFilmLocal() {
		// modalWatchedRevBtn.classList.add("modal-btn-rev")
		console.log(3);
		arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
		if (arrayLocalStorage === undefined) {
		 console.log(arrayLocalStorage);
		saveLocal(arrayWatched, currentId, LOCALSTORAGE_WATCHED);
		 console.log(load (LOCALSTORAGE_WATCHED));
		return
		} 	if (arrayLocalStorage.includes(currentId)) {
			console.log(arrayLocalStorage);
			return
		}	saveLocal(arrayLocalStorage, currentId, LOCALSTORAGE_WATCHED);
			console.log(load (LOCALSTORAGE_WATCHED));
	}
	function remFilmLocal() {
		console.log(6);
		console.log(arrayLocalStorage);
		arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
		 console.log(arrayLocalStorage);
		if (arrayLocalStorage === undefined) {
			return
		} 	if (arrayLocalStorage.includes(currentId)) {
			// arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
			console.log(arrayLocalStorage);
			const g = arrayLocalStorage.indexOf(currentId);
			 console.log(arrayLocalStorage.length===1);
			 if (arrayLocalStorage.length===1) {
				localStorage.removeItem(LOCALSTORAGE_WATCHED);
				return
			 }  const v = arrayLocalStorage.splice(g, 1);
			 console.log(v);
			console.log(arrayLocalStorage.splice(g, 1));
 			save(LOCALSTORAGE_WATCHED, v);
			//   arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
			  console.log(load (LOCALSTORAGE_WATCHED));
			 return
			 }	
	}
	modalQueuedBtn.addEventListener('click', addFilmLocalQueued);
	modalQueuedRevBtn.addEventListener('click', remFilmLocalQueued);

	function addFilmLocalQueued() {
		console.log(arrayLocalQueuedStorage);
		if (arrayLocalQueuedStorage ===undefined) {
			 console.log(arrayLocalQueuedStorage);
			saveLocal(arrayQueued, currentIdQueued, LOCALSTORAGE_QUEUE);
			// console.log(arrayLocalQueuedStorage);
			return
			} 
		if (arrayLocalQueuedStorage.includes(currentIdQueued)) {
			// console.log(arrayLocalQueuedStorage);
			return
		}	
			saveLocal(arrayLocalQueuedStorage, currentIdQueued, LOCALSTORAGE_QUEUE);
			// console.log(arrayLocalQueuedStorage);
	}
	function remFilmLocalQueued() {
		// console.log(arrayLocalQueuedStorage);
		if (arrayLocalQueuedStorage ===undefined) {
			return
		};
		if (arrayLocalQueuedStorage.includes(currentIdQueued)) {
			const g = arrayLocalQueuedStorage.indexOf(currentId);
			// console.log(g);
			// const v = delete arrayLocalQueuedStorage[g];
          const v = arrayLocalQueuedStorage.splice(g, 1);
 			save(LOCALSTORAGE_QUEUE, v);
			//  arrayLocalQueuedStorage = load (LOCALSTORAGE_QUEUE);
			 console.log(arrayLocalQueuedStorage);
			 return
			 }	
	}
};
function defineColorBtn (array, btn1, btn2, id) {
	if (array===undefined) {
		btn1.classList.add("modal-btn-rev") 
		// modalWatchedBtn.style.backgroundColor = "#ff6b01";
		return
	}  if (array.includes(id)) {
		btn2.classList.add("modal-btn-rev") 
		// modalWatchedRevBtn.style.backgroundColor = "#ff6b01";
		return
	} btn1.classList.add("modal-btn-rev") 
	// modalWatchedBtn.style.backgroundColor = "#ff6b01"
}

function saveLocal(array, id, key) {
	array.push (id);
	save(key, array);
}
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