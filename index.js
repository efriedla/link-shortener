var express = require('express');
var app = express();

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');


  app.get("/", function(req, res) {
res.render("index", {});
});





var server = app.listen(process.env.PORT || 3000);

module.exports = server;
