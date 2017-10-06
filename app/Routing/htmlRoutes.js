 var mysql = require("mysql");
var bodyParser = require('body-parser');
var express = require("express");
var path = require("path");
var fs = require("fs");





var app = express();
var PORT = 8080;


module.exports = function(app) {


app.get("/", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/index.html"));
});


app.get("/signup", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/signup.html"));
});

app.get("/page", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/page.html"));
});


app.get("/ta", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/ta.html"));
});


app.get("/style", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/CSS/style.css"));
});

app.get("/survey", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/survey.html"));
});

app.get("/tasurvey", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/tasurvey.html"));
});

app.get("/studentview", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/studentview.html"));
});

 app.get("/TAview", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/TAview.html"));
});

app.get("/total", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/total.html"));
});


app.get("/images/group", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/images/group.jpg"));
});

app.get("/images/view", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/images/view.jpg"));
});

app.get("/images/spiderman", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"../Public/images/spiderman.jpg"));
});

};

