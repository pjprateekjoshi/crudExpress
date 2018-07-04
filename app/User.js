var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/newdb");

var userSchema = new mongoose.Schema({
  name: string,
  number: string
});

module.exports = mongoose.model("User",userSchema);
