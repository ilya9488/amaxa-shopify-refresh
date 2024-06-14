
window.addEventListener('DOMContentLoaded', function () {
    swiperSliderInit()
})

function swiperSliderInit() {
  const sliders = document.querySelectorAll('.swiper-container')

  sliders.forEach(slider => {
    const columns = slider.dataset.columns ?? 3;
    const centered = slider.dataset.centered === 'align_middle';
    const slidesCount = slider.querySelector('.swiper-wrapper').children.length;

    if (centered && slidesCount < columns) {
      slider.querySelector('.swiper-wrapper').classList.add('align_middle');
    }

    const mediaQuery = window.matchMedia('(max-width: 425px)');
    if (mediaQuery.matches) {
      slider.querySelector('.swiper-wrapper').classList.remove('align_middle');
    }
    
      new Swiper(slider, {
        slidesPerView: columns,
        spaceBetween: 0,
        slidesPerColumn: 1,
        watchOverflow: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 480px
          425: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }
      });
  })
}