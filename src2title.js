'use strict';
//pics/ps1/residentevil_eu.jpg

var regions = {
  'ger': 4,
  'eu': 1,
  'usa': 2,
  'us': 2,
  'jap': 3
}

var changes = {
  '.jpg': '',
  'directorscut': 'Director\'s Cut',
  'residentevil': 'Resident Evil',
  'gunsurv': 'Gun Survivor',
  'wl': 'White Label',
  'whitelabel': 'White Label',
  'biohazard': 'Biohazard',
  'dc': '+ Dino Crisis Demo',
  'plat': 'Platinum',
  'jewelc': 'Jewel Case',
  ' ase': '',
  'longbox': 'Long Box',
  'valueseries': 'Value Series',
  'dsv': 'Dualshock',
  'ds': 'Dualshock',
  'surv': 'Survivor',
  'capk': 'CapKore',
  ' inum': ''
};

var getRegion = function(title) {
  for (var i in regions) {
    if (title.indexOf(i) > -1) {
      return regions[i];
    }
  }
}

module.exports = function(src) {
  src = src.split('/').pop();
  var region = getRegion(src);

  for (var i in regions) {
    src = src.replace('_' + i, '');
  }

  for (var i in changes) {
    src = src.replace(i, ' ' + changes[i] + ' ');
  }


  src = src.replace('_', ' ');
  src = src.replace(/[ ]{2,}/g, ' ');

  return {
    region: region,
    title: src.trim()
  }
};
