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

/* #16 Create a GET request with path “/“ that renders index.ejs with user info (a name) and 3 fun light infos of yourself(array of info).
a. In index.ejs should contain the html:5 boilerplate, a h1 that says `Welcome to my App ${user.name}`, and the list of fun light info of yourself. ex: "My favorite cuisines contain only carbs!!!". Also the h1 should be colored as your favorite color, this style should be imported in from stylesheets.*/

app.get('/', function (req, res) {
    res.render("index", {user: "James", infos: [{info: "My favorite cuisine is italian"}, {info: "I love sports"}, {info: "I have been coding for about 7 months"}],
    });
})

/* #17 Create a GET request with path "/photo-fun" that renders photos.ejs
a. In photos.ejs should contain html:5 boilerplate, and all 3 photos from images folder
*/ 
app.get('/photo-fun', function (req, res) {
    res.render("photos");
})

/* #18 Create a GET request with path "/:pet/:age" that renders pets.ejs
a. In pets.ejs should show the pet's name and age (which is grabbed from the params... should be passed through from the GET request). Should attach method.js to log hello world in your browser. */
app.get('/:pet/:age', function (req, res) {
    res.render("pets", { name: req.params.pet, age: req.params.age,});
})



//make sure to add a listen method so server runs
// add a console.log that dictates where server is running

app.listen(3000, function() {
    console.log(`Server is running on PORT: ${3000}`);
});