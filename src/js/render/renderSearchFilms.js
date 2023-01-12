import allGeners from '../../json/genres.json';

export function createMarkUp(ref, data) {
  const markUp = data
    .map(item => {
      const defaultPicture =
        'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
      // const defaultPicture = defImg;
      const { title, poster_path, release_date, genre_ids } = item;
      const filmGenre = getGeners(allGeners, genre_ids);
      let link = `https://image.tmdb.org/t/p/w500null`;
      let baseImafge = `https://image.tmdb.org/t/p/w500${poster_path}`;
      const normalizeDate = release_date.slice(0, 4);
      return `
      <li class="photo__card">
          <a href="${baseImafge}">
            <img src="${
              baseImafge !== link ? baseImafge : defaultPicture
            }" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${title}</h2>
            <div class="movie__details">
            <p class="movie__genre">${filmGenre}</p>
            <p class="movie__year">2022>${normalizeDate}</p>
          </div>
          </div>
      </li>
    </ul>
  </div>`;
    })
    .join('');

  ref.galleryList.insertAdjacentHTML('beforeend', markUp);
}

function getGeners(allGenres, idGenres) {
  let newArray = [];
  allGenres.map(el => {
    if (idGenres.includes(el.id)) {
      newArray.push(el.name);
    }
  });
  if (newArray.length > 2) {
    newArray = newArray.slice(0, 2).join(', ');
    return newArray;
  }
  return newArray.join(', ') + ' other';
}
