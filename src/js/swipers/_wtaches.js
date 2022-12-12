export const watchesSwiper = () => {
    if (document.querySelector('.watches__swiper')) {

        const allWatches = document.querySelectorAll('.watches__swiper')
        allWatches.forEach(watches => {
            const swiperWatches = new Swiper(watches, {

                loop: true,

                navigation: {
                    nextEl: watches.querySelector('.swiper-button-next'),
                    prevEl: watches.querySelector('.swiper-button-prev'),
                },

                breakpoints: {
                    577: {
                        slidesPerView: 'auto',
                        spaceBetween: 40,
                    },

                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                    }
                }
            });
        });
    };
};