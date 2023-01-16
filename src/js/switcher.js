import { ref } from './references/ref';

const darkmode = JSON.parse(localStorage.getItem('darkmode'));

isSmthInLocalStorage();

document.querySelector('.checkbox').addEventListener('change', onChange);

function isSmthInLocalStorage() {
  if (darkmode) {
    ref.checkbox.checked = darkmode;
    document.querySelector('body').classList.toggle('dark-theme');
  }
}

function onChange(e) {
  e.target.checked
    ? document.querySelector('body').classList.add('dark-theme')
    : document.querySelector('body').classList.remove('dark-theme');

  e.target.checked
    ? document.querySelector('footer').classList.add('dark-theme__footer')
    : document.querySelector('footer').classList.remove('dark-theme__footer');

  localStorage.setItem('darkmode', JSON.stringify(e.target.checked));
}
