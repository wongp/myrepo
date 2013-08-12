var express = require('express');
var app = express();
var fs = require('fs');
//app.use(express.logger());

app.use("/", express.static(__dirname + '/'));

app.get('/', function(request, response) {
    var buffer = fs.readFileSync("index.html");
    response.send(buffer.toString()); 
//    response.send("hi world");

//    buffer = fs.readFileSync("contacts.html");
//    response.send(buffer.toString());
});

app.get('/contacts.html', function(req, res) {
    var buffer = fs.readFileSync("contacts.html");
    res.send(buffer.toString());
});

app.get('/courses.html', function(req, res) {
    var buffer = fs.readFileSync("courses.html");
    res.send(buffer.toString());
});

app.get('/locationhours.html', function(req, res) {
    var buffer = fs.readFileSync("locationhours.html");
    res.send(buffer.toString());
});



var port = process.env.PORT || 8080;
console.log("begin listening....");
app.listen(port, function() {
  console.log("Listening on " + port);
});
