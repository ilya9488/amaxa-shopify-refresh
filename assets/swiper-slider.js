
window.addEventListener('DOMContentLoaded', function () {
    swiperSliderInit();
    swiperProductPage();
    productSlidesZoom();
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


function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
function productSlidesZoom() {
  // // Получаем все слайды
  // var slides = document.querySelectorAll(".swiper-container-wrapper .gallery-top .swiper-slide-wrap");
  
  // // Проходим по каждому слайду
  // slides.forEach(function(slide) {
  //   // Получаем размеры слайда
  //   var slideWidth = slide.offsetWidth;
  //   var slideHeight = slide.offsetHeight;
  
  //   // Инициализируем ImageZoom для каждого слайда
  //   new ImageZoom(slide, {
  //     // width: slideWidth,   // Подставляем ширину слайда
  //     // height: slideHeight, // Подставляем высоту слайда
  //     zoomWidth: slideWidth,
  //     offset: {
  //       vertical: 0,
  //       horizontal: 0
  //     },
  //     zoomPosition: "original"
  //   });
  // });
}