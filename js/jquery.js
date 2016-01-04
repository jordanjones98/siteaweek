$(document).ready(function(){
  $("button").click(function(){
    $('html,body').animate({
        scrollTop: $(".join").offset().top},
        'slow');
  });
});
