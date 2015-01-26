$(function() {
  $('#add-button').click(function(event) {
    event.preventDefault();
    $('#add-result').html(
      parseFloat($('#add-text-field').val()) + 2.5
    );
  });
});