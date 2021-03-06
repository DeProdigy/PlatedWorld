app.visual = {

  initialize: function() {
    // create cutom map colors
    var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#BCD4DF"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#E94B35"}]},{"featureType":"poi","stylers":[{"color":"#E94B35"},{"lightness":-7}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#E94B35"},{"lightness":-28}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#E94B35"},{"visibility":"on"},{"lightness":-15}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#E94B35"},{"lightness":-18}]},{"elementType":"labels.text.fill","stylers":[{"color":"#2A3A42"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#E94B35"},{"lightness":-34}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#BCD4DF"},{"weight":0.8}]},{"featureType":"poi.park","stylers":[{"color":"#E94B35"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#BCD4DF"},{"weight":0.3},{"lightness":10}]}];

    var mapOptions = {
      center: new google.maps.LatLng(25, -15),
      zoom: 3,
      styles: styles
    };

    app.visual.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  },

  drawPoints: function() {
    geocoder = new google.maps.Geocoder();

    function geoLocate(country, id) {
      geocoder.geocode( { 'address': country }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

          var marker = new google.maps.Marker({
            map: app.visual.map,
            position: results[0].geometry.location,
            id: id,
            icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFECD4",
            animation: google.maps.Animation.DROP,
            draggable: false,
            raiseOnDrag: false,
            clickable: true,
            title: 'dish'
          });

          //add event listeners on every marker
          google.maps.event.addListener(marker, "click", function(){
            app.visual.showCard(this.id);
          });

        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }

      });
    }

    var information = app.storage.information;

    for (var i = 0; i < information.length; i++) {
      geoLocate(information[i].country, i);
    }

    //preload images after setting the markers
    app.visual.preloadImages();
  },

  preloadImages: function() {
    var information = app.storage.information;

    for (var i = 0; i < information.length; i++) {
      var img = new Image();
      img.src = information[i].image_url;
    }
  },

  showCard: function(id) {
    var dish = app.storage.information[id];
    $('.layover').removeClass('hidden');
    $card = $('.card');
    $card.attr('id', id + 1);
    $card.css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(' + dish.image_url + ')');
    $card.html('<h2 class="name">' + dish.name + '</h2>' +
              '<p class="description">' + dish.description + '</p>' +
              '<button class="button">Would Love It</button>');
  }

};

