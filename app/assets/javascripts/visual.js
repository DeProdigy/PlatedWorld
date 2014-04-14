app.visual = {

  initialize: function() {
    var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFFFFF"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#CE0000"}]},{"featureType":"poi","stylers":[{"color":"#CE0000"},{"lightness":-7}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#CE0000"},{"lightness":-28}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#CE0000"},{"visibility":"on"},{"lightness":-15}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#CE0000"},{"lightness":-18}]},{"elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#CE0000"},{"lightness":-34}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#FFFFFF"},{"weight":0.8}]},{"featureType":"poi.park","stylers":[{"color":"#CE0000"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#FFFFFF"},{"weight":0.3},{"lightness":10}]}];

    //simple red
    // var styles = [
    //   {
    //     stylers: [
    //       { hue: "#CE0000" },
    //       { saturation: -40 }
    //     ]
    //   }
    // ];

    var mapOptions = {
      center: new google.maps.LatLng(30, -20),
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
            icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|F1F4F5",
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

