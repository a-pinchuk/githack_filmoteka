import { createMarkUp } from '../render/renderSearchFilms';
import { fetchSearchedFilms } from '../api/fetch';
import { ref } from '../references/ref';
import { Notify } from 'notiflix';
import { PAGE } from '../api/api-vars';
import { renderPopularFilms } from '../render/renderPopularFilm';
import { loaderHide } from '../fetchAndRenderPopularFilm';


let searchQuery = '';
PAGE = 2;
ref.form.addEventListener('submit', onCLickSubmit);

function onCLickSubmit(e) {
  e.preventDefault();
	searchQuery = ref.input.value.trim();
	ref.loader.style.display = 'flex';
	if (searchQuery === '') {
		loaderHide();
   	ref.alertMessage.textContent = 'Searching starts after providing data to search';
	  Notify.warning('Searching starts after providing data to search.');
	  return;
	  

  }
  if (searchQuery.length > 0) {
	  ref.alertMessage.textContent = '';
	  ref.input.value = '';
    renderSearchFilms();

  } else {
    renderPopularFilms();
  }
}
async function renderSearchFilms() {
  try {
    
    const promis = await fetchSearchedFilms(searchQuery, PAGE);
    const data = promis.data.results;
    
    
    if (data.length === 0) {
		loaderHide();
      ref.alertMessage.textContent = 'Search result not successful. Enter the correct movie name and '
      return Notify.warning('Search result not successful. Enter the correct movie name and ');
    }
    ref.alertMessage.textContent = '';
    ref.loader.style.display = 'flex';
    clearGallery();
	
	   createMarkUp(ref, data);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}




function clearGallery() {
  ref.galleryList.innerHTML = '';
}



