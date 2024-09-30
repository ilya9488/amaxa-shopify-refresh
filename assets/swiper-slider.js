
window.addEventListener('DOMContentLoaded', function () {
    swiperSliderInit();
    swiperProductPage();
})

function swiperSliderInit() {
  const sliders = document.querySelectorAll('.swiper-container')

  sliders.forEach(slider => {
    const columns = slider.dataset.columns ?? 3;
    const centered = slider.dataset.centered === 'align_middle';
    const slidesWrap = slider.querySelector('.swiper-wrapper');
    const slides = slidesWrap.querySelectorAll('.swiper-slide');
    const slidesCount = slider.querySelector('.swiper-wrapper').children.length;

    let mobile_slider_enabled = true;
    if (slidesWrap.classList.contains('swiper-disavbled-mobile-if-2-slides')) {
      mobile_slider_enabled = false;
    } else {
      mobile_slider_enabled = true;
    }

    if (centered && slidesCount < columns) {
      slider.querySelector('.swiper-wrapper').classList.add('align_middle');
    }
    
    function swiperHandleResize() {
      const mediaQuery = window.matchMedia('(max-width: 600px)');
      if (mediaQuery.matches) {
        slider.querySelector('.swiper-wrapper').classList.remove('align_middle');
        if(mobile_slider_enabled === false){
          slidesWrap.style.flexDirection = 'column';
          slidesWrap.style.alignItems = 'center';
          slides.forEach(slide => { slide.style.width = '100%'; slide.style.maxWidth = '400px'; })
        }
      } else {
        if(mobile_slider_enabled === false){
          slidesWrap.style.flexDirection = 'row';
        }
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
            enabled: mobile_slider_enabled, /* (!) */
            slidesPerView: mobile_slider_enabled ? 1 : 0, /* (!) */
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

function swiperProductPage() {

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    wrapperClass: 'product-swiper-wrapper',
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "horizontal",
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
        direction: "vertical",
      },
    }
  });
  var galleryTop = new Swiper(".gallery-top", {
    direction: "horizontal",
    wrapperClass: 'product-swiper-wrapper',
    spaceBetween: 10,
      navigation: {
        nextEl: ".product-swiper-button-next",
        prevEl: ".product-swiper-button-prev",
      },
    thumbs: {
      swiper: galleryThumbs
    }
  });
}

// product image zoom
function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}