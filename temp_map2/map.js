
// var map = L.map('map').setView([43.16, 6.05], 12);

var map = L.map('map').setView([46.708333, 1.716668], 6);


// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor',    
    //other attributes.
}).addTo(map);


var myRenderer = L.canvas({ padding: 0.1 });

// for (var i = 0; i < 100000; i += 1) { // 100k points
// 	L.circleMarker(getRandomLatLng(), {
//   	renderer: myRenderer
//   }).addTo(map).bindPopup('marker ' + i);
// }


// list = [
//     ["Asparagaceae, Liliaceae, Iridaceae, Ranunculaceae",43.12681, 6.01939,97],
//     ["Asparagaceae, Liliaceae, Iridaceae, Ranunculaceae",43.12681, 6.01939,86],
//     ["Asparagaceae, Liliaceae, Iridaceae, Ranunculaceae",43.12681, 6.01939,91],
//     ["Liliaceae",43.18255, 5.94518,96],
//     ["Asparagaceae, Liliaceae, Iridaceae, Ranunculaceae",43.12681, 6.01939,96],
//     ["Caprifoliaceae",43.16348, 6.09282,72],
//     ["Apocynaceae",43.10166, 6.18990,70],
//     ["Asparagaceae, Liliaceae, Iridaceae, Ranunculaceae",43.12681, 6.01939,97],
//     ["Asparagaceae, Liliaceae, Iridaceae, Ranunculaceae",43.12681, 6.01939,86]
// ];

list = [
["a",43.59316	,4.00465,56],
["a",43.1036	,3.08186,85],
["a",43.79264	,3.70797,96],
["a",43.12681	,6.01939,96],
["a",43.65414	,3.64409,96],
["a",43.12681	,6.01939,101],
["a",43.10166	,6.1899 ,101],
["a",43.10166	,6.1899 ,104],
["a",43.10166	,6.1899 ,104]
];


// list = [
//     ["Ranunculaceae",43.12681, 6.01939,97],
//     ["Iridaceae",43.12681, 6.01939,86],
//     ["Asparagaceae",43.12681, 6.01939,91],
//     ["Liliaceae",43.18255, 5.94518,96],
//     ["Liliaceae",43.12681, 6.01939,96],
//     ["Caprifoliaceae",43.16348, 6.09282,72],
//     ["Apocynaceae",43.10166, 6.18990,70],
//     ["Ranunculaceae",43.12681, 6.01939,97],
//     ["Iridaceae",43.12681, 6.01939,86]
// ];



// var polylinePoints = [
//     [32.7458821436546,-16.9900775007084],
//     [32.6886000035539,-16.9137575955707],
//     [37.720774,-1.166508],
//     [41.8078944975401,-6.76293546059905],
//     [47.5808374618003,4.13919888447793],
//     [42.395178,16.249263]

// ]


fr_border = [[51.0833333, -4.783333333333333],
[51.0833333, 8.216666666666667],
[42.3333333, 8.216666666666667],
[42.3333333, -4.783333333333333],
[51.0833333, -4.783333333333333]];

longitude_range = 51.0833333 - 42.3333333; 
latitude_range = 8.216666666666667 + 4.783333333333333;

x_scale = 500 / longitude_range;
y_scale = 500 / latitude_range;

pixel_border = [];

for (point in list) {
    x_pixel = (point[2] - 42.3333333) * x_scale;
    y_pixel = 500 - (point[1] + 4.783333333333333) * y_scale;
    pixel_border.push([x_pixel, y_pixel]);
}




// [46.708333, 1.716668]

//north, France reaches a point of extremity at a latitude of 51°05' N
// mainland extreme point in the south is situated at a latitude of 42°20' N 
// Looking offshore, the furthest point of southern France 50°01' S.
// East 8°13' E,  offshore longitude of 55°50' E
// west longitude 4°47' W

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

var polyline = L.polyline(fr_border).addTo(map).hideMeasurements({showTotalDistance: false});


