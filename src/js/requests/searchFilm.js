
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";

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
        backImgPost: item.poster_path,
        filmId: item.IdleDeadline,
        ganerId: item.genre_ids,
        

    }))
    console.log(cardEle);
}

