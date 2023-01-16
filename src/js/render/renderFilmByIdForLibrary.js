import { ref } from '../references/ref';
export function renderFilmsByIdForLibrary(ref, datas) {
  const markup = datas
    .map(({ data }) => {
      const genres = compareGenres(data.genres);
      return `<li class="photo__card" data-modal-open id=${data.id}">
            <img src="https://image.tmdb.org/t/p/w500/${
              data.poster_path
            }" alt="${data.title}" "loading="lazy" class="movie__image"/>
				<span class="movie__rating">${data.vote_average.toFixed(1)}</span>
          <div class="movie__info">
            <h2 class="movie__title">${data.title}</h2>
            <div class="movie__details">
            <p class="movie__genre">${genres}</p>
            <p class="movie__year">${data.release_date.slice(0, 4)}</p>
				
          </div>
          </div>
      </li>
    </ul>
  </div>`;
    })
    .join('');
  ref.libraryList.insertAdjacentHTML('beforeend', markup);
}

function compareGenres(genres) {
  let arrayOfGenres = [];
  genres.forEach(e => {
    arrayOfGenres.push(e.name);
  });

  if (arrayOfGenres.length > 2) {
    arrayOfGenres = arrayOfGenres.splice(0, 2).join(', ') + ', Other';
  }
  return arrayOfGenres;
}
