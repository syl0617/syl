
var map = L.map('map').setView([51.505, -0.09], 5);


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
['Acalypha dikuluwensis',-10.4205682942871,25.4961309427148],
['Basananthe cupricola',-11.635556,27.583333],
['Acalypha wilderi',-21.2162127127047,-159.809388600078],
['Flabellidium spinosum',-19.119688773569,-61.8722560371697],
['Dryopteris ascensionis',-7.94967397973482,-14.3471530130356],
['Oldenlandia adscensionis',-7.9257966126338,-14.3710517661315],
['Sporobolus durus',-7.95012530462131,-14.3327655141413],
['Euphrasia mendoncae',41.8078944975401,-6.76293546059905],
['Viola cryana',47.5808374618003,4.13919888447793],
['Centaurea pseudoleucolepis',47.5162741914347,37.9913073514235],
['Vernonia sechellensis',-4.68052202535421,55.4778023958303],
['Oeceoclades seychellarum',-4.6833,55.5],
['Hibiscadelphus wilderianus',20.7097098382084,-156.253523209625],
['Santalum fernandezianum',-33.6436426052126,-78.8344019749632],
['Casearia tinifolia',-20.3855573281691,7.4466192195616],
['Hibiscadelphus bombycinus',20.0641457153963,-155.845775184446],
['Kokia lanceolata',21.3088999509469,-157.650325412412],
['Cyanea giffardii',19.4621285471433,-154.994016459339],
['Cyanea pycnocarpa',20.084678648086,-155.716522901845],
['Stenocarpus dumbeensis',-22.1492551685587,166.47182349659],
['Weinmannia spiraeoides',-17.6887012834551,178.809368684174],
['Xanthostemon sebertii',-22.3596316561737,166.854797426969],
['Cnidoscolus fragrans',23.1317123348967,-82.3480464508037],
['Argocoffeopsis lemblinii',5.43275595260254,-4.28376305138265],
['Byttneria ivorensis',8.37549765251026,-8.00519254296574],
['Ormosia howii',22.1699127659806,111.775840900193],
['Otophora unilocularis',18.5533667356026,108.679945852138],
['Sterculia khasiana',25.583315652543,91.6333308448018],
['Hopea shingkeng',28.5085481594613,94.9195145520681],
['Cyanea pohaku',20.7725802320477,-156.24483956018],
['Hibiscadelphus crucibracteatus',20.8101969966447,-156.849037978302],
['Ilex ternatiflora',22.8707215823158,-83.2965780550952],
['Melicope obovata',20.7926484915107,-156.33258169957],
['Myrcia skeldingii',18.1970122352588,-77.2601951402039],
['Cyanea arborea',20.7100169671736,-156.25452686446],
['Cyanea quercifolia',20.7114515680027,-156.24819353311],
['Cupaniopsis crassivalvis',-22.2173087268147,166.499222614889],
['Chrysophyllum januariense',-22.9199710147725,-42.436459510468],
['Campomanesia lundiana',-22.9597148201686,-43.2336908637479],
['Casearia quinduensis',4.55677951795202,-75.2053856414307],
['Pouteria stenophylla',-22.7068831370358,-43.0190715606465],
['Pradosia glaziovii',-22.4682478202088,-42.9191640126564],
['Pradosia mutisii',8.050981,-75.809111],
['Pausinystalia brachythyrsum',3.083333,10.416667],
['Myrcia neocambessedeana',-23.366111,-45.084167],
['Psidium dumetorum',18.266346856662,-77.2684763287319],
['Fitchia mangarevensis',-23.1476155611492,-135.039851887665],
['Neomacounia nitida',44.2436728286207,-77.4202896647963],
['Vanvoorstia bennettiana',-33.85,151.2667],
['Achyranthes atollensis',25.8167,-171.817],
['Argyroxiphium virescens',20.69105,-156.15467],
['Cyanea cylindrocalyx',20.08924,-155.62364],
['Cyanea comata',20.7030059250149,-156.139463165494],
['Clermontia multiflora',20.9327053325395,-156.501271083587],
['Psiadia schweinfurthii',12.6438295794314,54.0468387511807],
['Pluchea glutinosa',12.6585690235955,53.4673099573251],
['Valerianella affinis',12.6116678411716,53.4247379370336],
['Adiantum lianxianense',24.8081239932715,112.406428153059],
['Astragalus nitidiflorus',37.720774,-1.166508],
['Begonia eiromischa',5.31230569337336,100.232396709521],
['Ornithogalum visianicum',42.395178,16.249263],
['Eulophia stenopetala',27.48874230368232, 89.6390471820124],
['Blutaparon rigidum',-0.247734086101438,-90.6183458181885],
['Delilia inelegans',-1.27269267947476,-90.4360595024097],
['Sicyos villosus',-1.2833,-90.4333],
['Lepidium amissum',-37.083333,174.583333],
['Lepidium obtusatum',-41.25,174.75],
['Logania depressa',-39.0470058975292,175.554780566319],
['Myosotis laingii',-42.300977,172.670003],
['Stellaria elatinoides',-43.927,171.684],
['Trilepidea adamsii',-41.339151,174.742711],
['Acalypha rubrinervis',-15.9732694397867,-5.70049079169563],
['Trochetiopsis melanoxylon',-15.965011,-5.708925],
['Nesiota elliptica',-15.95,-5.7],
['Heliotropium pannifolium',-15.9800047122013,-5.77411227142683],
['Cyanea mauiensis',20.8159751615015,-156.134083886945],
['Delissea niihauensis',21.9286016454241,-160.120574274356],
['Delissea subcordata',21.6,-157.9],
['Cyanea dolichopoda',22.0513086366999,-159.382003328138],
['Cyanea eleeleensis',22.1812246436489,-159.641080102849],
['Amaranthus brownii',23.0605232074254,-161.921269012528],
['Ochrosia kilaueaensis',19.54278,-155.66583],
['Roystonea stellata', 20.21, -74.22],
['Nobregaea latinervis',32.7458821436546,-16.9900775007084],
['Fissidens microstictus',32.6886000035539,-16.9137575955707],
['Angraecopsis dolabriformis',0.336294407865051,6.71955849887789],
['Angraecum astroarche',0.36413365532404,6.69498312874064],
['Cyanea linearifolia',21.5461751247846,-157.97243424626],
['Cyanea minutiflora',22.1712525264778,-159.375952179316],
['Cyanea parvifolia',22.1798471340423,-159.516671952694],
['Cyperus rockii',22.0816477632614,-159.613611683201],
['Cyrtandra olona',21.5454595978599,-158.195196703579],
['Commidendrum gummiferum',-15.961547,-5.717152],
['Sanicula kauaiensis',22.0504559375767,-159.474025099012],
['Schiedea amplexicaulis',22.0274992045722,-159.516052391684],
['Wikstroemia hanalei',22.1585667929785,-159.491537103947],
['Acaena exigua',20.9642567174112,-156.601551837784],
['Habenaria petromedusa',15.0564277533939,-23.7033059424063],
['Stachytarpheta fallax',15.288403020505,-23.7511819370533],
['Persoonia laxa',-33.798421,151.267819],
['Persoonia prostrata',-33.648421,151.317817],
['Cyanea sessilifolia',21.6074293865601,-157.965596003213],
['Miconia abscondita',18.4091814486476,-74.0592398239556],
['Etlingera heyneana',-6.21028,106.8525],
['Hesperelaea palmeri',29.03,-118.32],
['Faramea chiapensis',18.2856621485979,-90.4218814657171],
['Bourreria veracruzana',17.53,-94.028889],
['Scleria chevalieri',12.583333,-16.266667],
['Eriocaulon inundatum',11.193611,-8.085],
['Eriocaulon jordanii',8.73033,1.72642],
['Beilschmiedia ningmingensis',21.98432285,107.2878016], 
['Streblorrhiza speciosa',-29.11667,167.95],
['Euchorium cubense',22.6788,-83.7546],
['Myoporum rimatarense',-22.6513619225355,-152.805662209363],
['Banara wilsonii',21.1838112410654,-76.6080227237324],
['Guettarda retusa',22.7752145077544,-83.4370418676495],
['Monteverdia lineata',22.921,-83.31889],
['Licaria mexicana',18.064028,-94.370389],
['Angostura ossana',22.63095,-83.40717],
['Pycnandra micrantha',-19.72138889,163.66027778],
['Melicope macropus',20.0398111925223,-155.69560668598],
['Delissea undulata',20.81569467328,-156.570689809893],
['Leucadendron grandiflorum',-34.375,19.125],
['Leucadendron spirale',-33.5349743904335,19.2476129942004]
];


for (const element of list) {
    L.circleMarker([element[1], element[2]], {
        radius: 2, renderer: myRenderer
    }).addTo(map).bindPopup(element[0]);
}
