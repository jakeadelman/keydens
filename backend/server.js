var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./src/routes");
const cors = require("cors");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

routes(app);

var server = app.listen(4000, function() {
  console.log("app running on port.", server.address().port);
});
