# GET /api/movements 
exports.allMovements = (req, res) ->
  res.json req.session.movements
