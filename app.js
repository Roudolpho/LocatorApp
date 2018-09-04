//Main code for LocatorApp node.js app
const express = require('express');

//This next portion is used to send information to the html file for visualization
var app = express();

//Test list of users for formatting purposes within the html file
var body = [{'username':'user1', 'loc':'loc1', 'phone':'555-555-5555'},{'username':'user2', 'loc':'loc2', 'phone':'666-666-6666'},{'username':'user3', 'loc':'loc3', 'phone':'777-777-7777'}]


app.use(express.static(__dirname + '/'));//communicates with the HTML page
app.get('/test', (req, res) => {res.send({'body':body});});

app.listen(3000, () => console.log('Example app listening on port 3000!'))


