'use strict';

var request = require('request');
var cheerio = require('cheerio');
var url = 'http://www.michaelchandler.residentevilcenter.net';

var $;
//var platforms = [];

request(url, function(err, req, body) {
  var title;
  $ = cheerio.load(body, { normalizeWhitespace: true });

  var platformLinks = $('a.sec').filter(function(e) {
    title =  $(this).text();
    return title.indexOf('RE/BH') > -1 &&
        title.indexOf('Comics') === -1 &&
        title.indexOf('Guides') === -1;
  });

  console.log(platformLinks.text());
});
