var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var zoomToken = require("./controller/zoomToken.js")

var app = express();

var port = process.env.PORT || 3000;

//express middlewear
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json());

//This automatically creates header, and returns JWT

//this is used for creating an auth preflight header to grab your account info from Zoom.us.
var options = {
  url: `https://api.zoom.us/v2/users/`,
  headers: {
    'Authorization': `Bearer${zoomToken}`
  }
};

var userId;
function getUserId(cb) {
  request(options, function (err, response, body) {
    var info = JSON.parse(body);
    console.log(info)
    userId = info.users[0].id
    cb()
  })
}

//url for creating a meeting
//POST https://api.zoom.us/v2/users/{userId}/meetings
getUserId(function(){
  console.log(userId)

  var options = {
    url: `https://api.zoom.us/v2/users/${userId}/meetings`,
    headers: {
      'Authorization': `Bearer${zoomToken}`
    },
    method: "POST",
    body: JSON.stringify({
      topic: "ryans node hit"
    })
  };
  
  request(options, function (err, response, body) {
    var info = JSON.parse(body);
    console.log(info)
  })
})


require('./routes/htmlRoutes.js')(app)

app.listen(port, () => {
  console.log(`running on port ${port}`);
});