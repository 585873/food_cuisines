var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection");

var app     = express();

var Food = mongoose.model("Food");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));
app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/", function(req, res){
  res.render("foods");
});

app.get("/api/foods", function(req, res){
  Food.find({}).then(function(foods){
    res.json(foods)
  });
});

app.get("/api/foods/:cuisine", function(req, res){
  Food.findOne({cuisine: req.params.cuisine}).then(function(food){
    res.json(food)
  });
});

app.post("/api/foods", function(req, res){
  Food.create(req.body.food).then(function(food){
    res.json(food)
  });
});

app.post("/api/foods/:name/delete", function(req, res){
  Food.findOneAndRemove({name: req.params.name}).then(function(){
    res.json(foods)
  });
});

app.post("/api/foods/:name", function(req, res){
  Food.findOneAndUpdate({name: req.params.name}, req.body.food, {new: true}).then(function(food){
    res.json(foods)
  });
});
app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
