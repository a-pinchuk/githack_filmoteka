export function renderFilmsByIdForLibrary(ref, datas) {
  const markup = datas.map(({data}) => {
	    return `<li class="photo__card">
          <a href="https://image.tmdb.org/t/p/w500/${data.poster_path}">
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" loading="lazy" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${data.title}</h2>
            <div class="movie__details">
            <p class="movie__genre">cartoon</p>
            <p class="movie__year">2022</p>
				<p class="movie__vote-average">${data.vote_average}</p>
          </div>
          </div>
      </li>
    </ul>
  </div>`;
    })
    .join('');

  ref.galleryList.insertAdjacentHTML('beforeend', markup);
}
