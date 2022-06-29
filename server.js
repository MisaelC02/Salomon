// const express = require("express");
// const mysql = require("mysql");
// const app = express();
// const ejs = require("ejs");
// const bodyParser = require("body-parser");
// const path = require("path");
// const sessions = require("express-sessions");

// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(
//     sessions({
//         secret: "keyboard cat",
//         resave: false,
//         saveUninitialized: true,
//     })
// );

// db = mysql.createConection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "",
// });

// db.conect((err) => {
//     if (err) throw err;
//     console.log("conecion");
// });

// app.get("/", (req, res) => {
//     // res.render("file");
//     console.log("hola");
//     res.send("hola");
// });

// app.listen(port, () => {
//     console.log("El puerto es ${port}");
// });
const mysql = require("mysql");

const port = 3000;

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "anime",
});

conection.connect((err) => {
    if (err) throw err;
    console.log("conectado a la base");
});

const insertar = "INSERT INTO animes (nombre) VALUES (NULL, Espi)";
conection.query(insertar, (err, rows) => {
    if (err) throw err;
});

conection.query("SELECT * from animes", (err, rows) => {
    if (err) throw err;
    console.log("las base tiene:");
    console.log(rows);
});
