$('.input').mouseover(function () {
  // If we have already hint after clicking button, delete it:
  $('.hint').remove();

  var title = $(this).attr('title');
  $(this).removeAttr('title');
  $(this).data('data-title', title);
  $(this).closest('li').append('<span class="hint">' + title + '</span>');
});

$('.input').mouseout(function () {
  $('.hint').remove();
  var dataTitle = $(this).data('data-title');
  $(this).removeAttr('data-title');
  $(this).attr('title', dataTitle);
});


$('.button').click(function () {
  // If we have already hint after clicking button, delete it:
  $('.hint').remove();

  $('.input').each(function () {
    var title = $(this).attr('title');
    $(this).closest('li').append('<span class="hint">' + title + '</span>');
  });
  return false;
});