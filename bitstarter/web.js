var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
    var buffer = fs.readFileSync("index.html");
    response.send(buffer.toString()); 
//    response.send("hi world");
});

var port = process.env.PORT || 8080;
console.log("begin listening....");
app.listen(port, function() {
  console.log("Listening on " + port);
});
