app.visual = {

  initialize: function() {
    var styles = [
      {
        stylers: [
          { hue: "#CE0000" },
          { saturation: -40 }
        ]
      }
      // ,{
      //   featureType: "road",
      //   elementType: "geometry",
      //   stylers: [
      //     { lightness: 50 },
      //     { visibility: "simplified" }
      //   ]
      // },{
      //   featureType: "road",
      //   elementType: "labels",
      //   stylers: [
      //     { visibility: "off" }
      //   ]
      // }
    ];

    var mapOptions = {
      center: new google.maps.LatLng(20, -20),
      zoom: 3,
      styles: styles
    };
    // debugger;
    app.visual.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  },

  drawPoints: function() {
    geocoder = new google.maps.Geocoder();

    function geoLocate(country, id) {
      geocoder.geocode( { 'address': country }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
          //center the map over the last marker
          // app.visual.map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: app.visual.map,
            position: results[0].geometry.location,
            id: id,
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
  },

  showCard: function(id) {
    var dish = app.storage.information[id];
    $('.layover').removeClass('hidden');
    $card = $('.card');
    console.log(dish);
    $card.html('<h2 class="name">' + dish.name + '</h2>' +
              '<img class="image" src="' + dish.image_url + '">' +
              '<p class="description">' + dish.description + '</p>');
  }

};

