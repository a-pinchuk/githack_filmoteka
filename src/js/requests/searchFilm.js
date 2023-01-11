
import allGeners from '../../json/genres.json';
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";
import { Notify } from 'notiflix';


let page = 1;






ref.form.addEventListener('submit', clickOnSubmit);


function clickOnSubmit(e) {
  e.preventDefault();
  
  if (ref.input.value === '') {
    return Notify.warning('Searching starts after providing data to search.');
  } else {
    content = ref.input.value.trim()
  }
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
    const defaultPicture = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'
		const { title, poster_path = {defaultPicture}, release_date, genre_ids } = item;
		const filmGenre = getGeners(allGeners, genre_ids)
		console.log(filmGenre);
		
		
		const size = 'w500';
		let baseImafge = `https://image.tmdb.org/t/p/${size}${poster_path}`;
		const normalizeDate = new Date(release_date).getFullYear();
		return `
      <li class="photo__card">
          <a href="${baseImafge}">
            <img src="${baseImafge !== `https://image.tmdb.org/t/p/${size}${poster_path}` ? defaultPicture : baseImafge}" alt="" "loading="lazy" class="movie__image"/>
          </a>
          <div class="movie__info">
            <h2 class="film__title">${title}</h2>
            <div class="movie__details">
            <p class="movie__genre">${filmGenre}</p>
            <p class="movie__year">2022>${normalizeDate !== new Date(release_date).getFullYear() ? "unknown date" : normalizeDate}</p>
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
  
 
 
	
	

// function compareGenresId(allGenres, filmGenre) {
//   let arrayOfGenres = [];

//   allGenres.forEach(el => {
//     if (filmGenre.includes(el.id)) {
//       arrayOfGenres.push(el.name);
//     }
//   });

//   if (arrayOfGenres.length > 3) {
//     arrayOfGenres = arrayOfGenres.splice(0, 3).join(', ') + ', Other';
//     return arrayOfGenres;
//   }

//   return arrayOfGenres.join(', ');
// }
