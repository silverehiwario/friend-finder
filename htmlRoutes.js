 var mysql = require("mysql");
var bodyParser = require('body-parser');
var express = require("express");
var path = require("path");
var fs = require("fs");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sophia01*",
  database: "projectgroupfinderdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


var app = express();
var PORT = 8080;


module.exports = function(app) {


app.get("/", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"index.html"));
});


app.get("/signup", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"signup.html"));
});

app.get("/page", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"page.html"));
});


app.get("/ta", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"ta.html"));
});


app.get("/style", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"style.css"));
});

app.get("/survey", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"survey.html"));
});

app.get("/tasurvey", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"tasurvey.html"));
});

app.get("/studentview", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"studentview.html"));
});

 app.get("/TAview", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"TAview.html"));
});

app.get("/total", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"total.html"));
});


app.get("/instructorview", function(req, res) {
  // var http = fs.readFileSync("./index.html");
  res.sendFile(path.join(__dirname,"instructorview.html"));
});

};

