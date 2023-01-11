
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";

const defaultPic = 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png'

let page = 1;



ref.form.addEventListener('submit', clickOnSubmit);
function clickOnSubmit(e) {
    e.preventDefault();
    content = ref.input.value;
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
    const cardEle = cardValue.map(item => ({
        title: item.title,
        backImgPost: defaultImage(item.poster_path),
        filmId: item.IdleDeadline,
        ganerId: item.genre_ids,
        

    }))
    console.log(cardEle);
}

function defaultImage(poster) {
    if (poster) {
        return `https://image.tmdb.org/t/p/w500/${poster}`;
    } else {
        return defaultPic;
    }
}
