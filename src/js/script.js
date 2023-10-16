
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

  // アコーディオン
  $(function () {
    $('.js-accordion-Q').on('click', function () {
    //nextは次の要素を取得する、今回はクリック要素の次の要素にis-showクラスをつけている
      $(this).next().toggleClass('is-open');
      //クリックした要素自体にもclass付与
      $(this).toggleClass('is-active');
    });
  });





  // お問い合わせフォーム(googleフォームへ)
  $(document).ready(function () {

    $('#contact-form').submit(function (event) {
      var formData = $('#contact-form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSetl5MkQNJqd5taXbkAvVWClb07kfeLC3Zb5xKdyYnQSfNuMw/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".js-submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });
  });

  // 必須項目入力が無いと送信できないようにする
  $(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#contact-form input,#contact-form textarea').on('change', function () {
      if ( //もしinputの中が空だった時
        $('#contact-form input[type="text"]').val() !== "" &&
        $('#contact-form input[type="email"]').val() !== "" &&
        $('#contact-form input[type="checkbox"]').is(':checked') &&
        $('#contact-form input[type="radio"]').is(':checked')
      ) {
        $submitBtn.prop('disabled', false);//falseを返し送信させない
      } else {
        $submitBtn.prop('disabled', true);//trueを返し送信させる
      }
    });
  });//送信disabled閉じタグ

}); //JS閉じタグ
