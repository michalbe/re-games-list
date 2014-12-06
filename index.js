'use strict';

var request = require('request');
var url = 'http://www.michaelchandler.residentevilcenter.net';

//var platforms = [];

request(url, function(err, req, body) {
  console.log(body);
});
