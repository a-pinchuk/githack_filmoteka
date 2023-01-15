import { ref } from './references/ref';

export function loaderHide() {
  setTimeout(() => {
    ref.loader.style.display = 'none';
  }, 0);
}
