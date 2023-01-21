/*********************************************************************************
*  WEB322 – Assignment 1gh
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yashkumar Kirankumar Brahmbhatt Student ID: 166488213 Date: 20th Jan 2023
*
*  Cyclic Web App URL: https://lazy-teal-pelican-belt.cyclic.app
*
*  GitHub Repository URL: https://github.com/Yash3845/hello-world.git
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Yashkumar Kirankumar Brahmbhatt, Student ID: 166488213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);