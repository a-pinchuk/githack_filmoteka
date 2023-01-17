export function renderPopularFilms(ref, data, genres) {
  const markup = data
    .map(el => {
      const genreId = el.genre_ids;
      const movieGenres = compareGenresId(genres, genreId);
      return `
      <li class="photo__card" data-modal-open id="${el.id}">
            <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="${
        el.title
      }" "loading="lazy" class="movie__image" width="500" height="750"/>
            <span class="movie__rating">${el.vote_average.toFixed(1)}</span>
          <div class="movie__info">
            <p class="film__title">${el.title}</p>
            <div class="movie__details">
            <p class="movie__genre">${movieGenres}</p>
            <p class="movie__year">| ${el.release_date.slice(0, 4)}</p>
          </div>
          </div>
      </li>`;
    })
    .join('');

  ref.galleryList.insertAdjacentHTML('beforeend', markup);
}

function compareGenresId(allGenres, filmGenre) {
  let arrayOfGenres = [];
  allGenres.forEach(el => {
    if (filmGenre.includes(el.id)) {
      arrayOfGenres.push(el.name);
    }
  });
  if (arrayOfGenres.length > 3) {
    arrayOfGenres = arrayOfGenres.splice(0, 2).join(', ') + ', Other';
    return arrayOfGenres;
  }

  return arrayOfGenres.join(', ');
}
