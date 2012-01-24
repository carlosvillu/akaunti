# GET /application Show the main page

exports.showMain = (req, res) ->
  res.render 'application', {require: 'OK'}
