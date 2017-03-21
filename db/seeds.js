var mongoose  = require("./connection.js");
var seedData  = require("./seeds.js");

var Food = mongoose.model("Food");

Food.remove({}).then(function(){
  Food.collection.insert(seedData).then(function(){
    process.exit();
  });
});
