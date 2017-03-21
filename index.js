const express = require("express")
const Food = require("./db/models.js").Food

const app = express()

app.set("view engine", "hbs")

app.listen(3001, () =>{
  console.log("express started on port 3001")
})
