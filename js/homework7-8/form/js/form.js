$('.input').mouseover(function () {
  $(this).siblings('.hint').animate({
    opacity: 1
  }, 800);
});
$('.input').mouseout(function () {
  $(this).siblings('.hint').animate({
    opacity: 0
  }, 800);
});