export const checkoutForm = () => {
    if (document.querySelector('.checkout-form')) {
        const checkoutTop = document.querySelectorAll('.checkout-form__top');

        checkoutTop.forEach((item) => {
            item.addEventListener('click', () => {
                const list = item.closest('.checkout-form__list')

                let button = null;

                for (let i = 0; i < item.childNodes.length; i++) {
                    if (item.childNodes[i].className == "checkout-form__collapse") {
                        button = item.childNodes[i];
                        break;
                    }
                }

                list.classList.toggle('checkout-form__list--collapsed')

                if (list.classList.contains('checkout-form__list--collapsed')) {
                    console.log(true)
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
        const anchors = document.querySelectorAll('.checkout-form__next');
        anchors.forEach(el => {
            el.addEventListener('click', function (e) {
                const blockId = el.getAttribute('data-goto').substr(1);
                const block = document.getElementById(blockId);
                block.classList.remove('checkout-form__list--collapsed');
            });
        });
    };

    if (document.querySelector('.checkout-payment__button')) {
        const payButton = document.querySelector('.checkout-payment__button')
        payButton.addEventListener('click', () => {
            const list = document.querySelectorAll('.checkout-form__list');
            list.forEach(item => {
                item.classList.remove('checkout-form__list--collapsed')

                const buttons = document.querySelectorAll('.checkout-form__collapse')
                buttons.forEach(button => {
                    button.setAttribute('aria-label', 'Close block');
                    button.setAttribute('aria-expanded', 'true');
                })
            });
        });
    };
};