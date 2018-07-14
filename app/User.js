var mongoose = require ("mongoose");
mongoose.connect("mongodb://pjprateekjoshi:password@ds131711.mlab.com:31711/newdb");

var userSchema = new mongoose.Schema({
  name: String,
  number: String
});
var User = mongoose.model("User", userSchema);

module.exports = {User}
