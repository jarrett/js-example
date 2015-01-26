$(function() {
  $('#page-title-button').click(function(event) {
    event.preventDefault();
    $('h1').html($('#page-title-text-field').val());
  });
});