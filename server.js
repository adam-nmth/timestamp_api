var express = require("express")
var app = express();
var moment = require("moment");

app.get('/:id', function (req, res) {
  if(isNaN(Date.parse(req.param("id")))){
    var dateStr = null;
    var dateUnix = null;
  }else if(isNaN(Number(req.param("id")))){
    var dateStr = moment(req.param("id")).format("MMMM Do, YYYY")
    var dateUnix = moment(req.param("id")).valueOf();
  }else if(!isNaN(Number(req.param("id")))){
    var str = Number(req.param("id"))
    var dateStr = moment(str).format("MMMM Do, YYYY")
    var dateUnix = str;
  }
  var back = {
    "unix": dateUnix,
    "natural": dateStr
  }
  res.send(back);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});