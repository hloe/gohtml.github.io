$('.input').mouseover(function () {
  // If we have already hint after clicking button, delete it:
  $('.hint').remove();

  var title = $(this).attr('data-title');
  $(this).closest('li').append('<span class="hint">' + title + '</span>');
});


$('.input').mouseout(function () {
  $('.hint').remove();
});

//

$('.button').click(function () {
  // If we have already hint after clicking button, delete it:
  $('.hint').remove();

  $('.input').each(function () {
    var title = $(this).attr('data-title');
    $(this).closest('li').append('<span class="hint">' + title + '</span>');
  });
  return false;
});