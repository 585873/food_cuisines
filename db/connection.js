var mongoose  = require("mongoose");

var FoodSchema = new mongoose.Schema(
  {
    cuisine: String,
    restaurant: String,
    location: String
  }
);

mongoose.model("Food", FoodSchema);
mongoose.connect("mongodb://localhost/foodcuisines");

module.exports = mongoose;
