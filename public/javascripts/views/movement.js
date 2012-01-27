define(['text!templates/movement.tpl', 'models/movement', 'underscore', 'backbone'], function(templateMovement, Movement, _, BB){
  var MovementView = BB.View.extend({
    el: document.createElement('tr'),

    initialize: function(){
      _.bindAll(this, 'render');
    },

    render: function(){
      var compiled = _.template(templateMovement);
      $(this.el).html(compiled(this.model.toJSON()));
      return this;
    }

  });

  return MovementView;
});
