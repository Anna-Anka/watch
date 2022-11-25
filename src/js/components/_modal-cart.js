export const cartMore = () => {
    if (document.querySelector('.graph-modal__add')) {
        const button = document.querySelector('.graph-modal__add')
        const more = document.querySelector('.graph-modal__more')

        button.addEventListener('click', () => {
            button.classList.toggle('graph-modal__add--active')
            more.classList.toggle('graph-modal__more--active')
        })
    }
}