var {User} = require("./app/User.js");

const index = (req, res) => {
  User.find({}, function (err, users) {
    if (err) {
      console.log("Oh no Error!");
      console.log(err);
    } else {
      res.render("index.ejs", { users: users });
    }
  })
};

const create = (req, res) => {
  res.render("create.ejs");
};

const created = (req, res) => {
  var newUser = new User({
    name: req.body.name,
    number: req.body.number
  });
  newUser.save(function (err, cat) {
    if (err) {
      console.log("Error!!");
      res.send("Failed!");
    } else {
      console.log("Created A new User!\n");
      res.render('created.ejs', { newUser: newUser });
    }
  });
};

const update = (req, res) => {
  var id = req.params.id;
  User.findById(id, function (err, userToUpdate) {
    if (err) {
      console.log("Oh no Error!");
      console.log(err);
    } else {
      res.render("update.ejs", { userToUpdate: userToUpdate });
    }
  });
};

const updated = (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, function (err, updatedUser) {
    if (err) return handleError(err);
    res.render('updated.ejs', { updatedUser: updatedUser });
  });
};

const deleteResource = (req, res) => {
  var id = req.params.id;
  User.findByIdAndRemove(id, function (err, todo) {
    if (err) return res.status(500).send(err);
    res.render('deleted.ejs');
  });
};

module.exports = {
  index,
  create,
  created,
  update,
  updated,
  deleteResource
}
