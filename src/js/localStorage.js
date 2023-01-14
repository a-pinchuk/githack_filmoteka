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
	const modalQueuedBtn = document.querySelector('button[data-queue]');
	//   localStorage.clear();
	let arrayWatched =[];
	let arrayQueued =[];
	const currentId = Number(modalWatchedBtn.dataset.watched);
	const arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
	if (arrayLocalStorage !== undefined && arrayLocalStorage.includes(currentId)) {
		modalWatchedBtn.textContent = "Rem to watched";
		modalWatchedBtn.classList.add("modal-btn-rev");
	} else {modalWatchedBtn.classList.remove("modal-btn-rev");}
	const arrayLocQueuedStorage = load (LOCALSTORAGE_QUEUE);
	if (arrayLocQueuedStorage !== undefined && arrayLocQueuedStorage.includes(currentId)) {
		modalQueuedBtn.textContent = "Rem to watched";
	}
	console.log(modalWatchedBtn.textContent);
	console.log(modalWatchedBtn.textContent.toLowerCase() === "add to watched");
	modalWatchedBtn.addEventListener('click', addFilmLocal(arrayLocalStorage, currentId, LOCALSTORAGE_WATCHED, modalWatchedBtn, arrayWatched))
};

 function addFilmLocal(array, id, key, btn, arrayWatched) {
	if (array ===undefined) {
		console.log(arrayLocalStorage);
		saveLocal(arrayWatched, id, key);
		console.log(array);
		return
		} 	
		saveLocal(array, id, key);
		// console.log(5);
		btn.textContent = "Rem to watched";
		btn.classList.add("modal-btn-rev");
		array = load (key);
		remFilmLocal (array, id, key, btn)
 }

 function remFilmLocal (array, id, key, btn, arrayWatched) {
		if (array.includes(id)) {
			const g = array.indexOf(id);
         const v = array.splice(g, 1);
 			save(key, v);
			 btn.textContent = "Add to watched";	
			 btn.classList.remove("modal-btn-rev");
			 array = load (key);
			 addFilmLocal(array, id, key, btn, arrayWatched)
			}	
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