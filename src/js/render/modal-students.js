import {ref} from '../references/ref'
import Swiper, { Navigation } from 'swiper';

  // import styles bundle
import 'swiper/swiper-bundle.css';

new Swiper('.swiper', {
    modules: [Navigation],

    spaceBetween: 100,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

  });

ref.studentsModalOpenBtnRef.addEventListener('click', (e) => {
    e.preventDefault()
    ref.studentsModal.classList.remove('students-modal-close')
    ref.backdropRef.classList.remove('is-hidden')
})

ref.backdropRef.addEventListener('click', (e) => {
if (e.target === ref.backdropRef) {
        ref.studentsModal.classList.add('students-modal-close')
        ref.backdropRef.classList.add('is-hidden')
    }
})

ref.studentsModalCloseBtnRef.addEventListener('click', () => {
    ref.studentsModal.classList.add('students-modal-close')
    ref.backdropRef.classList.add('is-hidden')
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        ref.studentsModal.classList.add('students-modal-close')
        ref.backdropRef.classList.add('is-hidden')
    }
})
