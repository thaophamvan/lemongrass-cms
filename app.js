const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const dbUtils = require('./server/lib/db')
const drinkType = require('./server/api/drinkType')
const drinkTemperature = require('./server/api/drinkTemperature')

const app = express()

if (process.env.NODE_ENV === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config')
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/javascripts/', // Same as `output.publicPath` in most cases.
  }))
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/drink-type', drinkType)
app.use('/api/drink-temperature', drinkTemperature)

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

// set app port
app.set('port', process.env.PORT || 8080)

// connect to the database
dbUtils.connect(() => {
  app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${
      app.get('port')}; press Ctrl-C to terminate.`)
  })
})
