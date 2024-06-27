
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
    
    function swiperHandleResize() {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      if (mediaQuery.matches) {
        slider.querySelector('.swiper-wrapper').classList.remove('align_middle');
      } else {
        if (centered && slidesCount < columns) {
          slider.querySelector('.swiper-wrapper').classList.add('align_middle');
        }
      }
    }
    swiperHandleResize();
    window.addEventListener('resize', swiperHandleResize);
    
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
          // when window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 600px
          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          // when window width is >= 990px
          990: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 1300px
          1300: {
            slidesPerView: columns,
            spaceBetween: 10
          }
        }
      });
  })
}