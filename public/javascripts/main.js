// Filename: main.js
//
// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    text: 'libs/require/text'
  }

});

require(['routes/main', 'backbone'], function(Workspace, BB){
  var workspace = new Workspace();
  BB.history.start();
  workspace.navigate('expenses-vs-income', true);
});
