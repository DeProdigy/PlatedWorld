app.storage = {

  information: [],

  getDishes: function(){
    $.getJSON('/dishes', function(result) {
      app.storage.information = result;
      console.log(app.storage.information);
    });
  }

};