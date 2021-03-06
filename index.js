var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var controller = require("./controller.js");
var port = process.env.PORT || 8000;
app.use(express.static('views/resources/css/'));

app.get("/", function (req, res) {controller.index(req,res);});

app.get("/create", function (req, res){controller.create(req,res);});

app.post("/created", function (req, res) {controller.created(req,res);});

app.get("/update/:id", function (req, res) {controller.update(req,res);});

app.post("/updated/:id", function(req,res) {controller.updated(req,res);});

app.get("/delete/:id", function(req,res) {controller.deleteResource(req,res);});


app.listen(port, () => console.log(`App listening on port ${port}\n`));
