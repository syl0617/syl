// (function (window) {
// function init(mapid) {
//     var minZoom = 0;
//     var maxZoom = 5;
//     var img = [
//         284, // original width of image `karta.jpg`
//         284 // original height of image
//     ]
// }

var minZoom = 0;
var maxZoom = 2;

var map = L.map('map').setView(new L.LatLng(7.737, -80.923), 1);


var tiles = L.tileLayer('./tiles/{z}/{x}/{y}.png', {
    minZoom: minZoom,
    maxZoom: maxZoom,
    noWrap: true,
}).addTo(map);

// var rc = new L.RasterCoords(map, img);

// }(window));


// var popup = L.popup({
//     closeButton: false,
//     autoClose: false
//   })
//   .setLatLng([75.737, -80.923])
//   .setContent('<p>Text box on a map</p>')
//   .openOn(map);

//   var marker = new L.marker([75.737, -80.923], { opacity: 0.1 }); //opacity may be set to zero
// marker.bindTooltip("My Label", {permanent: true, className: "my-label", offset: [0, 0] });
// marker.addTo(map);


// map.on('click', function(e) {
//     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
// });

// L.polyline([
//     [-75.14077784070429, -68.90625000000001],
//     [51.17934297928929, -6.679687500000001],
//     [30.44867367928756, 118.82812500000001],
//     [-75.67219739055291, 117.42187500000001],
//     [-75.49715731893083, -70.31250000000001],
// ]).bindTooltip('Even polylines can have labels. <br/>Even polylines can have labels. ', {
//     noHide: true
// }).addTo(map);


// var bounds = [
//     [-75.14077784070429, -68.90625000000001],
//     [51.17934297928929, -6.679687500000001],
//     [30.44867367928756, 118.82812500000001],
//     [-75.67219739055291, 117.42187500000001],
//     [-75.49715731893083, -70.31250000000001],
// ];
// var rectangle = L.rectangle(bounds, {
//     color: "#ff7800",
//     weight: 4
// });

// rectangle.addTo(map);
// rectangle.setText("Hello. This is a really long peice of text which should span multiple lines. It should not split words or overflow the box.");

var CanvasLayer = new L.GridLayer();
CanvasLayer.createTile = function(coords) {
  var tile = L.DomUtil.create('canvas', 'leaflet-tile');
  var ctx = tile.getContext('2d');
  var size = this.getTileSize();
//   tile.width = size.x;
//   tile.height = size.y;
 
  // calculate projection coordinates of top left tile pixel
  var nwPoint = coords.scaleBy(size)
  
  // calculate geographic coordinates of top left tile pixel
  var nw = map.unproject(nwPoint, coords.z)
  
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, size.x, 50);
  ctx.fillStyle = 'black';
  ctx.fillText('x: ' + coords.x + ', y: ' + coords.y + ', zoom: ' + coords.z, 20, 20);
  ctx.fillText('lat: ' + nw.lat + ', lon: ' + nw.lng, 20, 40);
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size.x-1, 0);
  ctx.lineTo(size.x-1, size.y-1);
  ctx.lineTo(0, size.y-1);
  ctx.closePath();
  ctx.stroke();
  return tile;
};

var latlngs = [
    [51.17934297928929, -6.679687500000001],
    [30.44867367928756, 118.82812500000001],
    [-75.67219739055291, 117.42187500000001],
    [-75.49715731893083, -70.31250000000001]
];

var polygon = L.polygon(latlngs, {color: 'white'});
// polygon.bindTooltip("", {permanent: true,  offset: [0, 0] });
// var poly = L.DomUtil.create('canvas', 'leaflet-tile');
// var ctx = poly.getContext('2d');
// ctx.fillStyle = 'black';


// map.addLayer(CanvasLayer);
// polygon.addTo(map);
