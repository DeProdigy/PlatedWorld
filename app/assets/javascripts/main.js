$(document).ready(function($) {
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(30, -20),
      zoom: 3
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  getDishes();
});

function getDishes() {
  $.getJSON('/dishes', function(result) {
    console.log(result);
  });
}