const mongoose = require("./connection.js")

const FoodSchema = new mongoose.Schema({
  name: String,
  location: String
}, {
  timestamps: true
})

const Url = mongoose.model("Food", FoodSchema)

module.exports = {
  Food
}
