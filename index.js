var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection.js");

var app     = express();

var Food = mongoose.model("Food");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("foods");
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
