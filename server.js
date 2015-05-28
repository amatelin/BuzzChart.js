var express = require('express')
  , logger = require('morgan')
  , session = require('express-session')


var Grant = require('grant-express')
  , grant = new Grant(require('./config.json'))

var app = express()
require('./routes/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(logger('dev'))
// mount session middleware
app.use(session({secret:'very secret'}))
// mount grant
app.use(grant)

app.listen(3000, function () {
  console.log('Express server listening on port ' + 3000)
})