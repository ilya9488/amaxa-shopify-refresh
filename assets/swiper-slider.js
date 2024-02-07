
window.addEventListener('DOMContentLoaded', function () {
    swiperSliderInit()
})

function swiperSliderInit() {
  const sliders = document.querySelectorAll('.swiper-container')

  sliders.forEach(slider => {
    const columns = slider.dataset.columns ?? 3
    
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
        },
      });
  })
}