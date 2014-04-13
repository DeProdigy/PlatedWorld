app.map = {

  initialize: function() {
    var mapOptions = {
      center: new google.maps.LatLng(30, -20),
      zoom: 3
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }

};