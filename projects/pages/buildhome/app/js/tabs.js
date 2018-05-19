$('.closed').click(function() {
  $('.open ~ .accordion-content')
    .removeClass('visible')
    .addClass('hidden')

  $('.open')
    .removeClass('open')
    .addClass('closed');

  $(this).siblings()
    .removeClass('hidden')
    .addClass('visible')
  $(this)
    .removeClass('closed')
    .addClass('open');
});
