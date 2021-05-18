const express = require("express");
//#6 above brings in express

const logger = require("morgan");
//#6 above brings in morgan

const path = require("path");
// #6 above brings in ejs

const app = express();
// the above assigns express() function to variable app for cleaner code
// app will now be used to get, post, etc

// #7 create server using express and use logger
app.use(logger("dev"));
app.use(express.json());

// #9 after creating 'views' folder, make sure the views folder and view engine are connected to ejs through path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// #10 after creating a 'public' folder, connect it here
app.use(express.static(path.join(__dirname, "public")))