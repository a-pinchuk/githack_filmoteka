const scrollUp = document.querySelector('.scroll-up');
const scrollUpSirclePath = document.querySelector('.scroll-up__sircle-path');
const pathLength = scrollUpSirclePath.getTotalLength();
const offset = 400;

scrollUpSirclePath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSirclePath.style.transition = 'stroke-dashoffset 20ms';

scrollUp.addEventListener('click', onScrollUp);
window.addEventListener('scroll', onWindowScroll);

function onScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function onWindowScroll() {
  updateDashoffset();

  if (getScrollValue() >= offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
}

function getScrollValue() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function updateDashoffset() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getScrollValue() * pathLength) / height;

  scrollUpSirclePath.style.strokeDashoffset = dashoffset;
}
