export function renderFilmsByIdForLibrary(ref, datas) {
  const markup = datas.map(({data}) => {
  const genres = compareGenres(data.genres);
		//   console.log(typeof data.vote_average);
	    return `<li class="photo__card">
          <a href="https://image.tmdb.org/t/p/w500/${data.poster_path}">
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" loading="lazy" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${data.title}</h2>
            <div class="movie__details">
            <p class="movie__genre">${genres}</p>
            <p class="movie__year">${data.release_date.slice(0, 4)}</p>
				<p class="movie__vote-average">${data.vote_average.toFixed(1)}</p>
          </div>
          </div>
      </li>
    </ul>
  </div>`;
    })
    .join('');

  ref.libraryList.insertAdjacentHTML('beforeend', markup);
}

function compareGenres (genres) {
	let arrayOfGenres = [];
 	genres.forEach(e => {
	 	 arrayOfGenres.push(e.name);
		 }
	);
 
	if (arrayOfGenres.length > 2) {
	  arrayOfGenres = arrayOfGenres.splice(0, 2).join(', ') + ', Other';
	  
	}
	return arrayOfGenres;
}
