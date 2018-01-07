var path = require('path');

module.exports = function (app){

  app.get("/", function (req, res, next) {

    res.sendFile(path.join(__dirname, "../public/views/index.html"))
  })
  
}