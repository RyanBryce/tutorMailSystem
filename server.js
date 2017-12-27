var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json());

console.log(process.env)
var payload = {
  iss: process.env.ZOOMAPIKEY,
  exp: ((new Date()).getTime() + 50000)
};

//Automatically creates header, and returns JWT
var token = jwt.sign(payload, process.env.ZOOMSECRET);
console.log(token)

require('./routes/routes.js')(app)

app.listen(port, () => {
  console.log(`running on port ${port}`);
});