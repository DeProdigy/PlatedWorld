$(document).ready(function($) {

  //create a map when dom loads
  google.maps.event.addDomListener(window, 'load', app.visual.initialize);

  //after map exists, pull down the information and load it into storage
  //after call drawPoints function
  app.storage.getDishes();

  $('.layover').on('click', function(event) {
    event.stopPropagation();
    // Close layover
    if (event.target == this) {
      $(this).addClass('hidden');
    }
  });

  $('.card').on('click', 'button', function(event) {
    event.preventDefault();
    // Submit like
    var id = $(this).parent().attr('id');
    app.storage.postLike(id);
  });

});