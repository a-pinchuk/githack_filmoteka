
import allGeners from '../../json/genres.json';
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";
import { Notify } from 'notiflix';


let page = 1;






ref.form.addEventListener('submit', renderSearchFilms);



async function renderSearchFilms(e) {
	e.preventDefault();
	searchQuery = ref.input.value.trim();
	let totalResults = 0;

  if (searchQuery === '') {
    return Notify.warning('Searching starts after providing data to search.');
  } else if (totalResults.length === 0 ) {
	  return Notify.warning('no matches');
  } else {
	  searchQuery;
  }
  ref.input.value = '';
	renderSearchFilms();
	

    try {
    	const promis = await fetchSearchedFilms(searchQuery, page);
		 const data = promis.data.results;
			totalResults = promis.data.total_results;
		 console.log(totalResults);
		 clearGallery();
		 createMarkUp(data);
        
    } catch (error) {
        console.log(error)
    }
   
}





function createMarkUp(data) {
  const markUp = data.map(item => {
    const defaultPicture = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
		const { title, poster_path = {defaultPicture}, release_date, genre_ids } = item;
		const filmGenre = getGeners(allGeners, genre_ids)
		console.log(filmGenre);
		
		
		const size = 'w500';
		let baseImafge = `https://image.tmdb.org/t/p/${size}${poster_path}`;
		const normalizeDate = release_date.split('-')[0];
		return `
      <li class="photo__card">
          <a href="${baseImafge}">
            <img src="${baseImafge !== `https://image.tmdb.org/t/p/${size}${poster_path}` ? defaultPicture : baseImafge}" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${title}</h2>
            <div class="movie__details">
            <p class="movie__genre">${filmGenre}</p>
            <p class="movie__year">2022>${normalizeDate !== release_date.split('-')[0] ? "unknown date" : normalizeDate}</p>
          </div>
          </div>
      </li>
    </ul>
  </div>`;

	}).join('');
	ref.gallery.insertAdjacentHTML('beforeend', markUp);
}

function clearGallery() {
	ref.gallery.innerHTML = '';
}


function getGeners(allGenres, idGenres) {
  let newArray = [];
     allGenres.map(el => {
    if (idGenres.includes(el.id)) {
      newArray.push(el.name);
    }
     });
  if (newArray.length > 3) {
    newArray = newArray.slice(0, 2).join(', ')
  }
  
  return newArray;
}
  
 
 
	
	


