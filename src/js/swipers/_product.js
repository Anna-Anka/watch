export const productSwiper = () => {
    if (document.querySelector('.product__swiper')) {
        const slider = document.querySelector('.product__swiper');
        let mySwiper;

        function mobileSlider() {
            if (window.innerWidth <= 560 && slider.dataset.mobile == 'false') {
                mySwiper = new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });

                slider.dataset.mobile = 'true';
            }

            if (window.innerWidth > 560) {
                slider.dataset.mobile = 'false';
                if (slider.classList.contains('swiper-container-initialized')) {
                    mySwiper.destroy();
                }
            }
        }

        mobileSlider()

        window.addEventListener('resize', () => {
            mobileSlider();
        });
    };
};
