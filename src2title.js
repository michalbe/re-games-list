'use strict';
//pics/ps1/residentevil_eu.jpg
module.exports = function(src) {
  src = src.split('/').pop().replace('.jpg', '');
  return src;
};
