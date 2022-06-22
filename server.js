const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const sessions = require("express-sessions");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
    sessions({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);

db = mysql.createConection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
});

app.get("/", (req, res)  => {
    // res.render("file");
    console.log("hola");
    res.send("hola");
});



app.listen(port, ()  =>{
    console.log('El puerto es ${port}');
});