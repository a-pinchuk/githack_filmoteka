
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";
 
let IMG__URL = `https://image.tmdb.org/t/p/w500/`;

let page = 1;



ref.form.addEventListener('submit', clickOnSubmit);
function clickOnSubmit(e) {
    e.preventDefault();
    content = ref.input.name.value;
    renderSearchFilms();
    
    
}

async function renderSearchFilms() {
    try {
    const promis = await fetchSearchedFilms(content, page);
    const data = promis.data.results;
        console.log(data);
        makeMarkUpSearchFilm(data);
        
    } catch (error) {
        console.log(error)
    }
   
}


function makeMarkUpSearchFilm(cardValue) {
    const cardEle = cardValue.map(item => {
        const { title, poster_path, IdleDeadline, genre_ids } = item;
        
        
    })
    console.log(cardEle);

    
}


// function makeMarkUpSearchFilm(cardValue) {
//     const cardEle = cardValue.map(item => ({
        
//         title: item.title,
//         backImgPost: defaultImage(item.poster_path),
//         filmId: item.IdleDeadline,
//         ganerId: item.genre_ids,
        

//     }))
//     console.log(cardEle);
// }

function defaultImage(poster) {
    if (IMG__URL) {
        return  IMG__URL = `https://image.tmdb.org/t/p/w500/${poster}`;
    } else {
        return 'https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/enn-nenjai-thottaye-et00021963-24-03-2017-18-55-43.jpg';
    }
}

function createMarkUp() {
    const listElemeny =
     `
      <ul class="gallery__list">
    <li class="gallery__link"><a href="" class="gallery__link">
      <img src="" alt="">
      <div class="gallery__box">
        <h2 class="gallery__title">
          <div class="gallery__info">
                <p class="gallery__ganer">
                <p class="gallery__year"></p>
          </div>
     
          </p>
        </h2>
      </div>
    </a></li>
   </ul>
    `;
    ref.gallery.insertAdjacentHTML('beforeend', listElemeny);
}
createMarkUp();
function check(callback) {
    console.log(callback);
}
