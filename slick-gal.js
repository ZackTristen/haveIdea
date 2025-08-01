document.addEventListener('DOMContentLoaded', function() {
    // Инициализация первого блока слайдеров
    const mainSlider1 = new Swiper('.col-lg-6:first-child .vertical-main-slider', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 10,
      mousewheel: true,
    });
    
    const navSlider1 = new Swiper('.col-lg-6:first-child .vertical-nav-slider', {
      direction: 'vertical',
      slidesPerView: 5,
      spaceBetween: 10,
      centeredSlides: false,
      slideToClickedSlide: true,
    });
    
    // Синхронизация первого блока
    mainSlider1.controller.control = navSlider1;
    navSlider1.controller.control = mainSlider1;
  
    // Инициализация второго блока слайдеров
    const mainSlider2 = new Swiper('.col-lg-6:last-child .vertical-main-slider', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 10,
      mousewheel: true,
    });
    
    const navSlider2 = new Swiper('.col-lg-6:last-child .vertical-nav-slider', {
      direction: 'vertical',
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: false,
      slideToClickedSlide: true,
    });
    
    // Синхронизация второго блока
    mainSlider2.controller.control = navSlider2;
    navSlider2.controller.control = mainSlider2;
  });