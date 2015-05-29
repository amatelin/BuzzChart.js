var express = require('express');
var router = express.Router();

module.exports = function(app) {

// Get home page
app.get('/', function(req, res, next) {
    res.render('index');
});

app.get('/connect', function(req, res, next) {
    console.log("test");
    res.render('connect');
});

app.get('/handle_wordpress_callback', function (req, res) {
  console.log("Hello")
  console.log(req.query)
  res.end(JSON.stringify(req.query, null, 2))
});
}
