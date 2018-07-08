var mongoose = require ("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newdb" || "mongodb://pjprateekjoshi:shinchan01@ds131711.mlab.com:31711/newdb");

var userSchema = new mongoose.Schema({
  name: String,
  number: String
});
var User = mongoose.model("User", userSchema);

module.exports = {User}
