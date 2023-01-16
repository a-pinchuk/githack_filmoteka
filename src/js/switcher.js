import { ref } from './references/ref';
export { darkmode };

const darkmode = JSON.parse(localStorage.getItem('darkmode'));

isSmthInLocalStorage();

document.querySelector('.checkbox').addEventListener('change', onChange);

function isSmthInLocalStorage() {
  if (darkmode) {
    ref.checkbox.checked = darkmode;
    document.querySelector('body').classList.toggle('dark-theme');
    document.querySelector('footer').classList.toggle('dark-theme__footer');
  }
}

function onChange(e) {
  e.target.checked
    ? document.querySelector('body').classList.add('dark-theme') ||
      document.querySelector('footer').classList.add('dark-theme__footer') ||
      ref.paginationRef.classList.add('pagination-btns-dark-theme')
    : document.querySelector('body').classList.remove('dark-theme') ||
      document.querySelector('footer').classList.remove('dark-theme__footer') ||
      ref.paginationRef.classList.remove('pagination-btns-dark-theme');

  localStorage.setItem('darkmode', JSON.stringify(e.target.checked));
}
