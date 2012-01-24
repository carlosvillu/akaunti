define(['collections/Movements', 'backbone'], function(Movements, BB){
  var Workspace = BB.Router.extend({
    routes: {
      'expenses-vs-income': 'main',
      'categories': 'categories',
      'new-categorie': 'newCategories'
    },

    main: function(){
      console.log('#Main');
      var movements = new Movements();
      movements.fetch();
    },

    categories: function(){
      console.log('#categories');
    },

    newCategories: function(){
      console.log('#newCategories');
    }
  });
  return Workspace;
});
