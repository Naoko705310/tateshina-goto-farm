
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      closeDrawerMenu(); // メニューを閉じる関数を呼び出す
    } else {
      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
      // メニューが開いたときにスクロールを無効にする
      $('body').css('overflow', 'hidden');
    }
  });

  // ナビのリンクがクリックされたときの処理
  $('.sp-nav__link').on('click', function () {
    closeDrawerMenu(); // メニューを閉じる関数を呼び出す
    // ナビのリンクからhref属性を取得し、該当のセクションへスクロール
    var targetSection = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 500); // スクロールのアニメーション時間を調整
  });

  // メニューを閉じる関数
  function closeDrawerMenu() {
    $('.js-drawer-menu').fadeOut();
    $('.js-hamburger').removeClass('is-open');
    // メニューが閉じたときにスクロールを有効にする
    $('body').css('overflow', 'auto');
  }

  // メディアクエリを使用してPC幅を検出し、768pxを超えたときにメニューを閉じる
  $(window).resize(function () {
    if ($(window).width() > 768) {
      closeDrawerMenu(); // PC幅を超えたらメニューを閉じる
    }
  });

  // ページ読み込み時にもメディアクエリをチェックしてメニューを閉じる
  $(document).ready(function () {
    if ($(window).width() > 768) {
      closeDrawerMenu(); // ページ読み込み時にもPC幅を超えたらメニューを閉じる
    }
  });

  // 製品一覧：スワイパー
  const swiper = new Swiper('.js-products-swiper', {
    // Optional parameters
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 3000,
    },
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
  $(".js-accordion-Q").click(function() {
    // クリックしたアコーディオン要素の次の要素を取得
    var $accordionContent = $(this).next(".accordion-content");

    if ($accordionContent.length > 0) {
      // 他のアコーディオンを閉じる
      $(".js-accordion-Q").not(this).removeClass("is-active");
      $(".accordion-content").not($accordionContent).removeClass("is-open");

      // クリックしたアコーディオン要素にクラスを追加
      $(this).toggleClass("is-active");

      // クリックしたアコーディオンの次の要素にクラスを追加
      $accordionContent.toggleClass("is-open");
    }
  });//アコーディオン閉じる


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
