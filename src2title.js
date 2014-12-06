'use strict';
//pics/ps1/residentevil_eu.jpg

var changes = {
  'residentevil': 'Resident Evil ',
  '.jpg': ''
}
module.exports = function(src) {
  src = src.split('/').pop();

  for (var i in changes) {
    src = src.replace(i, changes[i]);
  }

  return src;
};
