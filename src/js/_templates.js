import "./templates/fix-fullheight"


// * Реализация бургер-меню
import { burger } from './templates/burger';
burger()

// * Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal('modal');

if (document.querySelector('.btn-thank')) {
    const btnThank = document.querySelector('.btn-thank')
    btnThank.addEventListener('click', () => {
        const modal = new GraphModal('modal').open('thank');
        btnThank.classList.add('btn-thank--active')

        const modalCartContainer = document.querySelector('.graph-modal__container--cart')
        const modalBody = document.querySelector('.graph-modal')
        const modalContainerThank = document.querySelector('.graph-modal__container--thank')

        modalCartContainer.classList.add('graph-modal__container--lock')

        modalBody.addEventListener('click', (e) => {
            if (e.target !== modalContainerThank && !modalContainerThank.contains(e.target)) {
                btnThank.classList.remove('btn-thank--active')
                modalCartContainer.classList.remove('graph-modal__container--lock')
            }
        });
    });

    // btnThank.click();
}

// * Подключение choices.js
import Choices from "choices.js";

if (document.querySelector('.products__sort')) {
    const defaultSelect = () => {
        const element = document.querySelector('.products__sort');
        const choices = new Choices(element, {
            searchEnabled: false,
            sorter: () => {},
        });
    }

    defaultSelect()
}

if (document.querySelector('.checkout-basic__select')) {
    const defaultSelect = () => {
        const element = document.querySelector('.checkout-basic__select');
        const choices = new Choices(element, {
            searchEnabled: false,
            sorter: () => {},
        });
    }

    defaultSelect()
}

// * Подключение плавного скролла
import { smoothScroll } from "./templates/smooth-scroll";
smoothScroll()