import {ref} from '../references/ref'
import Swiper, { EffectCoverflow, Navigation } from 'swiper';

  // import styles bundle
import 'swiper/swiper.scss';

new Swiper('.swiper', {
    modules: [Navigation, EffectCoverflow],
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    spaceBetween: 100,
    loop: true,
    speed: 500,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

  });

ref.studentsModalOpenBtnRef.addEventListener('click', (e) => {
    e.preventDefault()
    openStudentsModal()
})

ref.backdropRef.addEventListener('click', (e) => {
if (e.target === ref.backdropRef) {
    closeStudentsModal()
    }
})

ref.studentsModalCloseBtnRef.addEventListener('click', () => {
    closeStudentsModal()
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        closeStudentsModal()
    }
})


function openStudentsModal() {
    ref.bodyRef.classList.contains('dark-theme') ?
    ref.studentsModal.classList.add('students-modal-dark-theme') :
    ref.studentsModal.classList.remove('students-modal-dark-theme')
    
    ref.studentsModal.classList.remove('students-modal-close')
    ref.backdropRef.classList.remove('is-hidden')
    
}
function closeStudentsModal() {
    ref.studentsModal.classList.add('students-modal-close')
    ref.backdropRef.classList.add('is-hidden')
}

