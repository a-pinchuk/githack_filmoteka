export function renderPopularFilms(ref, data) {
  const markup = data
    .map(el => {
      return `
      <li class="photo__card">
          <a href="https://image.tmdb.org/t/p/w500/${el.poster_path}">
            <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${el.title}</h2>
            <div class="movie__details">
            <p class="movie__genre">cartoon</p>
            <p class="movie__year">2022</p>
          </div>
          </div>
      </li>
    </ul>
  </div>`;
    })
    .join('');

  ref.galleryList.insertAdjacentHTML('beforeend', markup);
}
