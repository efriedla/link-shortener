var express = require('express');
var bodyParser = require('body-parser')
var Hashids = require('hashids');
var Sequelize = require('sequelize');
var ejsLayouts = require('express-ejs-layouts');

var app = express();
var db = require('./models');
var hashids = new Hashids("this is my hashid");

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

  app.get("/", function(req, res) {
res.render("index", {});
});
//post to /links  must grab
app.post('/links', function(req, res){
  res.render("show");
});


//working create to database,
// db.user.create({
//   link: 'google.com'
//
//
//   req.body.name
// }).then(function(data) {
//   console.log(data);
// });




var server = app.listen(process.env.PORT || 3000);

module.exports = server;
