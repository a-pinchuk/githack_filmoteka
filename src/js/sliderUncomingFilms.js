import Swiper, { EffectCoverflow, Navigation } from 'swiper';
 import {fetchUncomingFilms} from './api/fetch'
 import 'swiper/swiper.scss'

  
  const listFilm = document.querySelector('.swiper-wrapper')


  fetchUncomingFilms(1).then(res => {
    renderAnonce(res.data.results)
    const swiper = new Swiper('.card_slider', {
        modules: [Navigation],
        slidesPerView: 7,
        // spaceBetween: 30,
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        // spaceBetween: 100,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  })


function renderAnonce (data){
    const filmItem = data.map(({poster_path})=>{ 
        return `<li class="swiper-slide"><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Poster Film" class="img-slider"></li>`
    }).join('')

    listFilm.insertAdjacentHTML('beforeend', filmItem)
}