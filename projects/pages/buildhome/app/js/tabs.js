$('.accordion').click(function() {
  $('.open ~ .accordion-content')
    .toggleClass('hidden');

  $('.open')
    .removeClass('open')
    .addClass('closed');

  $(this).siblings()
    .toggleClass('hidden');
  $(this)
    .removeClass('closed')
    .addClass('open');
});
