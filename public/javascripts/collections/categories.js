define(['models/category', 'underscore', 'backbone'], function(Category, _, BB){
  var Categories = BB.Collection.extend({
    url: 'api/categories',
    model: Category,
    initialize: function(){
      this.bind('reset', this.render);
    }
  });

  return Categories;
});
