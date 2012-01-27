define(['text!templates/movements.tpl', 'collections/movements', 'views/movement','underscore', 'backbone'], function(templateMovements, Movements, MovementView, _, BB){
  var MovementsView = BB.View.extend({
    collection: new Movements(),
    initialize: function(){
      _.bindAll(this, 'render');
      this.collection.bind('reset', this.render);
      this.collection.fetch();
    },

    render: function(){
      $('#main-container').html(templateMovements);
      this.plot();
      this.addAll();
      return this;
    },

    addAll: function(){
      _.each(this.collection.models, this.addOne);
    },

    addOne: function(model){
      var movementView = new MovementView({model: model});
      movementView.render();
      document.getElementById('movements-details').innerHTML += movementView.el.innerHTML;
    },

    plot: function(){
      $.plot($('#chart'), [{label: 'gastos', data: this.collection.expenses_amount()}, {label: 'ingresos', data: this.collection.incomes_amount()}],
      {
        series: {
            pie: { 
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 1,
                    formatter: function(label, series){
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                    },
                    background: { opacity: 0.8 }
                }
            }
        },
        legend: {
            show: false
        }
      });
    }
  });

  return MovementsView;
});
