export const smoothScroll = () => {
    const menuLinks = document.querySelectorAll('a[data-goto]');
    const body = document.body

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });

        const disableScroll = () => {
            body.style.position = 'relative';
            let pagePosition = window.scrollY;
            body.dataset.position = pagePosition;
            body.style.top = -pagePosition + 'px';
        }

        const enableScroll = () => {
            body.style.position = 'static';
            let pagePosition = parseInt(body.dataset.position, 10);
            body.style.top = 'auto';
            window.scroll({top: pagePosition, left: 0})
            body.removeAttribute('data-position')
        }

        function onMenuLinkClick(e) {
            const menuLink = e.target;

            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);

                const delay = (delayInms) => {
                    return new Promise(resolve => setTimeout(resolve, delayInms));
                }

                disableScroll()

                const sample = async () => {

                    let delayres = await delay(350);

                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth"
                    });

                    e.preventDefault();
                }

                sample();

                setTimeout(() => enableScroll())
            }
        }
    }
}

