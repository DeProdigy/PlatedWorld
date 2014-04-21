app.storage = {

  information: [],

  likes: [],

  getDishes: function() {
    $.getJSON('/dishes', function(result) {
      app.storage.information = result;

      //draw markers of the dishes on the map accoring to their countries
      app.visual.drawPoints();

    });
  },

  postLike: function(id) {
    var dishId = parseInt(id);
    var likesArray = this.likes;

    if (likesArray.indexOf(dishId) != -1) {
      console.log('already liked!');
    } else {
      console.log('just liked!');
      likesArray.push(dishId);

      $.ajax({
        type: "POST",
        url: "/likes",
        data: { dishId: dishId}
      }).done(function(result){
        console.log(result.status);
      });
    }
  }
};


