export const checkoutForm = () => {
    if (document.querySelector('.checkout-form')) {
        const formButtonAll = document.querySelectorAll('.checkout-form__collapse');
        const checkoutList = document.querySelector('.checkout-form__list');

        formButtonAll.forEach((button) => {
            button.addEventListener('click', () => {
                button.closest('.checkout-form__list').classList.toggle('checkout-form__list--collapsed')

                if (button.closest('.checkout-form__list').classList.contains('checkout-form__list--collapsed')) {
                    button.setAttribute('aria-label', 'Open block');
                    button.setAttribute('aria-expanded', 'false');
                } else {
                    button.setAttribute('aria-label', 'Close block');
                    button.setAttribute('aria-expanded', 'true');
                };
            });
        });
    };

    if (document.querySelector('.checkout-form__next')) {
        const anchors = document.querySelectorAll('.checkout-form__next')
        anchors.forEach(el => {
            el.addEventListener('click', function (e) {
                const blockId = el.getAttribute('href').substr(1)
                const block = document.getElementById(blockId)
                block.classList.remove('checkout-form__list--collapsed')
            })
        })
    }
};