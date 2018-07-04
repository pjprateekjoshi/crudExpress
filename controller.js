var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newdb");
// var User = "./app/User.js";
var userSchema = new mongoose.Schema({
  name: String,
  number: String
});
var User = mongoose.model("User",userSchema);




module.exports = {
    index: (req, res) => {
      res.render("index.ejs");
    },

    create: (req, res) => {
      res.render("create.ejs");
    },

    created: (req, res) => {
              var newUser = new User ({
                name : req.body.name,
                number: req.body.number
              });

              newUser.save(function(err,cat){
                if(err){
                    console.log("Error!!");
                    res.send("Failed!");
                }else{
                    console.log("Success!!");
                    res.render('created.ejs', {data:data});
                }
              });
  }



}
