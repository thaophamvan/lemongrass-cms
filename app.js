const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const dbUtils = require('./server/lib/db')
const drinkType = require('./server/routes/drinkType')
const drinkTemperature = require('./server/routes/drinkTemperature')

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

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/drink-type', drinkType)
app.use('/api/drink-temperature', drinkTemperature)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.end()
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
