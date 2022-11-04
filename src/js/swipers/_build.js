export const buildSwiper = () => {
    if (document.querySelector('.build-about__slider')) {
        const sliderMain = document.querySelector('.build-about__main');
        const sliderNav = document.querySelector('.build-about__small');

        let swiperSmall = new Swiper(sliderNav, {
            slidesPerView: 3,
            spaceBetween: 10,
            loopedSlides: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loop: true,
        });

        let swiperMain = new Swiper(sliderMain, {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 3,

            thumbs: {
                swiper: swiperSmall,
            },
        });
    };
};