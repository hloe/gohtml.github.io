$('.link').click(function () {
  $('.link').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('href');
  $(id)
    .removeClass('hidden');
  $(id).siblings('.container-text')
    .addClass('hidden');

  return false;
})