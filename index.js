'use strict';

var request = require('request');
var cheerio = require('cheerio');
var url = 'http://www.michaelchandler.residentevilcenter.net/';

var $;
var platforms = [];

var getPlatforms = function(cb) {
  request(url, function(err, req, body) {

    if (err) {
      cb(err);
      return;
    }

    var element;
    $ = cheerio.load(body, { normalizeWhitespace: true });

    var platformLinks = $('a.sec').filter(function(e) {
      element =  $(this).text();
      return element.indexOf('RE/BH') > -1 &&
      element.indexOf('Comics') === -1 &&
      element.indexOf('Guides') === -1;
    });

    platformLinks.each(function() {
      element = $(this);
      platforms.push({
        name: element.text().replace('RE/BH', '').trim(),
        url: element.attr('href')
      });
    });

    cb(null, platforms);
  });
};

getTitles(platform, cb) {

}

var start = function(){
  getPlatforms(function(err, platforms) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(platforms);
  });
}

start();
