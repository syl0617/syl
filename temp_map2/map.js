
var map = L.map('map').setView([43.16, 6.05], 12);


// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor',    
//     //other attributes.
// }).addTo(map);


var myRenderer = L.canvas({ padding: 0.1 });

// for (var i = 0; i < 100000; i += 1) { // 100k points
// 	L.circleMarker(getRandomLatLng(), {
//   	renderer: myRenderer
//   }).addTo(map).bindPopup('marker ' + i);
// }


list = [
    ["Ranunculaceae",43.12681, 6.01939,97],
    ["Iridaceae",43.12681, 6.01939,86],
    ["Asparagaceae",43.12681, 6.01939,91],
    ["Liliaceae",43.18255, 5.94518,96],
    ["Liliaceae",43.12681, 6.01939,96],
    ["Caprifoliaceae",43.16348, 6.09282,72],
    ["Apocynaceae",43.10166, 6.18990,70],
    ["Ranunculaceae",43.12681, 6.01939,97],
    ["Iridaceae",43.12681, 6.01939,86]
];




// var polylinePoints = [
//     [32.7458821436546,-16.9900775007084],
//     [32.6886000035539,-16.9137575955707],
//     [37.720774,-1.166508],
//     [41.8078944975401,-6.76293546059905],
//     [47.5808374618003,4.13919888447793],
//     [42.395178,16.249263]

// ]


for (const element of list) {
   
    
    L.circleMarker([element[1], element[2]], {
        
        radius: 1 + element[3] * 0.1, renderer: myRenderer
    }).addTo(map).bindPopup(element[0]);

    // const img = new Image();
    // img.src = "assets/150.png";
    // preloading


// }).addTo(map).bindPopup("<img src=" + element[0] + ">");
// }).addTo(map).bindPopup(element[0]);
}

// var polyline = L.polyline(polylinePoints).addTo(map).showMeasurements({showTotalDistance: false});