app.storage = {

  information: [],

  getDishes: function(){
    $.getJSON('/dishes', function(result) {
      app.storage.information = result;
      console.log(app.storage.information);

      //draw markers of the dishes on the map accoring to their countries
      app.visual.drawPoints();

    });
  }

};