/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var exp = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello Root");
    res.end();
});

app.get("/aditya", function (req, res) {
    res.send("Hello " + req.params.name);
    res.end();
});

app.listen(4040);