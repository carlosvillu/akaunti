{inspect} = require 'util'

IngCrawler = require 'ingcrawler'
express = require 'express'
routes = require './routes'

app = module.exports = express.createServer()

# Configuration
app.configure ->
  app.set 'views', "#{__dirname}/views"
  app.set 'view engine', 'jade'
  console.log "#{__dirname}/uploads"
  app.use(express.bodyParser({uploadDir:"#{__dirname}/uploads", keepExtensions: true}))
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(express.static("#{__dirname}/public"))

app.configure 'development', ->
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))

app.configure 'production', ->
  app.use(express.errorHandler())

# Routes
app.get '/', routes.index

app.post '/', (req, res) ->
  console.log inspect "#{inspect req.files.movements.path}"
  crawler = new IngCrawler(req.files.movements.path)
  crawler.on 'end', ( movements) ->
    console.log JSON.stringify movements
    res.redirect 'back'
