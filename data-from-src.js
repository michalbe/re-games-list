'use strict';

var regions = {
  'ger': 4,
  'eu': 1,
  'usa': 2,
  'us': 2,
  'jap': 3
};

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
  ' inum': '',
  'gh': 'Greatest Hits',
  'thebest': 'PS2 The Best',
  'deadaim': 'Dead Aim',
  'outbreak': 'Outbreak',
  'file2': 'File #2',
  'cvdemodmc': 'Code: Veronica X + Demo Devil May Cry',
  'cvx': 'Code: Veronica X',
  '5thanniv': '5th Anniversary',
  'cvcomplete': 'Code: Veronica X (Complete)',
  'bestprice': '(Best Price!)',
  '4le': '4 Limited Edition',
  '4pe': '4 Premium Edition',
  'tbops2': 'The Best of PS2',
  'ost': 'O.S.T.'
};

var getRegion = function(title) {
  for (var i in regions) {
    if (title.indexOf(i) > -1) {
      return regions[i];
    }
  }

  return 0;
};

module.exports = function(src) {
  src = src.split('/').pop();
  var region = getRegion(src);

  for (var i in regions) {
    src = src.replace('_' + i, '');
  }

  for (i in changes) {
    src = src.replace(i, ' ' + changes[i] + ' ');
  }


  src = src.replace('_', ' ');
  src = src.replace(/[ ]{2,}/g, ' ');

  return {
    region: region,
    title: src.trim()
  };
};
