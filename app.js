const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

const dbUtils = require('./server/lib/db')
const index = require('./server/routes/index');
const users = require('./server/routes/users');
const drinkType = require('./server/routes/drinkType');
const drinkTemperature = require('./server/routes/drinkTemperature');

const app = express();

// views folder
app.set('views', './server/views/');

// view engine setup
app.engine('handlebars', exphbs({
  layoutsDir: "server/views/layouts/",
  partialsDir: "server/views/partials/",
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

if (process.env.NODE_ENV === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/javascripts/', // Same as `output.publicPath` in most cases.
  }));
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/drink-type', drinkType);
app.use('/drink-temperature', drinkTemperature);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// set app port
app.set('port', process.env.PORT || 8080)

// connect to the database
dbUtils.connect(() => {
  app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' +
      app.get('port') + '; press Ctrl-C to terminate.')
  })
})
