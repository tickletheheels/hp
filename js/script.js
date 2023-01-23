$(document).ready(function(){




  $(".menu > li > a[href^='#']").click(function(){
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
});

  $(".menupg").hide();

  $(".menu").click(function() {
    $(".menupg").fadeIn();
  });

  $(".bi-x-lg ").click(function() {
    $(".menupg").fadeOut();
  });

  $('.depth2').hide();

  $('.depth1 li:nth-child(2)').click(function () {
    $('.depth2').stop().fadeToggle();
  });

  AOS.init();
});