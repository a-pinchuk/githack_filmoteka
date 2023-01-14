import { createMarkUp } from '../render/renderSearchFilms';
import { fetchSearchedFilms } from '../api/fetch';
import { ref } from '../references/ref';
import { Notify } from 'notiflix';
import { PAGE } from '../api/api-vars';
import { renderPopularFilms } from '../render/renderPopularFilm';
import { loaderHide } from '../fetchAndRenderPopularFilm';
import Pagination from 'tui-pagination';

let searchQuery = '';
PAGE = 2;
ref.form.addEventListener('submit', onCLickSubmit);

function onCLickSubmit(e) {
  e.preventDefault();
	searchQuery = ref.input.value.trim();
	if (searchQuery === '') {
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
    const paginationData = promis.data;
    
    if (data.length === 0) {
      ref.alertMessage.textContent = 'Search result not successful. Enter the correct movie name and '
      return Notify.warning('Search result not successful. Enter the correct movie name and ');
    }
    ref.alertMessage.textContent = '';
    ref.loader.style.display = 'flex';
    clearGallery();
    
	 
	  paginationPage(paginationData);
	   createMarkUp(ref, data);
    loaderHide();
  } catch (error) {
    console.log(error);
  }
}




function clearGallery() {
  ref.galleryList.innerHTML = '';
}


// TUI pagination-------
// const data = 440;
// paginationPage(data);
function paginationPage(dataPag) {
	const container = document.getElementById('pagination');
	console.log(dataPag.page)
  const itemsPerPage = 20;
  const options = {
    totalItems: dataPag.total_results,
    itemsPerPage,
    visiblePages: 10,
	  centerAlign: false,
	        page: '<a href="#" class="tui-page-btn">{{page}}p</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
            moveButton:
                '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
                    '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</a>',
            disabledMoveButton:
                '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
                    '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</span>',
            moreButton:
                '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
                    '<span class="tui-ico-ellip">...</span>' +
                '</a>'
  };
	console.log(options.totalItems);
	
  const pagination = new Pagination(container, options);


	console.log(pagination);
	pagination.on('beforeMove', event => {
		dataPag.page = event.page;
		
	
		
		
	})
	
	pagination.movePageTo(0);
}
