import './_libs';
import './_templates';
import './_components';
import './_vendor';
import './_swiper';
import './_catalog-page';
import './_checkout-page';

if (document.querySelector('.graph-modal__add')) {
    const button = document.querySelector('.graph-modal__add')
    const more = document.querySelector('.graph-modal__more')

    button.addEventListener('click', () => {
        button.classList.toggle('graph-modal__add--active')
        more.classList.toggle('graph-modal__more--active')
    })
}


