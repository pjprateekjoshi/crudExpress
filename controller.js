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
                    console.log("Success!!");
                    res.render('created.ejs', {newUser:newUser});
                    // res.send("Success!");
                }
              });
  },

    update: (req,res) => {
      var id = req.params.id;
      User.findById(id, function(err,users){
        if(err){
          console.log("Oh no Error!");
          console.log(err);
        }else {
          res.render("update.ejs", {users:users});
        }
      });
     //  User.findById(id, function (err, tank) {
     //    if (err) return handleError(err);
     //
     //    User.name = 'large';
     //    User.save(function (err, updatedTank) {
     //    if (err) return handleError(err);
     //    res.send('updatedUser');
     //    });
     // });
    },

    updated: (req,res) => {
              res.render('updated.ejs');
    },

    delete: (req,res) => {
        var id = req.params.id;

    }
}
