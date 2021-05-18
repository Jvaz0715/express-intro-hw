const express = require("express");
//above brings in express

const logger = require("morgan");
//above brings in morgan

const path = require("path");
//above brings in ejs

const app = express();
// the above asigns express() function to variable app for cleaner code
// app will now be used to get, post, etc