'use strict';

var mapsData = [
  {name: 'Boulevard Park', cords: '48.730783272675176,-122.50249123451145'},
  {name: 'Squalicum Creek Park', cords: '48.767861547116276,-122.50271979715419'},
  {name: 'Whatcom Falls Park', cords: '48.752716092359236,-122.4356397613417'}
];

$('#map-select').on('change', getSelectedMap);

function mapsForm() {
  var select = $('#map-select');
  var i, len;
  var opt;
  for (i = 0, len = mapsData.length; i < len; ++i) {
    opt = $('<option>');
    opt.attr('value', i);
    opt.text(mapsData[i].name);
    select.append(opt);
  }
}
mapsForm();

function firstMap() {
  var loc = mapsData[0];
  selectNewMap(loc.cords);
}
firstMap();

function getSelectedMap() {
  var selectedMap = $('#map-select').val();
  var loc = mapsData[selectedMap];
  selectNewMap(loc.cords);
}

function selectNewMap(cords) {
  var mapSrc = 'http://staticmap.openstreetmap.de/staticmap.php?center=' + cords + '&zoom=16&size=640x480';
  $('#map-img').attr('src', mapSrc);
}