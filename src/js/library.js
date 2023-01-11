import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTrendedFilms } from './api/fetch';
// import { fetchSearchedFilms } from './api/fetch';
 import { fetchFilmById } from './api/fetch';
// import { fetchFilmGenres } from './api/fetch';
import { renderPopularFilms } from './render/renderPopularFilm';
import { renderFilmsByIdForLibrary } from './render/renderFilmByIdForLibrary';
// import { renderFilms } from './render/renderHTML';
import { ref } from './references/ref';
// import { options, pagination } from './pagination';
// import { PAGES } from './api/api-vars';

// let textContent = '';

// ref.form.addEventListener('submit', fetchAndRenderFilms);

// fetchAndRenderPopularFilm();

// async function fetchAndRenderPopularFilm(e) {
//   try {
//     const image = await fetchTrendedFilms();
//     const data = image.data.results;
//     renderPopularFilms(ref, data);
//   } catch (error) {
//     console.log(error);
//   }
// }
const dyk = [550, 299536, 383498];
const save = (key, value) => {
	try {
	  const serializedState = JSON.stringify(value);
	  localStorage.setItem(key, serializedState);
	} catch (error) {
	  console.error("Set state error: ", error.message);
	}
 };
 save ("ty", dyk);
 console.log(save);
 
 const load = key => {
	try {
	  const serializedState = localStorage.getItem(key);
	  return serializedState === null ? undefined : JSON.parse(serializedState);
	} catch (error) {
	  console.error("Get state error: ", error.message);
	}
 };
// ------------------
const ids = [550, 299536, 383498];
// console.log(ids.map(id => console.log(id)));
async function fetchAndRenderFilm(e) {
	try {
	 const arrayOfPromises = ids.map(async (id) => await fetchFilmById(id));
	 const data = await Promise.all(arrayOfPromises);
	  console.log(data);
	//   const data = users.map(user => user.data.results);
	  renderFilmsByIdForLibrary(ref, data);
	} catch (error) {
	  console.log(error);
	}
 }

 fetchAndRenderFilm();

// ---------------------
// async function fetchAndRenderFilmById(id) {
//   try {
//     const image = await fetchFilmById(id);
//     const data = image.data;
//     console.log('🚀 ~ data in fetchAndRenderFilmById', data);

//     // renderPopularFilms(ref, data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchAndRenderFilmById(89125);
// fetchFilmByGenres();

// async function fetchAndRenderFilms(e) {
//   e.preventDefault();
//   textContent = e.currentTarget.searchQuery.value;

//   clearData();
//   if (textContent === '') {
//     clearData();
//     return Notify.warning(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }
//   try {
//     const image = await fetchSearchedFilms(textContent, PAGES);
//     const data = image.data.results;
//     const total_pages = image.data.total_pages;
//     console.log('🚀 ~ data in fetchAndRenderFilms', total_pages);

//     if (data.length === 0) {
//       return Notify.warning(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       Notify.success(`Hooray! We found ${image.data.totalHits} images.`);
//     }
//     renderFilms(ref, data);
//     pagination.on('afterMove', ({ page }) => console.log(page));
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetchFilmByGenres() {
//   try {
//     const image = await fetchFilmGenres();
//     GENRES = image.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// var counter = 0;

// document.querySelectorAll('input').forEach(function (input) {
//   input.addEventListener('input', function (e) {
//     counter = input.value.length * 4;
//     document.querySelector('.underline').style.width = counter + '%';

//     if (input.value.length == 0) {
//       document.querySelector('.underline').style.width = '100%';
//     }
//   });
// });

// function clearData() {
//   ref.gallery.innerHTML = '';
// }
