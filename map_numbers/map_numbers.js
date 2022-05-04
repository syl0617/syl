var sound, img;

timer = 0;

zone_1_number = 0;
zone_2_number = 1;
zone_3_number = 2;
zone_4_number = 3;
zone_5_number = 4;
zone_6_number = 5;
zone_7_number = 6;
zone_8_number = 7;
zone_9_number = 8;
zone_10_number = 9;

next_x = 20;
next_y = 2;
soundPlayFlag = false;

function preload() {
  beep_sound = loadSound('assets/beep_sound.mp3');
  sound = loadSound('assets/sound_compressed.mp3');
  bg = loadImage('assets/test_70.jpeg');
}

function setup() {

  var load = sound.isLoaded();
  alert(load);

  // cnv = createCanvas(3827, 2053);
  cnv = createCanvas(3827 / 2, 2053 / 2);
  time = millis();
  // textSize(20);
  textSize(10);
  fill(255);
  sound_duration = sound.duration() - 1;

}

function randomNumbers() {
  return Math.floor(Math.random() * 10);
}

function textRandomnumbers(text, x, y) {
  text(randomNumbers(), x, y);
}

function zoneTextNumbers(zone_number, zone_line_x, zone_line_y, times, fontsize = 20, nex_x = next_x, nex_y = next_y) {
  textSize(fontsize / 2);
  const res = Array.from(Array(times)).map((_, i) => {
    // return text(zone_number, zone_line_x + i * nex_x, zone_line_y + i * nex_y);
    return text(zone_number, (zone_line_x + i * nex_x) / 2, (zone_line_y + i * nex_y) / 2);
  });
  textSize(20);
}

function drawZone(zone_number) {
  if (zone_number == 1) {
    // Zone 1 
    // L1
    z1l1_x = 655;
    z1l1_y = 244;
    zoneTextNumbers(zone_1_number, z1l1_x, z1l1_y, 7);
    // L2
    z1l2_x = 650;
    z1l2_y = 270;
    zoneTextNumbers(zone_1_number, z1l2_x, z1l2_y, 7);
    // L3
    z1l3_x = 645;
    z1l3_y = 296;
    zoneTextNumbers(zone_1_number, z1l3_x, z1l3_y, 8);
    // L4
    z1l4_x = 638;
    z1l4_y = 320;
    zoneTextNumbers(zone_1_number, z1l4_x, z1l4_y, 8);
    // L5
    z1l5_x = 632;
    z1l5_y = 346;
    zoneTextNumbers(zone_1_number, z1l5_x, z1l5_y, 8);
    // L6
    z1l6_x = 628;
    z1l6_y = 370;
    zoneTextNumbers(zone_1_number, z1l6_x, z1l6_y, 9);
    // L7
    z1l7_x = 662;
    z1l7_y = 398;
    zoneTextNumbers(zone_1_number, z1l7_x, z1l7_y, 7);
    // L8
    z1l8_x = 722;
    z1l8_y = 426;
    zoneTextNumbers(zone_1_number, z1l8_x, z1l8_y, 4);
    // L9
    z1l9_x = 782;
    z1l9_y = 452;
    zoneTextNumbers(zone_1_number, z1l9_x, z1l9_y, 1);

    // Zone 11
    z11_next_y = 0;

    z11l1_x = 1330;
    z11l1_y = 790;
    zoneTextNumbers(zone_1_number, z11l1_x, z11l1_y, 2, 20, next_x, z11_next_y);

    z11l2_x = 1315;
    z11l2_y = 814;
    zoneTextNumbers(zone_1_number, z11l2_x, z11l2_y, 4, 20, next_x, z11_next_y);

    z11l3_x = 1300;
    z11l3_y = 838;
    zoneTextNumbers(zone_1_number, z11l3_x, z11l3_y, 5, 20, next_x, z11_next_y);

    z11l4_x = 1290;
    z11l4_y = 864;
    zoneTextNumbers(zone_1_number, z11l4_x, z11l4_y, 7, 20, next_x, z11_next_y);

    z11l5_x = 1326;
    z11l5_y = 890;
    zoneTextNumbers(zone_1_number, z11l5_x, z11l5_y, 4, 20, next_x, z11_next_y);

    z11l6_x = 1350;
    z11l6_y = 914;
    zoneTextNumbers(zone_1_number, z11l6_x, z11l6_y, 2, 20, next_x, z11_next_y);

    // Zone 21
    z21l1_x = 1941;
    z21l1_y = 987;
    zoneTextNumbers(zone_1_number, z21l1_x, z21l1_y, 1);

    // Zone 31
    z31_next_y = 10;

    z31l1_x = 1194;
    z31l1_y = 1210;
    zoneTextNumbers(zone_1_number, z31l1_x, z31l1_y, 7, 20, next_x, z31_next_y);

    z31l2_x = 1156;
    z31l2_y = 1222;
    zoneTextNumbers(zone_1_number, z31l2_x, z31l2_y, 8, 20, next_x, z31_next_y);

    z31l3_x = 1118;
    z31l3_y = 1234;
    zoneTextNumbers(zone_1_number, z31l3_x, z31l3_y, 9, 20, next_x, z31_next_y);

    z31l4_x = 1118;
    z31l4_y = 1266;
    zoneTextNumbers(zone_1_number, z31l4_x, z31l4_y, 8, 20, next_x, z31_next_y);

    z31l5_x = 1104;
    z31l5_y = 1292;
    zoneTextNumbers(zone_1_number, z31l5_x, z31l5_y, 8, 20, next_x, z31_next_y);

    z31l6_x = 1082;
    z31l6_y = 1314;
    zoneTextNumbers(zone_1_number, z31l6_x, z31l6_y, 8, 20, next_x, z31_next_y);

    z31l7_x = 1060;
    z31l7_y = 1334;
    zoneTextNumbers(zone_1_number, z31l7_x, z31l7_y, 8, 20, next_x, z31_next_y);

    z31l8_x = 1048;
    z31l8_y = 1358;
    zoneTextNumbers(zone_1_number, z31l8_x, z31l8_y, 2, 20, next_x, z31_next_y);

    // Zone 41
    z41_next_y = 14;

    z41l1_x = 1924;
    z41l1_y = 1307;
    zoneTextNumbers(zone_1_number, z41l1_x, z41l1_y, 3, 20, next_x, z41_next_y);


    // Zone 51
    z51_next_y = -2;

    z51l1_x = 1485;
    z51l1_y = 1511;
    zoneTextNumbers(zone_1_number, z51l1_x, z51l1_y, 1, 20, next_x, z51_next_y);
    z51l2_x = 1480;
    z51l2_y = 1537;
    zoneTextNumbers(zone_1_number, z51l2_x, z51l2_y, 2, 20, next_x, z51_next_y);

    // Zone 61
    z61_next_y = 8;

    z61l1_x = 1924;
    z61l1_y = 1742;
    zoneTextNumbers(zone_1_number, z61l1_x, z61l1_y, 2, 20, next_x, z61_next_y);
    z61l2_x = 1924;
    z61l2_y = 1764;
    zoneTextNumbers(zone_1_number, z61l2_x, z61l2_y, 2, 20, next_x, z61_next_y);




  } else if (zone_number == 2) {
    // Zone 2
    // L1
    z2l1_x = 1282;
    z2l1_y = 97;
    zoneTextNumbers(zone_2_number, z2l1_x, z2l1_y, 1);
    // L2
    z2l2_x = 1255;
    z2l2_y = 118;
    zoneTextNumbers(zone_2_number, z2l2_x, z2l2_y, 3);
    // L3
    z2l3_x = 1215;
    z2l3_y = 138;
    zoneTextNumbers(zone_2_number, z2l3_x, z2l3_y, 7);
    // L4
    z2l4_x = 1235;
    z2l4_y = 164;
    zoneTextNumbers(zone_2_number, z2l4_x, z2l4_y, 7);
    // L5
    z2l5_x = 1278;
    z2l5_y = 191;
    zoneTextNumbers(zone_2_number, z2l5_x, z2l5_y, 6);
    // L6
    z2l6_x = 1320;
    z2l6_y = 218;
    zoneTextNumbers(zone_2_number, z2l6_x, z2l6_y, 4);
    // L7
    z2l6_x = 1355;
    z2l6_y = 242;
    zoneTextNumbers(zone_2_number, z2l6_x, z2l6_y, 1);


    // Zone 12
    z12l1_x = 1565;
    z12l1_y = 678;
    zoneTextNumbers(zone_2_number, z12l1_x, z12l1_y, 1);
    z12l2_x = 1562;
    z12l2_y = 704;
    zoneTextNumbers(zone_2_number, z12l2_x, z12l2_y, 1);
    z12l3_x = 1559;
    z12l3_y = 730;
    zoneTextNumbers(zone_2_number, z12l3_x, z12l3_y, 1);
    z12l4_x = 1556;
    z12l4_y = 756;
    zoneTextNumbers(zone_2_number, z12l4_x, z12l4_y, 1);
    z12l5_x = 1553;
    z12l5_y = 782;
    zoneTextNumbers(zone_2_number, z12l5_x, z12l5_y, 1);

    // Zone 22
    z22l1_x = 1901;
    z22l1_y = 1050;
    zoneTextNumbers(zone_2_number, z22l1_x, z22l1_y, 1);

    // Zone 32
    z32_next_y = 0;

    z32l1_x = 1357;
    z32l1_y = 1300;
    zoneTextNumbers(zone_2_number, z32l1_x, z32l1_y, 2, 20, next_x, z32_next_y);

    z32l2_x = 1326;
    z32l2_y = 1326;
    zoneTextNumbers(zone_2_number, z32l2_x, z32l2_y, 4, 20, next_x, z32_next_y);
    z32l3_x = 1300;
    z32l3_y = 1352;
    zoneTextNumbers(zone_2_number, z32l3_x, z32l3_y, 5, 20, next_x, z32_next_y);
    z32l4_x = 1282;
    z32l4_y = 1378;
    zoneTextNumbers(zone_2_number, z32l4_x, z32l4_y, 5, 20, next_x, z32_next_y);

    z32l5_x = 1256;
    z32l5_y = 1404;
    zoneTextNumbers(zone_2_number, z32l5_x, z32l5_y, 6, 20, next_x, z32_next_y);

    z32l6_x = 1238;
    z32l6_y = 1430;
    zoneTextNumbers(zone_2_number, z32l6_x, z32l6_y, 7, 20, next_x, z32_next_y);
    z32l7_x = 1280;
    z32l7_y = 1456;
    zoneTextNumbers(zone_2_number, z32l7_x, z32l7_y, 4, 20, next_x, z32_next_y);
    z32l8_x = 1342;
    z32l8_y = 1480;
    zoneTextNumbers(zone_2_number, z32l8_x, z32l8_y, 1, 20, next_x, z32_next_y);

    // Zone 42
    z42_next_y = 10;

    z42l1_x = 2074;
    z42l1_y = 1358;
    zoneTextNumbers(zone_2_number, z42l1_x, z42l1_y, 2, 20, next_x, z42_next_y);
    z42l2_x = 2074;
    z42l2_y = 1384;
    zoneTextNumbers(zone_2_number, z42l2_x, z42l2_y, 1, 20, next_x, z42_next_y);


    // Zone 52
    z52_next_y = 0;

    z52l1_x = 478;
    z52l1_y = 1668;
    zoneTextNumbers(zone_2_number, z52l1_x, z52l1_y, 10, 20, next_x, z52_next_y);
    z52l2_x = 480;
    z52l2_y = 1694;
    zoneTextNumbers(zone_2_number, z52l2_x, z52l2_y, 10, 20, next_x, z52_next_y);
    z52l2_x = 492;
    z52l2_y = 1720;
    zoneTextNumbers(zone_2_number, z52l2_x, z52l2_y, 9, 20, next_x, z52_next_y);
    z52l3_x = 515;
    z52l3_y = 1746;
    zoneTextNumbers(zone_2_number, z52l3_x, z52l3_y, 9, 20, next_x, z52_next_y);
    z52l4_x = 530;
    z52l4_y = 1772;
    zoneTextNumbers(zone_2_number, z52l4_x, z52l4_y, 7, 20, next_x, z52_next_y);
    z52l5_x = 545;
    z52l5_y = 1798;
    zoneTextNumbers(zone_2_number, z52l5_x, z52l5_y, 6, 20, next_x, z52_next_y);
    z52l6_x = 588;
    z52l6_y = 1824;
    zoneTextNumbers(zone_2_number, z52l6_x, z52l6_y, 4, 20, next_x, z52_next_y);
    z52l7_x = 648;
    z52l7_y = 1848;
    zoneTextNumbers(zone_2_number, z52l7_x, z52l7_y, 1, 20, next_x, z52_next_y);
    z52l8_x = 497;
    z52l8_y = 1644;
    zoneTextNumbers(zone_2_number, z52l8_x, z52l8_y, 1, 20, next_x, z52_next_y);

    // Zone 62
    z62_next_y = 8.8;

    z62l1_x = 2535;
    z62l1_y = 1968;
    zoneTextNumbers(zone_2_number, z62l1_x, z62l1_y, 10, 20, next_x, z62_next_y);
    z62l2_x = 2530;
    z62l2_y = 1992;
    zoneTextNumbers(zone_2_number, z62l2_x, z62l2_y, 7, 20, next_x, z62_next_y);
    z62l3_x = 2525;
    z62l3_y = 2018;
    zoneTextNumbers(zone_2_number, z62l3_x, z62l3_y, 4, 20, next_x, z62_next_y);
    z62l4_x = 2520;
    z62l4_y = 2040;
    zoneTextNumbers(zone_2_number, z62l4_x, z62l4_y, 2, 20, next_x, z62_next_y);



  } else if (zone_number == 3) {
    // Zone 3
    // L1
    z3l1_x = 3633;
    z3l1_y = 106;
    zoneTextNumbers(zone_3_number, z3l1_x, z3l1_y, 9);

    // L2
    z3l2_x = 3626;
    z3l2_y = 130;
    zoneTextNumbers(zone_3_number, z3l2_x, z3l2_y, 10);

    // L3
    z3l3_x = 3623;
    z3l3_y = 154;
    zoneTextNumbers(zone_3_number, z3l3_x, z3l3_y, 10);

    // L4
    z3l4_x = 3625;
    z3l4_y = 178;
    zoneTextNumbers(zone_3_number, z3l4_x, z3l4_y, 10);

    // L5
    z3l5_x = 3630;
    z3l5_y = 204;
    zoneTextNumbers(zone_3_number, z3l5_x, z3l5_y, 10);

    // L6
    z3l6_x = 3635;
    z3l6_y = 228;
    zoneTextNumbers(zone_3_number, z3l6_x, z3l6_y, 9);

    // L7
    z3l7_x = 3631;
    z3l7_y = 252;
    zoneTextNumbers(zone_3_number, z3l7_x, z3l7_y, 10);

    // L8
    z3l8_x = 3630;
    z3l8_y = 276;
    zoneTextNumbers(zone_3_number, z3l8_x, z3l8_y, 10);

    // L9
    z3l9_x = 3618;
    z3l9_y = 300;
    zoneTextNumbers(zone_3_number, z3l9_x, z3l9_y, 10);

    // L10
    z3l10_x = 3604;
    z3l10_y = 324;
    zoneTextNumbers(zone_3_number, z3l10_x, z3l10_y, 11);

    // L11
    z3l11_x = 3586;
    z3l11_y = 348;
    zoneTextNumbers(zone_3_number, z3l11_x, z3l11_y, 12);

    // L12
    z3l12_x = 3568;
    z3l12_y = 372;
    zoneTextNumbers(zone_3_number, z3l12_x, z3l12_y, 13);

    // L13
    z3l13_x = 3548;
    z3l13_y = 396;
    zoneTextNumbers(zone_3_number, z3l13_x, z3l13_y, 14);

    // L14
    z3l14_x = 3528;
    z3l14_y = 420;
    zoneTextNumbers(zone_3_number, z3l14_x, z3l14_y, 15);

    // L15
    z3l15_x = 3508;
    z3l15_y = 444;
    zoneTextNumbers(zone_3_number, z3l15_x, z3l15_y, 16);

    // L16
    z3l16_x = 3528;
    z3l16_y = 472;
    zoneTextNumbers(zone_3_number, z3l16_x, z3l16_y, 15);

    // L17
    z3l17_x = 3542;
    z3l17_y = 498;
    zoneTextNumbers(zone_3_number, z3l17_x, z3l17_y, 14);

    // L18
    z3l18_x = 3562;
    z3l18_y = 526;
    zoneTextNumbers(zone_3_number, z3l18_x, z3l18_y, 13);

    // L19
    z3l19_x = 3582;
    z3l19_y = 554;
    zoneTextNumbers(zone_3_number, z3l19_x, z3l19_y, 12);

    // L20
    z3l20_x = 3596;
    z3l20_y = 582;
    zoneTextNumbers(zone_3_number, z3l20_x, z3l20_y, 11);

    // L21
    z3l21_x = 3604;
    z3l21_y = 608;
    zoneTextNumbers(zone_3_number, z3l21_x, z3l21_y, 6);

    // L22
    z3l22_x = 3610;
    z3l22_y = 630;
    zoneTextNumbers(zone_3_number, z3l22_x, z3l22_y, 1);

    // Zone 13
    z13_next_y = 0;

    z13l1_x = 1648;
    z13l1_y = 767;
    zoneTextNumbers(zone_3_number, z13l1_x, z13l1_y, 2, 20, next_x, z13_next_y);

    z13l2_x = 1635;
    z13l2_y = 793;
    zoneTextNumbers(zone_3_number, z13l2_x, z13l2_y, 2, 20, next_x, z13_next_y);

    z13l3_x = 1622;
    z13l3_y = 819;
    zoneTextNumbers(zone_3_number, z13l3_x, z13l3_y, 2, 20, next_x, z13_next_y);

    z13l4_x = 1609;
    z13l4_y = 845;
    zoneTextNumbers(zone_3_number, z13l4_x, z13l4_y, 2, 20, next_x, z13_next_y);

    // Zone 23
    z23l1_x = 2102;
    z23l1_y = 1018;
    zoneTextNumbers(zone_3_number, z23l1_x, z23l1_y, 1);

    z23l2_x = 2080;
    z23l2_y = 1042;
    zoneTextNumbers(zone_3_number, z23l2_x, z23l2_y, 2);

    z23l3_x = 2088;
    z23l3_y = 1068;
    zoneTextNumbers(zone_3_number, z23l3_x, z23l3_y, 1);

    // Zone 33
    z33_next_y = 0;

    z33l1_x = 1670;
    z33l1_y = 1230;
    zoneTextNumbers(zone_3_number, z33l1_x, z33l1_y, 1, 20, next_x, z33_next_y);
    z33l2_x = 1640;
    z33l2_y = 1256;
    zoneTextNumbers(zone_3_number, z33l2_x, z33l2_y, 4, 20, next_x, z33_next_y);
    z33l3_x = 1616;
    z33l3_y = 1282;
    zoneTextNumbers(zone_3_number, z33l3_x, z33l3_y, 6, 20, next_x, z33_next_y);
    z33l4_x = 1644;
    z33l4_y = 1308;
    zoneTextNumbers(zone_3_number, z33l4_x, z33l4_y, 3, 20, next_x, z33_next_y);

    // Zone 43
    z43_next_y = 10;

    z43l1_x = 2148;
    z43l1_y = 1393;
    zoneTextNumbers(zone_3_number, z43l1_x, z43l1_y, 4, 20, next_x, z43_next_y);

    // Zone 53
    z53_next_y = -8;

    z53l1_x = 1340;
    z53l1_y = 1640;
    zoneTextNumbers(zone_3_number, z53l1_x, z53l1_y, 3, 20, next_x, z53_next_y);
    z53l2_x = 1335;
    z53l2_y = 1668;
    zoneTextNumbers(zone_3_number, z53l2_x, z53l2_y, 3, 20, next_x, z53_next_y);
    z53l3_x = 1330;
    z53l3_y = 1696;
    zoneTextNumbers(zone_3_number, z53l3_x, z53l3_y, 3, 20, next_x, z53_next_y);
    z53l4_x = 1325;
    z53l4_y = 1724;
    zoneTextNumbers(zone_3_number, z53l4_x, z53l4_y, 2, 20, next_x, z53_next_y);
    z53l5_x = 1320;
    z53l5_y = 1752;
    zoneTextNumbers(zone_3_number, z53l5_x, z53l5_y, 1, 20, next_x, z53_next_y);


    // Zone 63
    z63_next_y = 1.7;

    z63l1_x = 179;
    z63l1_y = 1158;
    zoneTextNumbers(zone_3_number, z63l1_x, z63l1_y, 9, 20, next_x, z63_next_y);
    z63l2_x = 186;
    z63l2_y = 1183;
    zoneTextNumbers(zone_3_number, z63l2_x, z63l2_y, 9, 20, next_x, z63_next_y);
    z63l3_x = 195;
    z63l3_y = 1209;
    zoneTextNumbers(zone_3_number, z63l3_x, z63l3_y, 8, 20, next_x, z63_next_y);
    z63l4_x = 204;
    z63l4_y = 1235;
    zoneTextNumbers(zone_3_number, z63l4_x, z63l4_y, 7, 20, next_x, z63_next_y);
    z63l5_x = 214;
    z63l5_y = 1259;
    zoneTextNumbers(zone_3_number, z63l5_x, z63l5_y, 7, 20, next_x, z63_next_y);




  } else if (zone_number == 4) {
    // Zone 4
    z4_next_y = 0;

    // L1
    z4l1_x = 1304;
    z4l1_y = 458;
    zoneTextNumbers(zone_4_number, z4l1_x, z4l1_y, 1, 20, next_x, z4_next_y);

    //L2
    z4l2_x = 1259;
    z4l2_y = 484;
    zoneTextNumbers(zone_4_number, z4l2_x, z4l2_y, 4, 20, next_x, z4_next_y);

    //L3
    z4l3_x = 1246;
    z4l3_y = 512;
    zoneTextNumbers(zone_4_number, z4l3_x, z4l3_y, 5, 20, next_x, z4_next_y);
    //L4
    z4l4_x = 1256;
    z4l4_y = 538;
    zoneTextNumbers(zone_4_number, z4l4_x, z4l4_y, 5, 20, next_x, z4_next_y);
    //L5
    z4l5_x = 1270;
    z4l5_y = 562;
    zoneTextNumbers(zone_4_number, z4l5_x, z4l5_y, 4, 20, next_x, z4_next_y);
    //L6
    z4l6_x = 1284;
    z4l6_y = 586;
    zoneTextNumbers(zone_4_number, z4l6_x, z4l6_y, 1, 20, next_x, z4_next_y);

    // Zone 14
    z14_next_y = 0;

    z14l1_x = 1943;
    z14l1_y = 774;
    zoneTextNumbers(zone_4_number, z14l1_x, z14l1_y, 1, 20, next_x, z14_next_y);

    z14l2_x = 1931;
    z14l2_y = 800;
    zoneTextNumbers(zone_4_number, z14l2_x, z14l2_y, 4, 20, next_x, z14_next_y);

    z14l3_x = 1919;
    z14l3_y = 826;
    zoneTextNumbers(zone_4_number, z14l3_x, z14l3_y, 5, 20, next_x, z14_next_y);

    z14l4_x = 1905;
    z14l4_y = 852;
    zoneTextNumbers(zone_4_number, z14l4_x, z14l4_y, 5, 20, next_x, z14_next_y);

    z14l5_x = 1891;
    z14l5_y = 878;
    zoneTextNumbers(zone_4_number, z14l5_x, z14l5_y, 5, 20, next_x, z14_next_y);

    z14l6_x = 1900;
    z14l6_y = 904;
    zoneTextNumbers(zone_4_number, z14l6_x, z14l6_y, 4, 20, next_x, z14_next_y);

    z14l7_x = 1940;
    z14l7_y = 928;
    zoneTextNumbers(zone_4_number, z14l7_x, z14l7_y, 1, 20, next_x, z14_next_y);

    // Zone 24
    z24l1_x = 1796;
    z24l1_y = 1056;
    zoneTextNumbers(zone_4_number, z24l1_x, z24l1_y, 1);


    // Zone 34
    z34_next_y = 22;

    z34l1_x = 1875;
    z34l1_y = 1230;
    zoneTextNumbers(zone_4_number, z34l1_x, z34l1_y, 2, 20, next_x, z34_next_y);
    // Zone 44
    z44_next_y = -3;

    z44l1_x = 2376;
    z44l1_y = 1390;
    zoneTextNumbers(zone_4_number, z44l1_x, z44l1_y, 2, 20, next_x, z44_next_y);

    z44l2_x = 2332;
    z44l2_y = 1418;
    zoneTextNumbers(zone_4_number, z44l2_x, z44l2_y, 4, 20, next_x, z44_next_y);
    z44l3_x = 2168;
    z44l3_y = 1466;
    zoneTextNumbers(zone_4_number, z44l3_x, z44l3_y, 12, 20, next_x, z44_next_y);

    // Zone 54
    z54_next_y = -4;

    z54l1_x = 1672;
    z54l1_y = 1606;
    zoneTextNumbers(zone_4_number, z54l1_x, z54l1_y, 2, 20, next_x, z54_next_y);

    // Zone 64
    z64_next_y = -7;

    z64l1_x = 140;
    z64l1_y = 1325;
    zoneTextNumbers(zone_4_number, z64l1_x, z64l1_y, 4, 20, next_x, z64_next_y);
    z64l2_x = 145;
    z64l2_y = 1350;
    zoneTextNumbers(zone_4_number, z64l2_x, z64l2_y, 6, 20, next_x, z64_next_y);
    z64l3_x = 150;
    z64l3_y = 1375;
    zoneTextNumbers(zone_4_number, z64l3_x, z64l3_y, 9, 20, next_x, z64_next_y);
    z64l4_x = 155;
    z64l4_y = 1400;
    zoneTextNumbers(zone_4_number, z64l4_x, z64l4_y, 12, 20, next_x, z64_next_y);
    z64l5_x = 160;
    z64l5_y = 1425;
    zoneTextNumbers(zone_4_number, z64l5_x, z64l5_y, 14, 20, next_x, z64_next_y);
    z64l6_x = 167;
    z64l6_y = 1450;
    zoneTextNumbers(zone_4_number, z64l6_x, z64l6_y, 17, 20, next_x, z64_next_y);
    z64l7_x = 173;
    z64l7_y = 1475;
    zoneTextNumbers(zone_4_number, z64l7_x, z64l7_y, 17, 20, next_x, z64_next_y);
    z64l8_x = 178;
    z64l8_y = 1500;
    zoneTextNumbers(zone_4_number, z64l8_x, z64l8_y, 16, 20, next_x, z64_next_y);
    z64l9_x = 182;
    z64l9_y = 1525;
    zoneTextNumbers(zone_4_number, z64l9_x, z64l9_y, 16, 20, next_x, z64_next_y);
    z64l10_x = 205;
    z64l10_y = 1546;
    zoneTextNumbers(zone_4_number, z64l10_x, z64l10_y, 15, 20, next_x, z64_next_y);
    z64l11_x = 234;
    z64l11_y = 1565;
    zoneTextNumbers(zone_4_number, z64l11_x, z64l11_y, 15, 20, next_x, z64_next_y);
    z64l12_x = 258;
    z64l12_y = 1585;
    zoneTextNumbers(zone_4_number, z64l12_x, z64l12_y, 12, 20, next_x, z64_next_y);
    z64l13_x = 286;
    z64l13_y = 1604;
    zoneTextNumbers(zone_4_number, z64l13_x, z64l13_y, 11, 20, next_x, z64_next_y);
    z64l14_x = 318;
    z64l14_y = 1620;
    zoneTextNumbers(zone_4_number, z64l14_x, z64l14_y, 9, 20, next_x, z64_next_y);
    z64l15_x = 342;
    z64l15_y = 1639;
    zoneTextNumbers(zone_4_number, z64l15_x, z64l15_y, 7, 20, next_x, z64_next_y);
    z64l16_x = 368;
    z64l16_y = 1657;
    zoneTextNumbers(zone_4_number, z64l16_x, z64l16_y, 5, 20, next_x, z64_next_y);
    z64l17_x = 393;
    z64l17_y = 1675;
    zoneTextNumbers(zone_4_number, z64l17_x, z64l17_y, 2, 20, next_x, z64_next_y);




  } else if (zone_number == 5) {
    //Zone 5
    z5_next_y = -10;
    // L1
    z5l1_x = 1385;
    z5l1_y = 531;
    zoneTextNumbers(zone_5_number, z5l1_x, z5l1_y, 2, 20, next_x, z5_next_y);

    // Zone 15
    z15_next_y = 0;

    z15l1_x = 2034;
    z15l1_y = 826;
    zoneTextNumbers(zone_5_number, z15l1_x, z15l1_y, 1, 20, next_x, z15_next_y);

    z15l2_x = 2022;
    z15l2_y = 852;
    zoneTextNumbers(zone_5_number, z15l2_x, z15l2_y, 1, 20, next_x, z15_next_y);

    z15l3_x = 2010;
    z15l3_y = 878;
    zoneTextNumbers(zone_5_number, z15l3_x, z15l3_y, 1, 20, next_x, z15_next_y);

    z15l4_x = 1996;
    z15l4_y = 904;
    zoneTextNumbers(zone_5_number, z15l4_x, z15l4_y, 1, 20, next_x, z15_next_y);

    // Zone 25
    z25_next_y = 15;
    z25l1_x = 1880;
    z25l1_y = 1132;
    zoneTextNumbers(zone_5_number, z25l1_x, z25l1_y, 3, 20, next_x, z25_next_y);

    // Zone 35
    z35_next_y = 10;

    z35l1_x = 2136;
    z35l1_y = 1248;
    zoneTextNumbers(zone_5_number, z35l1_x, z35l1_y, 2, 20, next_x, z35_next_y);
    z35l2_x = 2120;
    z35l2_y = 1276;
    zoneTextNumbers(zone_5_number, z35l2_x, z35l2_y, 2, 20, next_x, z35_next_y);

    // Zone 45
    z45_next_y = 0;

    z45l1_x = 1535;
    z45l1_y = 1360;
    zoneTextNumbers(zone_5_number, z45l1_x, z45l1_y, 1, 20, next_x, z45_next_y);
    z45l2_x = 1505;
    z45l2_y = 1386;
    zoneTextNumbers(zone_5_number, z45l2_x, z45l2_y, 4, 20, next_x, z45_next_y);
    z45l3_x = 1550;
    z45l3_y = 1410;
    zoneTextNumbers(zone_5_number, z45l3_x, z45l3_y, 1, 20, next_x, z45_next_y);

    // Zone 55
    z55_next_y = -4;

    z55l1_x = 1787;
    z55l1_y = 1584;
    zoneTextNumbers(zone_5_number, z55l1_x, z55l1_y, 2, 20, next_x, z55_next_y);
    z55l2_x = 1790;
    z55l2_y = 1610;
    zoneTextNumbers(zone_5_number, z55l2_x, z55l2_y, 2, 20, next_x, z55_next_y);
    z55l3_x = 1793;
    z55l3_y = 1636;
    zoneTextNumbers(zone_5_number, z55l3_x, z55l3_y, 2, 20, next_x, z55_next_y);
    z55l4_x = 1796;
    z55l4_y = 1662;
    zoneTextNumbers(zone_5_number, z55l4_x, z55l4_y, 2, 20, next_x, z55_next_y);



  } else if (zone_number == 6) {
    //Zone 6
    z6_next_y = 0;
    // L1
    z6l1_x = 1934;
    z6l1_y = 490;
    zoneTextNumbers(zone_6_number, z6l1_x, z6l1_y, 1, 20, next_x, z6_next_y);

    // L2
    z6l2_x = 1928;
    z6l2_y = 514;
    zoneTextNumbers(zone_6_number, z6l2_x, z6l2_y, 2, 20, next_x, z6_next_y);

    // L3
    z6l3_x = 1916;
    z6l3_y = 538;
    zoneTextNumbers(zone_6_number, z6l3_x, z6l3_y, 4, 20, next_x, z6_next_y);

    // L4
    z6l4_x = 1910;
    z6l4_y = 562;
    zoneTextNumbers(zone_6_number, z6l4_x, z6l4_y, 5, 20, next_x, z6_next_y);

    // L5
    z6l5_x = 1904;
    z6l5_y = 586;
    zoneTextNumbers(zone_6_number, z6l5_x, z6l5_y, 5, 20, next_x, z6_next_y);
    // L6
    z6l6_x = 1894;
    z6l6_y = 610;
    zoneTextNumbers(zone_6_number, z6l6_x, z6l6_y, 5, 20, next_x, z6_next_y);
    // L7
    z6l7_x = 1882;
    z6l7_y = 636;
    zoneTextNumbers(zone_6_number, z6l7_x, z6l7_y, 5, 20, next_x, z6_next_y);
    // l8
    z6l8_x = 1870;
    z6l8_y = 660;
    zoneTextNumbers(zone_6_number, z6l8_x, z6l8_y, 5, 20, next_x, z6_next_y);

    // l9
    z6l9_x = 1860;
    z6l9_y = 684;
    zoneTextNumbers(zone_6_number, z6l9_x, z6l9_y, 5, 20, next_x, z6_next_y);

    // l10
    z6l10_x = 1850;
    z6l10_y = 708;
    zoneTextNumbers(zone_6_number, z6l10_x, z6l10_y, 5, 20, next_x, z6_next_y);

    // l11
    z6l11_x = 1840;
    z6l11_y = 732;
    zoneTextNumbers(zone_6_number, z6l11_x, z6l11_y, 5, 20, next_x, z6_next_y);

    // l12
    z6l12_x = 1830;
    z6l12_y = 756;
    zoneTextNumbers(zone_6_number, z6l12_x, z6l12_y, 5, 20, next_x, z6_next_y);

    // l13
    z6l13_x = 1828;
    z6l13_y = 780;
    zoneTextNumbers(zone_6_number, z6l13_x, z6l13_y, 4, 20, next_x, z6_next_y);

    // l14
    z6l14_x = 1816;
    z6l14_y = 804;
    zoneTextNumbers(zone_6_number, z6l14_x, z6l14_y, 4, 20, next_x, z6_next_y);

    // l15
    z6l15_x = 1806;
    z6l15_y = 828;
    zoneTextNumbers(zone_6_number, z6l15_x, z6l15_y, 4, 20, next_x, z6_next_y);

    // l16
    z6l16_x = 1794;
    z6l16_y = 852;
    zoneTextNumbers(zone_6_number, z6l16_x, z6l16_y, 4, 20, next_x, z6_next_y);

    // l17
    z6l17_x = 1784;
    z6l17_y = 876;
    zoneTextNumbers(zone_6_number, z6l17_x, z6l17_y, 4, 20, next_x, z6_next_y);

    // l18
    z6l18_x = 1774;
    z6l18_y = 900;
    zoneTextNumbers(zone_6_number, z6l18_x, z6l18_y, 4, 20, next_x, z6_next_y);

    // l19
    z6l19_x = 1762;
    z6l19_y = 924;
    zoneTextNumbers(zone_6_number, z6l19_x, z6l19_y, 4, 20, next_x, z6_next_y);

    // l20
    z6l20_x = 1764;
    z6l20_y = 948;
    zoneTextNumbers(zone_6_number, z6l20_x, z6l20_y, 3, 20, next_x, z6_next_y);

    // l21
    z6l21_x = 1792;
    z6l21_y = 972;
    zoneTextNumbers(zone_6_number, z6l21_x, z6l21_y, 1, 20, next_x, z6_next_y);

    // Zone 16
    z16_next_y = 0;

    z16l1_x = 2178;
    z16l1_y = 846;
    zoneTextNumbers(zone_6_number, z16l1_x, z16l1_y, 1, 20, next_x, z16_next_y);

    z16l2_x = 2180;
    z16l2_y = 870;
    zoneTextNumbers(zone_6_number, z16l2_x, z16l2_y, 2, 20, next_x, z16_next_y);

    // Zone 26
    z26_next_y = 0;

    z26l1_x = 1962;
    z26l1_y = 1141;
    zoneTextNumbers(zone_6_number, z26l1_x, z26l1_y, 2, 20, next_x, z26_next_y);

    z26l2_x = 1950;
    z26l2_y = 1167;
    zoneTextNumbers(zone_6_number, z26l2_x, z26l2_y, 2, 20, next_x, z26_next_y);

    z26l3_x = 1942;
    z26l3_y = 1190;
    zoneTextNumbers(zone_6_number, z26l3_x, z26l3_y, 2, 20, next_x, z26_next_y);

    // Zone 36
    z36_next_y = 10;

    z36l1_x = 2233;
    z36l1_y = 1300;
    zoneTextNumbers(zone_6_number, z36l1_x, z36l1_y, 2, 20, next_x, z36_next_y);
    z36l2_x = 2216;
    z36l2_y = 1326;
    zoneTextNumbers(zone_6_number, z36l2_x, z36l2_y, 2, 20, next_x, z36_next_y);

    // Zone 46
    z46_next_y = -25;

    z46l1_x = 1870;
    z46l1_y = 1430;
    zoneTextNumbers(zone_6_number, z46l1_x, z46l1_y, 2, 20, next_x, z46_next_y);

    // Zone 56
    z56_next_y = 8;

    z56l1_x = 1928;
    z56l1_y = 1638;
    zoneTextNumbers(zone_6_number, z56l1_x, z56l1_y, 1, 20, next_x, z56_next_y);
    z56l2_x = 1912;
    z56l2_y = 1664;
    zoneTextNumbers(zone_6_number, z56l2_x, z56l2_y, 3, 20, next_x, z56_next_y);

  } else if (zone_number == 7) {

    //Zone 7
    // L1
    z7l1_x = 2442;
    z7l1_y = 490;
    zoneTextNumbers(zone_7_number, z7l1_x, z7l1_y, 1, 20, next_x);

    // L2
    z7l2_x = 2430;
    z7l2_y = 512;
    zoneTextNumbers(zone_7_number, z7l2_x, z7l2_y, 8, 20, next_x);

    // L3
    z7l3_x = 2420;
    z7l3_y = 536;
    zoneTextNumbers(zone_7_number, z7l3_x, z7l3_y, 9, 20, next_x);

    // L4
    z7l4_x = 2410;
    z7l4_y = 560;
    zoneTextNumbers(zone_7_number, z7l4_x, z7l4_y, 9, 20, next_x);

    // L5
    z7l5_x = 2400;
    z7l5_y = 584;
    zoneTextNumbers(zone_7_number, z7l5_x, z7l5_y, 10, 20, next_x);

    // L6
    z7l6_x = 2390;
    z7l6_y = 608;
    zoneTextNumbers(zone_7_number, z7l6_x, z7l6_y, 10, 20, next_x);

    // L7
    z7l7_x = 2380;
    z7l7_y = 632;
    zoneTextNumbers(zone_7_number, z7l7_x, z7l7_y, 11, 20, next_x);

    // L8
    z7l8_x = 2370;
    z7l8_y = 656;
    zoneTextNumbers(zone_7_number, z7l8_x, z7l8_y, 11, 20, next_x);

    // L9
    z7l9_x = 2360;
    z7l9_y = 680;
    zoneTextNumbers(zone_7_number, z7l9_x, z7l9_y, 12, 20, next_x);

    // L10
    z7l10_x = 2416;
    z7l10_y = 712;
    zoneTextNumbers(zone_7_number, z7l10_x, z7l10_y, 9, 20, next_x);

    // L11
    z7l11_x = 2474;
    z7l11_y = 742;
    zoneTextNumbers(zone_7_number, z7l11_x, z7l11_y, 6, 20, next_x);

    // Zone 17

    z17l1_x = 1184;
    z17l1_y = 1000;
    zoneTextNumbers(zone_7_number, z17l1_x, z17l1_y, 1);

    z17l2_x = 1178;
    z17l2_y = 1026;
    zoneTextNumbers(zone_7_number, z17l2_x, z17l2_y, 4);

    z17l3_x = 1172;
    z17l3_y = 1052;
    zoneTextNumbers(zone_7_number, z17l3_x, z17l3_y, 5);

    z17l4_x = 1166;
    z17l4_y = 1078;
    zoneTextNumbers(zone_7_number, z17l4_x, z17l4_y, 4);

    z17l5_x = 1160;
    z17l5_y = 1104;
    zoneTextNumbers(zone_7_number, z17l5_x, z17l5_y, 4);

    z17l6_x = 1156;
    z17l6_y = 1130;
    zoneTextNumbers(zone_7_number, z17l6_x, z17l6_y, 3);

    // Zone 27
    z27_next_y = -2;

    z27l1_x = 2446;
    z27l1_y = 1127;
    zoneTextNumbers(zone_7_number, z27l1_x, z27l1_y, 3, 20, next_x, z27_next_y);

    z27l2_x = 2442;
    z27l2_y = 1153;
    zoneTextNumbers(zone_7_number, z27l2_x, z27l2_y, 4, 20, next_x, z27_next_y);

    z27l3_x = 2438;
    z27l3_y = 1179;
    zoneTextNumbers(zone_7_number, z27l3_x, z27l3_y, 5, 20, next_x, z27_next_y);

    z27l4_x = 2434;
    z27l4_y = 1204;
    zoneTextNumbers(zone_7_number, z27l4_x, z27l4_y, 6, 20, next_x, z27_next_y);

    z27l5_x = 2418;
    z27l5_y = 1228;
    zoneTextNumbers(zone_7_number, z27l5_x, z27l5_y, 6, 20, next_x, z27_next_y);

    // Zone 37
    z37_next_y = 3.5;

    z37l1_x = 2738;
    z37l1_y = 1290;
    zoneTextNumbers(zone_7_number, z37l1_x, z37l1_y, 8, 20, next_x, z37_next_y);
    z37l2_x = 2742;
    z37l2_y = 1316;
    zoneTextNumbers(zone_7_number, z37l2_x, z37l2_y, 7, 20, next_x, z37_next_y);
    z37l3_x = 2750;
    z37l3_y = 1342;
    zoneTextNumbers(zone_7_number, z37l3_x, z37l3_y, 5, 20, next_x, z37_next_y);
    z37l4_x = 2756;
    z37l4_y = 1368;
    zoneTextNumbers(zone_7_number, z37l4_x, z37l4_y, 4, 20, next_x, z37_next_y);
    z37l5_x = 2762;
    z37l5_y = 1394;
    zoneTextNumbers(zone_7_number, z37l5_x, z37l5_y, 3, 20, next_x, z37_next_y);
    z37l6_x = 2762;
    z37l6_y = 1420;
    zoneTextNumbers(zone_7_number, z37l6_x, z37l6_y, 2, 20, next_x, z37_next_y);
    z37l7_x = 2762;
    z37l7_y = 1446;
    zoneTextNumbers(zone_7_number, z37l7_x, z37l7_y, 1, 20, next_x, z37_next_y);

    // Zone 47
    z47_next_y = 13;

    z47l1_x = 1560;
    z47l1_y = 1448;
    zoneTextNumbers(zone_7_number, z47l1_x, z47l1_y, 4, 20, next_x, z47_next_y);
    z47l2_x = 1550;
    z47l2_y = 1470;
    zoneTextNumbers(zone_7_number, z47l2_x, z47l2_y, 3, 20, next_x, z47_next_y);

    // Zone 57
    z57_next_y = 0;

    z57l1_x = 2156;
    z57l1_y = 1652;
    zoneTextNumbers(zone_7_number, z57l1_x, z57l1_y, 1, 20, next_x, z57_next_y);
    z57l2_x = 2142;
    z57l2_y = 1678;
    zoneTextNumbers(zone_7_number, z57l2_x, z57l2_y, 2, 20, next_x, z57_next_y);
    z57l3_x = 2132;
    z57l3_y = 1704;
    zoneTextNumbers(zone_7_number, z57l3_x, z57l3_y, 2, 20, next_x, z57_next_y);





  } else if (zone_number == 8) {
    //Zone 8
    z8_next_y = -2.5;
    // L1
    z8l1_x = 3640;
    z8l1_y = 674;
    zoneTextNumbers(zone_8_number, z8l1_x, z8l1_y, 9, 20, next_x, z8_next_y);

    // L2
    z8l2_x = 3624;
    z8l2_y = 700;
    zoneTextNumbers(zone_8_number, z8l2_x, z8l2_y, 10, 20, next_x, z8_next_y);

    // L3
    z8l3_x = 3614;
    z8l3_y = 726;
    zoneTextNumbers(zone_8_number, z8l3_x, z8l3_y, 10, 20, next_x, z8_next_y);

    // L4
    z8l4_x = 3596;
    z8l4_y = 752;
    zoneTextNumbers(zone_8_number, z8l4_x, z8l4_y, 11, 20, next_x, z8_next_y);

    // L5
    z8l5_x = 3588;
    z8l5_y = 778;
    zoneTextNumbers(zone_8_number, z8l5_x, z8l5_y, 10, 20, next_x, z8_next_y);

    // L6
    z8l6_x = 3572;
    z8l6_y = 804;
    zoneTextNumbers(zone_8_number, z8l6_x, z8l6_y, 10, 20, next_x, z8_next_y);

    // L7
    z8l7_x = 3554;
    z8l7_y = 830;
    zoneTextNumbers(zone_8_number, z8l7_x, z8l7_y, 10, 20, next_x, z8_next_y);

    // L8
    z8l8_x = 3542;
    z8l8_y = 856;
    zoneTextNumbers(zone_8_number, z8l8_x, z8l8_y, 9, 20, next_x, z8_next_y);

    // L9
    z8l9_x = 3530;
    z8l9_y = 882;
    zoneTextNumbers(zone_8_number, z8l9_x, z8l9_y, 9, 20, next_x, z8_next_y);

    // L10
    z8l10_x = 3514;
    z8l10_y = 908;
    zoneTextNumbers(zone_8_number, z8l10_x, z8l10_y, 9, 20, next_x, z8_next_y);

    // L11
    z8l11_x = 3508;
    z8l11_y = 934;
    zoneTextNumbers(zone_8_number, z8l11_x, z8l11_y, 8, 20, next_x, z8_next_y);

    // L12
    z8l12_x = 3498;
    z8l12_y = 960;
    zoneTextNumbers(zone_8_number, z8l12_x, z8l12_y, 8, 20, next_x, z8_next_y);

    // L13
    z8l13_x = 3488;
    z8l13_y = 986;
    zoneTextNumbers(zone_8_number, z8l13_x, z8l13_y, 8, 20, next_x, z8_next_y);

    // L14
    z8l14_x = 3484;
    z8l14_y = 1012;
    zoneTextNumbers(zone_8_number, z8l14_x, z8l14_y, 7, 20, next_x, z8_next_y);

    // L15
    z8l15_x = 3474;
    z8l15_y = 1038;
    zoneTextNumbers(zone_8_number, z8l15_x, z8l15_y, 7, 20, next_x, z8_next_y);

    // L16
    z8l16_x = 3462;
    z8l16_y = 1064;
    zoneTextNumbers(zone_8_number, z8l16_x, z8l16_y, 7, 20, next_x, z8_next_y);

    // L17
    z8l17_x = 3448;
    z8l17_y = 1090;
    zoneTextNumbers(zone_8_number, z8l17_x, z8l17_y, 7, 20, next_x, z8_next_y);

    // L18
    z8l18_x = 3434;
    z8l18_y = 1116;
    zoneTextNumbers(zone_8_number, z8l18_x, z8l18_y, 7, 20, next_x, z8_next_y);

    // L19
    z8l19_x = 3430;
    z8l19_y = 1142;
    zoneTextNumbers(zone_8_number, z8l19_x, z8l19_y, 6, 20, next_x, z8_next_y);

    // Zone 18

    z18l1_x = 1533;
    z18l1_y = 1014;
    zoneTextNumbers(zone_8_number, z18l1_x, z18l1_y, 2);

    z18l2_x = 1526;
    z18l2_y = 1040;
    zoneTextNumbers(zone_8_number, z18l2_x, z18l2_y, 2);

    // Zone 28
    z28_next_y = -0;

    z28l1_x = 1622;
    z28l1_y = 1148;
    zoneTextNumbers(zone_8_number, z28l1_x, z28l1_y, 1, 20, next_x, z28_next_y);

    z28l2_x = 1596;
    z28l2_y = 1174;
    zoneTextNumbers(zone_8_number, z28l2_x, z28l2_y, 4, 20, next_x, z28_next_y);

    z28l3_x = 1558;
    z28l3_y = 1200;
    zoneTextNumbers(zone_8_number, z28l3_x, z28l3_y, 5, 20, next_x, z28_next_y);

    z28l4_x = 1530;
    z28l4_y = 1226;
    zoneTextNumbers(zone_8_number, z28l4_x, z28l4_y, 5, 20, next_x, z28_next_y);

    z28l5_x = 1566;
    z28l5_y = 1252;
    zoneTextNumbers(zone_8_number, z28l5_x, z28l5_y, 2, 20, next_x, z28_next_y);

    // Zone 38
    z38_next_y = 0;

    z38l1_x = 2940;
    z38l1_y = 1342;
    zoneTextNumbers(zone_8_number, z38l1_x, z38l1_y, 3, 20, next_x, z38_next_y);
    z38l2_x = 2925;
    z38l2_y = 1368;
    zoneTextNumbers(zone_8_number, z38l2_x, z38l2_y, 7, 20, next_x, z38_next_y);
    z38l3_x = 2900;
    z38l3_y = 1394;
    zoneTextNumbers(zone_8_number, z38l3_x, z38l3_y, 11, 20, next_x, z38_next_y);
    z38l4_x = 2872;
    z38l4_y = 1420;
    zoneTextNumbers(zone_8_number, z38l4_x, z38l4_y, 16, 20, next_x, z38_next_y);
    z38l5_x = 2842;
    z38l5_y = 1446;
    zoneTextNumbers(zone_8_number, z38l5_x, z38l5_y, 30, 20, next_x, z38_next_y);
    z38l6_x = 2824;
    z38l6_y = 1472;
    zoneTextNumbers(zone_8_number, z38l6_x, z38l6_y, 28, 20, next_x, z38_next_y);
    z38l7_x = 2868;
    z38l7_y = 1498;
    zoneTextNumbers(zone_8_number, z38l7_x, z38l7_y, 24, 20, next_x, z38_next_y);
    z38l8_x = 2940;
    z38l8_y = 1524;
    zoneTextNumbers(zone_8_number, z38l8_x, z38l8_y, 18, 20, next_x, z38_next_y);
    z38l9_x = 3008;
    z38l9_y = 1550;
    zoneTextNumbers(zone_8_number, z38l9_x, z38l9_y, 12, 20, next_x, z38_next_y);
    z38l10_x = 3082;
    z38l10_y = 1576;
    zoneTextNumbers(zone_8_number, z38l10_x, z38l10_y, 6, 20, next_x, z38_next_y);
    z38l11_x = 3136;
    z38l11_y = 1600;
    zoneTextNumbers(zone_8_number, z38l11_x, z38l11_y, 1, 20, next_x, z38_next_y);


    // Zone 48
    z48_next_y = -12;

    z48l1_x = 1695;
    z48l1_y = 1445;
    zoneTextNumbers(zone_8_number, z48l1_x, z48l1_y, 3, 20, next_x, z48_next_y);
    z48l2_x = 1700;
    z48l2_y = 1468;
    zoneTextNumbers(zone_8_number, z48l2_x, z48l2_y, 2, 20, next_x, z48_next_y);

    // Zone 58
    z58_next_y = -19;

    z58l1_x = 2227;
    z58l1_y = 1641;
    zoneTextNumbers(zone_8_number, z58l1_x, z58l1_y, 2, 20, next_x, z58_next_y);


  } else if (zone_number == 9) {
    z9l1_x = 495;
    z9l1_y = 380;
    zoneTextNumbers(zone_9_number, z9l1_x, z9l1_y, 1, 20, next_x);
    z9l2_x = 470;
    z9l2_y = 406;
    zoneTextNumbers(zone_9_number, z9l2_x, z9l2_y, 6, 20, next_x);
    z9l3_x = 445;
    z9l3_y = 432;
    zoneTextNumbers(zone_9_number, z9l3_x, z9l3_y, 8, 20, next_x);
    z9l4_x = 425;
    z9l4_y = 458;
    zoneTextNumbers(zone_9_number, z9l4_x, z9l4_y, 9, 20, next_x);
    z9l5_x = 410;
    z9l5_y = 484;
    zoneTextNumbers(zone_9_number, z9l5_x, z9l5_y, 10, 20, next_x);
    z9l6_x = 385;
    z9l6_y = 510;
    zoneTextNumbers(zone_9_number, z9l6_x, z9l6_y, 12, 20, next_x);
    z9l7_x = 360;
    z9l7_y = 536;
    zoneTextNumbers(zone_9_number, z9l7_x, z9l7_y, 14, 20, next_x);
    z9l8_x = 335;
    z9l8_y = 562;
    zoneTextNumbers(zone_9_number, z9l8_x, z9l8_y, 15, 20, next_x);
    z9l9_x = 310;
    z9l9_y = 588;
    zoneTextNumbers(zone_9_number, z9l9_x, z9l9_y, 16, 20, next_x);
    z9l10_x = 295;
    z9l10_y = 614;
    zoneTextNumbers(zone_9_number, z9l10_x, z9l10_y, 16, 20, next_x);
    z9l11_x = 270;
    z9l11_y = 640;
    zoneTextNumbers(zone_9_number, z9l11_x, z9l11_y, 16, 20, next_x);
    z9l12_x = 245;
    z9l12_y = 666;
    zoneTextNumbers(zone_9_number, z9l12_x, z9l12_y, 17, 20, next_x);
    z9l13_x = 220;
    z9l13_y = 692;
    zoneTextNumbers(zone_9_number, z9l13_x, z9l13_y, 17, 20, next_x);
    z9l14_x = 245;
    z9l14_y = 722;
    zoneTextNumbers(zone_9_number, z9l14_x, z9l14_y, 15, 20, next_x);
    z9l15_x = 305;
    z9l15_y = 754;
    zoneTextNumbers(zone_9_number, z9l15_x, z9l15_y, 12, 20, next_x);
    z9l16_x = 355;
    z9l16_y = 784;
    zoneTextNumbers(zone_9_number, z9l16_x, z9l16_y, 8, 20, next_x);
    z9l17_x = 420;
    z9l17_y = 815;
    zoneTextNumbers(zone_9_number, z9l17_x, z9l17_y, 5, 20, next_x);
    z9l18_x = 465;
    z9l18_y = 843;
    zoneTextNumbers(zone_9_number, z9l18_x, z9l18_y, 2, 20, next_x);


    // Zone 19
    z19l1_x = 1604;
    z19l1_y = 1000;
    zoneTextNumbers(zone_9_number, z19l1_x, z19l1_y, 2);

    // Zone 29
    z29_next_y = -10;

    z29l1_x = 1758;
    z29l1_y = 1186;
    zoneTextNumbers(zone_9_number, z29l1_x, z29l1_y, 2, 20, next_x, z29_next_y);

    // Zone 39
    z39_next_y = 0;

    z39l1_x = 1741;
    z39l1_y = 1304;
    zoneTextNumbers(zone_9_number, z39l1_x, z39l1_y, 1, 20, next_x, z39_next_y);
    z39l2_x = 1710;
    z39l2_y = 1332;
    zoneTextNumbers(zone_9_number, z39l2_x, z39l2_y, 4, 20, next_x, z39_next_y);
    z39l3_x = 1730;
    z39l3_y = 1358;
    zoneTextNumbers(zone_9_number, z39l3_x, z39l3_y, 2, 20, next_x, z39_next_y);

    // Zone 49
    z49_next_y = -2;

    z49l1_x = 1800;
    z49l1_y = 1459;
    zoneTextNumbers(zone_9_number, z49l1_x, z49l1_y, 2, 20, next_x, z49_next_y);
    z49l2_x = 1796;
    z49l2_y = 1485;
    zoneTextNumbers(zone_9_number, z49l2_x, z49l2_y, 4, 20, next_x, z49_next_y);
    z49l3_x = 1800;
    z49l3_y = 1512;
    zoneTextNumbers(zone_9_number, z49l3_x, z49l3_y, 6, 20, next_x, z49_next_y);

    // Zone 59
    z59_next_y = 4;

    z59l1_x = 2385;
    z59l1_y = 1639;
    zoneTextNumbers(zone_9_number, z59l1_x, z59l1_y, 3, 20, next_x, z59_next_y);
    z59l2_x = 2378;
    z59l2_y = 1665;
    zoneTextNumbers(zone_9_number, z59l2_x, z59l2_y, 3, 20, next_x, z59_next_y);
    z59l3_x = 2370;
    z59l3_y = 1691;
    zoneTextNumbers(zone_9_number, z59l3_x, z59l3_y, 3, 20, next_x, z59_next_y);
    z59l4_x = 2365;
    z59l4_y = 1717;
    zoneTextNumbers(zone_9_number, z59l4_x, z59l4_y, 2, 20, next_x, z59_next_y);
    z59l5_x = 2358;
    z59l5_y = 1743;
    zoneTextNumbers(zone_9_number, z59l5_x, z59l5_y, 2, 20, next_x, z59_next_y);





  } else if (zone_number == 10) {
    z10_next_y = 0;
    // L1
    z10l1_x = 602;
    z10l1_y = 728;
    zoneTextNumbers(zone_10_number, z10l1_x, z10l1_y, 3, 20, next_x, z10_next_y);

    z10l2_x = 590;
    z10l2_y = 752;
    zoneTextNumbers(zone_10_number, z10l2_x, z10l2_y, 11, 20, next_x, z10_next_y);

    z10l3_x = 580;
    z10l3_y = 778;
    zoneTextNumbers(zone_10_number, z10l3_x, z10l3_y, 15, 20, next_x, z10_next_y);

    z10l4_x = 558;
    z10l4_y = 804;
    zoneTextNumbers(zone_10_number, z10l4_x, z10l4_y, 15, 20, next_x, z10_next_y);

    z10l5_x = 545;
    z10l5_y = 830;
    zoneTextNumbers(zone_10_number, z10l5_x, z10l5_y, 13, 20, next_x, z10_next_y);

    z10l6_x = 530;
    z10l6_y = 856;
    zoneTextNumbers(zone_10_number, z10l6_x, z10l6_y, 12, 20, next_x, z10_next_y);

    z10l7_x = 545;
    z10l7_y = 882;
    zoneTextNumbers(zone_10_number, z10l7_x, z10l7_y, 9, 20, next_x, z10_next_y);

    z10l8_x = 594;
    z10l8_y = 908;
    zoneTextNumbers(zone_10_number, z10l8_x, z10l8_y, 4, 20, next_x, z10_next_y);

    z10l9_x = 620;
    z10l9_y = 930;
    zoneTextNumbers(zone_10_number, z10l9_x, z10l9_y, 1, 20, next_x, z10_next_y);

    // Zone 20
    z20l1_x = 1855;
    z20l1_y = 944;
    zoneTextNumbers(zone_10_number, z20l1_x, z20l1_y, 2);

    z20l2_x = 1842;
    z20l2_y = 970;
    zoneTextNumbers(zone_10_number, z20l2_x, z20l2_y, 4);

    z20l3_x = 1875;
    z20l3_y = 998;
    zoneTextNumbers(zone_10_number, z20l3_x, z20l3_y, 2);

    // Zone 30
    z30_next_y = -10;

    z30l1_x = 1855;
    z30l1_y = 1180;
    zoneTextNumbers(zone_10_number, z30l1_x, z30l1_y, 1, 20, next_x, z30_next_y);


    // Zone 40
    z40_next_y = 18;

    z40l1_x = 1838;
    z40l1_y = 1302;
    zoneTextNumbers(zone_10_number, z40l1_x, z40l1_y, 2, 20, next_x, z40_next_y);

    // Zone 50
    z50_next_y = -2;

    z50l1_x = 1972;
    z50l1_y = 1495;
    zoneTextNumbers(zone_10_number, z50l1_x, z50l1_y, 3, 20, next_x, z50_next_y);

    // Zone 60
    z60_next_y = 8;

    z60l1_x = 1622;
    z60l1_y = 1715;
    zoneTextNumbers(zone_10_number, z60l1_x, z60l1_y, 2, 20, next_x, z60_next_y);




  }
}

function draw() {
  background(bg);
  drawZone(1);
  drawZone(2);
  drawZone(3);
  drawZone(4);
  drawZone(5);
  drawZone(6);
  drawZone(7);
  drawZone(8);
  drawZone(9);
  drawZone(10);






  if (millis() >= 1200 + timer) {
    zone_1_number = randomNumbers();
    zone_2_number = randomNumbers();
    zone_3_number = randomNumbers();
    zone_4_number = randomNumbers();
    zone_5_number = randomNumbers();
    zone_6_number = randomNumbers();
    zone_7_number = randomNumbers();
    zone_8_number = randomNumbers();
    zone_9_number = randomNumbers();
    zone_10_number = randomNumbers();

    if (sound.isLoaded() && soundPlayFlag == false) {
      sound.play(0, 1, 0.4);
      soundPlayFlag = true;
    }

    // sound.play(0, 1, 1, int(random(sound_duration)), 0.7);
    beep_sound.play(0, 1, 0.025, 0.3, 0.7);

    timer = millis();
  }

}


function mousePressed() {
  userStartAudio();
}

function touchStarted() {
  userStartAudio();
}

function alertLoaded() {
  console.log("loaded");
  alert("loaded");
}

function alertMotLoaded() {
  console.log("Not loaded");
  alert("Not loaded");
}