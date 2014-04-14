app.storage = {

  information: [],

  getDishes: function(){
    $.getJSON('/dishes', function(result) {
      app.storage.information = result;

      //draw markers of the dishes on the map accoring to their countries
      app.visual.drawPoints();

    });
  }

};