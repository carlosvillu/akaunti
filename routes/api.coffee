categories = [
  {id: 1, name: 'undefined'},
  {id: 2, name: 'comida'},
  {id:3, name: 'varios'}
]



# GET /api/movements 
exports.allMovements = (req, res) ->
  res.json req.session.movements.movements

exports.allCategories = (req, res) ->
  res.json categories
