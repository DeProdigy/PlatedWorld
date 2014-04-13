$(document).ready(function($) {

  //create a map when dom loads
  google.maps.event.addDomListener(window, 'load', app.map.initialize);

  //after map exists, pull down the information and load it into storage
  app.storage.getDishes();

});