define(['models/movement', 'backbone'], function(Movement, BB){
  var Movements = BB.Collection.extend({
    url: 'api/movements',
    model: Movement
  });

  return Movements;
});
