const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Nexmo = require("nexmo");
const socketio = require("socket.io");

//Init App

const app = express();

//template engine setup

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

//public folder setup

app.use(express.static(__dirname + "/public"));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

//catch form submit

app.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

const port = 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});
