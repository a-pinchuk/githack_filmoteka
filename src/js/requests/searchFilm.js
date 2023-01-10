
import { fetchSearchedFilms } from "../api/fetch";
import { ref } from "../references/ref";

let page = 1;
let content = '';


async function renderSearchFilms() {
    const data = await fetchSearchedFilms(content, page);
    console.log(data);
}

renderSearchFilms();

