# Dependencies
IngCrawler = require 'ingcrawler'

# POST / Upload xls file
exports.uploadFile = (req, res) ->
  crawler = new IngCrawler(req.files.movements.path)
  crawler.on 'end', (movements) ->
    req.session.movements = movements
    res.redirect 'back'

# GET / Show upload form
exports.form = (req, res) ->
  if req.session.movements? then res.redirect('/application') else res.render 'upload', {require: 'KO'}
