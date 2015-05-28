var express = require('express')
  , logger = require('morgan')
  , session = require('express-session')
  , Grant = require('grant-express')
  , grant = new Grant(require('./config.json'));

var app = express();
require('./routes/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// mount middlewares
app.use(logger('dev'));
app.use(session({secret:'very secret'}));
app.use(grant);
app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
  console.log('Express server listening on port ' + 3000)
})