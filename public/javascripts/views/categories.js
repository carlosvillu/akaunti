define(function(require){

  var categoriesTemplate = require('text!templates/categories.tpl'), 
      Categories = require('collections/categories'),
      Category = require('models/category'),
      ViewCategory = require('views/category'),
      _ = require('underscore'),
      BB = require('backbone');


  var CategoriesView = BB.View.extend({
    collection: new Categories(),
    el: $('#main-container'),

    initialize: function(){
      _.bindAll(this, 'render', 'addAll', 'addOne', 'addNew', 'hideModal');
      this.collection.bind('add', this.render);
      this.collection.bind('reset', this.render);
      this.collection.fetch();
    },

    render: function(){
      var compiled = _.template(categoriesTemplate);
      $('#main-container').html(compiled({movements: this.collection.length}));
      $(document).delegate('.formButton', 'click', this.hideModal);
      this.addAll();
      return this;
    },

    hideModal: function(){
      console.log('Hidden');
      $('#form-new-category').modal('hide');
      this.collection.add({id: this.collection.length+1, name: $('#new_category_name').val()});
      //this.addOne(new Category({id: this.collection.length+1, name: $('#new_category_name').val()}));
    },

    addNew: function(){
      
    },

    addAll: function(){
      _.each(this.collection.models, this.addOne);
    },

    addOne: function(model){
      var viewCategory = new ViewCategory({model: model});
      viewCategory.render();
      document.getElementById('categories_list').innerHTML += viewCategory.el.innerHTML;
    }
  });
  return CategoriesView;
});
