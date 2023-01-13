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

// let textContent = '';
// const  LOCALSTORAGE_WATCHED =  "watched";
// const  LOCALSTORAGE_QUEUE =  "queue";

 const dyk = [800815];
// 	  localStorage.setItem(LOCALSTORAGE_WATCHED, JSON.stringify(dyk));

 const qyk = [653851];
// localStorage.setItem(LOCALSTORAGE_QUEUE, JSON.stringify(qyk));
export function saveLocalStorage() {
	const modalWatchedBtn = document.querySelector('button[data-watched]');
	const modalQueuedBtn = document.querySelector('button[data-queue]');
   let film ={
		id: 0,
		save: false,
	};
	//   localStorage.clear();
	const btn = true;
	let arrayWatched =[];
	const arrayLocalStorage = load (LOCALSTORAGE_WATCHED);
	
	modalWatchedBtn.addEventListener ('click', () => {
	if (arrayLocalStorage ===undefined) {
		const currentId = Number(modalWatchedBtn.dataset.watched);
		   film.id = currentId;
		   film.save = true;
			modalWatchedBtn.textContent = "Rem to watched";
		// console.log(arrayLocalStorage);
		   if (arrayLocalStorage ===undefined) {
			arrayWatched.push (film);
			save(LOCALSTORAGE_WATCHED, arrayWatched)
			return
			}
			arrayLocalStorage.push (film);
			save(LOCALSTORAGE_WATCHED, arrayLocalStorage);
			
		}
		const t = arrayLocalStorage.find(op => op.save);
		if (t === false) {
			const currentId = Number(modalWatchedBtn.dataset.watched);
		   film.id = currentId;
		   film.save = true;
			modalWatchedBtn.textContent = "Rem to watched";
		// console.log(arrayLocalStorage);
		   if (arrayLocalStorage ===undefined) {
			arrayWatched.push (film);
			save(LOCALSTORAGE_WATCHED, arrayWatched)
			return
			}
			arrayLocalStorage.push (film);
			save(LOCALSTORAGE_WATCHED, arrayLocalStorage);
		}
	})
   
			
	modalQueuedBtn.addEventListener ('click', onClickModalQueuedBtn);
	
		// console.log(a);
	// save("k", a)
	// console.log(load("k"));})
	// 	// console.log(ref.libraryWatchedBtn.style);
	// 	const arrayWatched = load (LOCALSTORAGE_WATCHED);
	// 	fetchAndRenderFilm(arrayWatched);	
	}
// function onClickModalWatchedBtn(params) {
// 	const arrayWatched = load (LOCALSTORAGE_WATCHED);
//  	console.log(params.dataset.watched);
// }
function onClickModalQueuedBtn(params) {
	console.log(10);
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