import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchTrendedFilms } from './api/fetch';
// import { fetchSearchedFilms } from './api/fetch';
// import { fetchFilmById } from './api/fetch';
import { fetchFilmGenres } from './api/fetch';
import { fetchFilmTrailer } from './api/fetch';
import { renderPopularFilms } from './render/renderPopularFilm';
// import { renderFilms } from './render/renderHTML';
import { ref } from './references/ref';
// import { options, pagination } from './pagination';
// import { PAGES } from './api/api-vars';

// let textContent = '';

// ref.form.addEventListener('submit', fetchAndRenderFilms);

fetchAndRenderPopularFilm();

async function fetchAndRenderPopularFilm(e) {
  try {
    ref.loader.style.display = 'flex';
    const image = await fetchTrendedFilms();
    console.log('🚀 ~ image', image);
    const genres = await fetchFilmGenres();
    const data = image.data.results;
    const genresID = genres.data.genres;

    renderPopularFilms(ref, data, genresID);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}
async function fetchAndRenderTrailerFilm(id) {
  try {
    const image = await fetchFilmTrailer(id);
    const data = image.data;

    // renderPopularFilms(ref, data);
  } catch (error) {
    console.log(error);
  }
}

export function loaderHide() {
  setTimeout(() => {
    ref.loader.style.display = 'none';
  }, 500);
}
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
