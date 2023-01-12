
import allGeners from '../../json/genres.json';
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";
import { Notify } from 'notiflix';


let page = 1;
let searchQuery = '';





ref.form.addEventListener('submit', onCLickSubmit);

function onCLickSubmit(e) {
	e.preventDefault();
	
	searchQuery = ref.input.value.trim();
	  if (searchQuery === '') {
    return Notify.warning('Searching starts after providing data to search.');
	}; 
	ref.input.value = '';
	renderSearchFilms()

}

async function renderSearchFilms() {
	// let totalResults = 0;
    try {
    	const promis = await fetchSearchedFilms(searchQuery, page);
		 const data = promis.data.results;
		 if (data.length === 0) {
			 return Notify.warning('no matches found');
		 }
		 
		 clearGallery();
		 createMarkUp(data);
		renderSearchFilms();
    } catch (error) {
        console.log(error)
	 }
	
	
	
   
}





function createMarkUp(data) {
  const markUp = data.map(item => {
    	const defaultPicture = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
		const { title, poster_path, release_date, genre_ids } = item;
	  const filmGenre = getGeners(allGeners, genre_ids)
	  let link = `https://image.tmdb.org/t/p/w500null`;
		let baseImafge = `https://image.tmdb.org/t/p/w500${poster_path}`;
		const normalizeDate = release_date.slice(0, 4);
		return `
      <li class="photo__card">
          <a href="${baseImafge}">
            <img src="${baseImafge !== link ? baseImafge : defaultPicture}" alt="" "loading="lazy" class="movie__image"/>
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

	}).join('');
	ref.gallery.insertAdjacentHTML('beforeend', markUp);
}

function clearGallery() {
	ref.gallery.innerHTML = '';
}


function getGeners(allGenres, idGenres) {
  let newArray = [];
     allGenres.filter(el => {
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
  
 
 
	
	


