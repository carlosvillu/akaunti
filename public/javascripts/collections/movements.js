define(['models/movement', 'underscore', 'backbone'], function(Movement, _, BB){
  var Movements = BB.Collection.extend({
    url: 'api/movements',
    model: Movement,
    initialize: function(){
      this.bind('reset', this.render);
    },

    render: function(){
      console.log('Models', this.models);
    }
  });

  return Movements;
});
