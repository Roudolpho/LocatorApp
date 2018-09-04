//Main code for LocatorApp node.js app
const express = require('express');

//This next portion is used to send information to the html file for visualization
var app = express();

test = 0;

app.use(express.static(__dirname + '/'));//communicates with the HTML page
app.listen(7777, function() { console.log('Node.JS is listening!'); });

app.get('/test', function (req, res) {//sends test information
	res.send(test);
});

function inc() {
    test ++;
}

setInterval(inc, 5000);