var mongoose  = require("./connection.js");
var seedData  = require("./seedData.json");

var Food = mongoose.model("Food");

Food.remove({}).then(function(){
  Food.collection.insert(seedData).then(function(){
    process.exit();
  });
});
