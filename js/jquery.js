$(document).ready(function(){
  $(".joinnow").click(function(){
    $('html,body').animate({
        scrollTop: $(".join").offset().top},
        'slow');
  });
  $(".bioimg").mouseenter(function(){
    $(".biotxt").fadeIn();
  });
  $(".bioimg").mouseleave(function(){
    $(".biotxt").fadeOut();
  });
});
