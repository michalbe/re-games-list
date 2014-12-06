'use strict';

String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

var regions = {
  'ger': 4,
  'eu': 1,
  'usa': 2,
  'jap': 3,
  'aus': 5
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
  ' ds': 'Dualshock',
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
  'bp': '(Best Price!)',
  '4led': '4 Limited Evil Edition',
  '4le': '4 Limited Edition',
  '4pe': '4 Premium Edition',
  'tbops': 'The Best of PS',
  'ost': 'O.S.T.',
  '5le': '5 Limited Edition',
  'gold': 'Gold',
  'esse': 'Essentials',
  'alter': 'Alternative',
  'operationraccooncity': 'Operation: Raccoon City',
  'chronicleshdselec': 'Chronicles HD Selection',
  'revivalselection': 'Revival Selection',
  're ': 'Resident Evil',
  'bio ': 'Biohazard',
  'ess': 'Essentials',
  '6le': '6 Limited Edition',
  'themercs': 'The Mercenaries 3D',
  'playc': 'Player\'s Choice',
  '4pc': '4 Player\'s Choice',
  'colleced': 'Collector\'s Edition',
  'gsse': 'Game Stop Special Edition'
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
    title: src.capitalize().trim()
  };
};
