define(function(require){
  var categoryTemplate = require('text!templates/category.tpl'),
      _ = require('underscore'),
      BB = require('backbone');
  var CategoryView = BB.View.extend({
    
    el: document.createElement('li'),

    initialize: function(){
      _.bindAll(this, 'render');
    },

    render: function(){
      var compile = _.template(categoryTemplate);
      this.el.innerHTML = compile(this.model.toJSON());
    }
  });
  return CategoryView;
});
