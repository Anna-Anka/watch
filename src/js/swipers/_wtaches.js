export const watchesSwiper = () => {
    if (document.querySelector('.watches__swiper')) {

        const allWatches = document.querySelectorAll('.watches__swiper')
        allWatches.forEach(watches => {
            const swiperWatches = new Swiper(watches, {
                slidesPerView: 'auto',
                slidesPerGroup: 3,
                spaceBetween: 40,
                loop: true,

                navigation: {
                    nextEl: watches.querySelector('.swiper-button-next'),
                    prevEl: watches.querySelector('.swiper-button-prev'),
                },
            });
        });
    };
};