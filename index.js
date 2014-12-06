'use strict';

var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var fs = require('fs');

var dataFromSrc = require('./data-from-src.js');
var rarity = require('./data-to-rarity.js');

var outputFile = 'collection.json';
var url = 'http://www.michaelchandler.residentevilcenter.net/';

var $;
var titles = [];

var getPlatforms = function(cb) {
  var platforms = [];
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

var getTitles = function(platform, cb) {
  request(url + platform.url, function(err, req, body) {

    if (err) {
      cb(err);
      return;
    }

    $ = cheerio.load(body, { normalizeWhitespace: true });
    var images = $('img[width="400"]'); //$('.grow img');
    images.each(function() {

      var data = dataFromSrc($(this).attr('src'));
      titles.push({
        id: data.id,
        title: data.title,
        region: data.region,
        rarity: rarity($(this).siblings().text()),
        platform: data.platform
      });
    });

    cb();
  });
};

var start = function(){
  getPlatforms(function(err, platforms) {
    if (err) {
      console.log(err);
      return;
    }

    // async.each(platforms, getTitles, function(err) {
    //   fs.writeFile(outputFile, JSON.stringify(titles, 2, 2), function(err) {
    //     if(err) {
    //       console.log(err);
    //     } else {
    //       console.log('List saved in', outputFile);
    //       console.log(titles.length + ' games in total');
    //     }
    //   });
    // });

    getTitles(platforms[5], function(err) {
      console.log(titles);
    });

  });
};

start();
