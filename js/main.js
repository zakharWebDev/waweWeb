$(function () {
  $('.menu__btn, #menu a').on('click', function(){
    $('ul.menu__list').toggleClass('active')
  });

  const mixer = mixitup('.gallery__content', {
    animation: {
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    }
  });
  $('[data-fancybox]').fancybox({
    toolbar  : false,
    smallBtn : true,
    iframe : {
        preload : false
    }
  });
  $('.blog__slider-inner').slick({
    dots: true,
    arrows: false
  });


  // Плавный скролл start
  $("#menu a, .header__arrow").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 80;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
  // Плавный скролл end
  $(window).on('scroll', function(){
    let h = $(window).scrollTop();
    if(h > 0){
      $('.header__top').addClass('active')
    }
    else{
      $('.header__top').removeClass('active')
    }
  });
});

