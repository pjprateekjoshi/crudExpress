var mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/newdb");

var userSchema = new mongoose.Schema({
  name: String,
  number: String
});
var User = mongoose.model("User", userSchema);

module.exports = {User}
