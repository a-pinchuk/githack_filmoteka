
import allGeners from '../../json/genres.json';
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";


let page = 1;
console.log(allGeners);




ref.form.addEventListener('submit', clickOnSubmit);
function clickOnSubmit(e) {
	e.preventDefault();
	
	content = ref.input.name.value;
	ref.input.value = '';
	renderSearchFilms();
	
    
    
}

async function renderSearchFilms() {
    try {
    const promis = await fetchSearchedFilms(content, page);
		 const data = promis.data.results;
		 clearGallery();
		 createMarkUp(data);
        
    } catch (error) {
        console.log(error)
    }
   
}





function createMarkUp(data) {
	const markUp = data.map(item => {
		const { title, poster_path, release_date, genre_ids } = item;
		const v = getGeners(allGeners, genre_ids)
		console.log(v);
		
		
		const size = 'w500';
		let baseImafge = `https://image.tmdb.org/t/p/${size}${poster_path}`;
		const defaultPicture = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
		const normalizeDate = release_date.split('-')[0];
		return `
      <li class="photo__card">
          <a href="${baseImafge}">
            <img src="${baseImafge !== `https://image.tmdb.org/t/p/${size}${poster_path}` ? defaultPicture : baseImafge}" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${title}</h2>
            <div class="movie__details">
            <p class="movie__genre">${genre_ids}</p>
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


// function getGeners(allGenres, idGenres) {
// 	return allGenres.forEach(item => {
// 		fo
// 	})
// 	}

