export const filtersFunction = () => {
    if (document.querySelector('.filters')) {
        const filtersButton = document.querySelector('.filters__open');
        const filtersContent = document.querySelector('.filters__content');

        filtersButton.addEventListener('click', () => {
            filtersContent.classList.toggle('filters__content--active');

            if (filtersContent.classList.contains('filters__content--active')) {
                filtersButton.setAttribute('aria-label', 'Close filters');
            };
        });
    };
};