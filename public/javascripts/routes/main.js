define(['views/movementsView', 'views/categories', 'backbone'], function(MovementsView, CategoriesView, BB){
  var Workspace = BB.Router.extend({
    routes: {
      'expenses-vs-income': 'main',
      'categories': 'categories',
      'new-categorie': 'newCategories'
    },

    main: function(){
      console.log('#Main');
      var movementsView = new MovementsView();
    },

    categories: function(){
      console.log('#categories');
      var categoriesView = new CategoriesView();
    },

    newCategories: function(){
      console.log('#newCategories');
    }
  });
  return Workspace;
});
