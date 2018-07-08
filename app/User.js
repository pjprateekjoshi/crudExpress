var mongoose = require ("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newdb");

var userSchema = new mongoose.Schema({
  name: String,
  number: String
});
var User = mongoose.model("User", userSchema);

module.exports = {User}
