define(['text!templates/categories.tpl', 'underscore', 'backbone'], function(categoriesTemplate, _, BB){
  var CategoriesView = BB.View.extend({
    initialize: function(){
      _.bindAll(this, 'render');
    },

    render: function(){
      $('#main-container').html(categoriesTemplate);
    }
  });
  return CategoriesView;
});
