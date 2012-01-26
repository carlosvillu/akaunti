define(['collections/movements', 'underscore', 'backbone'], function(Movements, _, BB){
  var MovementsView = BB.View.extend({
    collection: new Movements(),
    
    id: 'pie', 


    initialize: function(){
      this.collection.bind('reset', this.render);
      this.collection.fetch();
    },

    render: function(){
      console.log('Collection reset in the view');
      console.log(google);
    }
  });

  return MovementsView;
});
