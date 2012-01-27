define(['views/movementsView', 'backbone'], function(MovementsView, BB){
  var Workspace = BB.Router.extend({
    routes: {
      'expenses-vs-income': 'main',
      'categories': 'categories',
      'new-categorie': 'newCategories'
    },

    main: function(){
      console.log('#Main');
      movementsView = new MovementsView({el: $('#chart')});
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
