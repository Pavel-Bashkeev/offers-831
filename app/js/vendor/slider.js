const slider = new Swiper('.swiper', {
  slidesPerView: 1,
  watchSlidesProgress: true,
  spaceBetween: 30,
  setWrapperSize:true,
  centeredSlides: true,
  loop:true,
  roundLengths: true,
  autoHeight:true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:'true'
  },
})