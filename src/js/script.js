
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // 製品一覧：スワイパー
  const swiper = new Swiper('.js-products-swiper', {
    // Optional parameters
    loop: true,
    speed: 4000,
    // autoplay: {
    //   delay: 3000,
    // },
    allowTouchMove: true,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 4, // 中央に3枚のカードを表示
        spaceBetween: 40, // カード間のスペース
        centeredSlides: true, // 中央にカードを配置
      }
    },







  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });//products__swiper閉じタグ


}); //JS閉じタグ
