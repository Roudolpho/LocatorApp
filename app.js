//Main code for LocatorApp node.js app
const express = require('express');

//This next portion is used to send information to the html file for visualization
var app = express();

var test = 1;
app.use(express.static(__dirname + '/'));//communicates with the HTML page
app.get('/test', (req, res) => {res.send(test);});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

/*setInterval(function () {
    test++;
}, 5000);*/
