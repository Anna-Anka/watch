export const checkoutCart = () => {
    if (document.querySelector('.checkout-cart__button')) {
        const checkoutButton = document.querySelector('.checkout-cart__button');
        const checkoutContent = document.querySelector('.checkout-cart__content');

        checkoutButton.addEventListener('click', () => {
            checkoutButton.closest('.checkout-cart__content').classList.toggle('checkout-cart__content--collapsed')

            console.log('dsada')

            if (checkoutContent.classList.contains('checkout-cart__content--collapsed')) {
                checkoutButton.setAttribute('aria-label', 'Open list');
                checkoutButton.setAttribute('aria-expanded', 'false');
            } else {
                checkoutButton.setAttribute('aria-label', 'Close list');
                checkoutButton.setAttribute('aria-expanded', 'true');
            };
        });
    };
}