var jwt = require('jsonwebtoken');
var payload = {
  iss: process.env.ZOOMAPIKEY,
  exp: ((new Date()).getTime() + 300000)
};

var token = jwt.sign(payload, process.env.ZOOMSECRET);
console.log(token)
module.exports = token;