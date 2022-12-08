export const smoothScroll = () => {
    const menuLinks = document.querySelectorAll('a[data-goto]')

    if (menuLinks.length > 0) {

        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        })

        function onMenuLinkClick(e) {
            const menuLink = e.target
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                })
                e.preventDefault()
            }
        }

        // function onMenuLinkClick(e) {
        //     const menuLink = e.target
        //     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        //         const gotoBlock = document.querySelector(menuLink.dataset.goto)
        //         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__bottom').offsetHeight

        //         window.scrollTo({
        //             top: gotoBlockValue,
        //             behavior: "smooth"
        //         })
        //         e.preventDefault()
        //     }
        // }
    }
}