define(['models/movement', 'underscore', 'backbone'], function(Movement, _, BB){
  var Movements = BB.Collection.extend({
    url: 'api/movements',
    model: Movement,
    tag: 'table',
    initialize: function(){
      this.bind('reset', this.render);
    },

    expenses: function(){
      return _.select(this.models, function(movement){
        return movement.get('amount') < 0;
      });
    },

    incomes: function(){
      return _.select(this.models, function(movement){
        return movement.get('amount') >= 0;
      });
    },

    expenses_amount: function(){
      return _.reduce(this.expenses(), function(memo, movement){
        return memo + Math.abs(movement.get('amount'));
      }, 0);
    },

    incomes_amount: function(){
      return  _.reduce(this.incomes(), function(memo, movement){
        return memo + movement.get('amount');
      }, 0);
    }
  });

  return Movements;
});
