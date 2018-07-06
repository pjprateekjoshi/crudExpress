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
      User.find({}, function(err,users){
        if(err){
          console.log("Oh no Error!");
          console.log(err);
        }else {
          res.render("index.ejs", {users:users});
        }
      })
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
                    console.log("Created A new User!\n");
                    res.render('created.ejs', {newUser:newUser});
                }
              });
  },

    update: (req,res) => {
      var id = req.params.id;
      User.findById(id, function(err,userToUpdate){
        if(err){
          console.log("Oh no Error!");
          console.log(err);
        }else {
          res.render("update.ejs", {userToUpdate:userToUpdate});
        }
      });
    },

    updated: (req,res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new:true}, function (err, updatedUser) {
        if (err) return handleError(err);
         res.render('updated.ejs', {updatedUser:updatedUser});
      });
  },

    delete: (req,res) => {
        var id = req.params.id;
        User.findByIdAndRemove(id, function(err, todo){
            if(err) return res.status(500).send(err);
            res.render('deleted.ejs');
        });
    }
}
