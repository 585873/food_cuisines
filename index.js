var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection.js");

var app     = express();

var Food = mongoose.model("Food");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");


app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
