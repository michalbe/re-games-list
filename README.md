# re-games-list by [@michalbe](http://github.com/michalbe) #
Generate JSON list of all the Resident Evil Games based on the [Michael Chandler's](https://twitter.com/Mike_reCenter) collection.

![Resident Evil](logo.png)

This package renders JSON list of all the published Resident Evil games using [private collection of Michael Chandler](http://www.michaelchandler.residentevilcenter.net/).

### Usage ###

```bash
$ npm install re-games-list
```

and then
```bash
$ re-games-list
```

List will be generated in `collection.json` ([here](collection.json)), JSON will look kind of like this:
```javascript
[{
  "id": "pc-res-evi-big-box-whi-lab-0", // unique ID
  "title": "Resident Evil Big Box White Label", // Title
  "region": 0, // Region
  "rarity": 2, // How rare the game is
  "platform": "pc" // Which platform it runs on
  },
  {
    "id": "pc-res-evi-whi-lab-dvd-0",
    "title": "Resident Evil White Label DVD",
    "region": 0,
    "rarity": 2,
    "platform": "pc"
  }
  ...
```

So far there is 235 games. Available regions:
```
0: unknown or no data
1: Europe
2: USA
3: Japan
4: Germany
5: Australia
6: Russia
7: Poland
8: Korea
```
based on Mike's personal experience, the rarity value will be one of those:
```
0: no data or extremely rare (mostly means Michael
   doesn't have this one in his collection)
1: Very common
2: Common
3: Uncommon
4: Rare
5: Very rare
```
