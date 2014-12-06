'use strict';

var rarities = {
  'very common': 1,
  'common': 2,
  'uncommon': 3,
  'rare': 4,
  'very rare': 5
};

var getRarity = function(title) {
  for (var i in rarities) {
    if (title.indexOf(i.toUpperCase()) > -1) {
      return rarities[i];
    }
  }
  return 0;
};

module.exports = getRarity;
