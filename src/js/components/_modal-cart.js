export const cartMore = () => {
    if (document.querySelector('.graph-modal__add')) {
        const products = document.querySelectorAll('.graph-modal__product')
        products.forEach(product => {
            const button = product.querySelector('.graph-modal__add')
            const more = product.querySelector('.graph-modal__more')

            button.addEventListener('click', () => {
                button.classList.toggle('graph-modal__add--active')
                more.classList.toggle('graph-modal__more--active')
            })
        });
    };
};