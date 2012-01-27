{inspect} = require 'util'

express = require 'express'


app = module.exports = express.createServer()

#home = require './routes/upload'
{application, api, home} = require './routes'

# Configuration
app.configure ->
  app.set 'views', "#{__dirname}/views"
  app.set 'view engine', 'jade'
  app.use(express.bodyParser({uploadDir:"#{__dirname}/uploads", keepExtensions: true}))
  app.use(express.cookieParser())
  app.use(express.session({ secret: "nodejs" }))
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(express.static("#{__dirname}/public"))

app.configure 'development', ->
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))

app.configure 'production', ->
  app.use(express.errorHandler())

# Home page
app.post '/', home.uploadFile
app.get '/', home.form

# API
app.get '/api/movements', api.allMovements
app.get '/api/categories', api.allCategories

# Main application
app.get '/application', application.showMain
