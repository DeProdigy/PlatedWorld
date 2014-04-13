$(document).ready(function($) {

  //create a map when dom loads
  google.maps.event.addDomListener(window, 'load', app.visual.initialize);

  //after map exists, pull down the information and load it into storage
  //after call drawPoints function
  app.storage.getDishes();

});