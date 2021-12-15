if($(".homeContent_1 .slide").length>0){
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: "auto",
    autoplay: true,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
};