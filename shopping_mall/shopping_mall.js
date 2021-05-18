let sound, amplitude, img;
let cardOneChanged = false;
let cardTwoChanged = false;
let cardThreeChanged = false;
let cardFourChanged = false;
let cardFiveChanged = false;
let cardSixChanged = false;
let cardSevenChanged = false;
let cardChanged = false;
let cardSet = 1;


function preload() {
  sound = loadSound('assets/sound.mp3');
  loadImage('assets/4_B/1.jpg');
  loadImage('assets/4_B/2.jpg');
  loadImage('assets/4_B/3.jpg');
  loadImage('assets/4_B/4.jpg');
  loadImage('assets/4_B/5.jpg');
  loadImage('assets/4_B/6.jpg');
  loadImage('assets/4_B/7.jpg');
  loadImage('assets/4_C/1.jpg');
  loadImage('assets/4_C/2.jpg');
  loadImage('assets/4_C/3.jpg');
  loadImage('assets/4_C/4.jpg');
  loadImage('assets/4_C/5.jpg');
  loadImage('assets/4_C/6.jpg');
  loadImage('assets/4_C/7.jpg');
  loadImage('assets/4_D/1.jpg');
  loadImage('assets/4_D/2.jpg');
  loadImage('assets/4_D/3.jpg');
  loadImage('assets/4_D/4.jpg');
  loadImage('assets/4_D/5.jpg');
  loadImage('assets/4_D/6.jpg');
  loadImage('assets/4_D/7.jpg');
  loadImage('assets/4_E/1.jpg');
  loadImage('assets/4_E/2.jpg');
  loadImage('assets/4_E/3.jpg');
  loadImage('assets/4_E/4.jpg');
  loadImage('assets/4_E/5.jpg');
  loadImage('assets/4_E/6.jpg');
  loadImage('assets/4_E/7.jpg');
  
}

function setup() {
  soundDuration = sound.duration() - 1;
}
function draw() {}


function mouseClicked() {
  if (cardSet == 1) {
    cardOne.src = "assets/4_A/1.jpg";
    cardTwo.src = "assets/4_A/2.jpg";
    cardThree.src = "assets/4_A/3.jpg";
    cardFour.src = "assets/4_A/4.jpg";
    cardFive.src = "assets/4_A/5.jpg";
    cardSix.src = "assets/4_A/6.jpg";
    cardSeven.src = "assets/4_A/7.jpg";
    cardSet = 2;
  } else if (cardSet == 2) {
    cardOne.src = "assets/4_B/1.jpg";
    cardTwo.src = "assets/4_B/2.jpg";
    cardThree.src = "assets/4_B/3.jpg";
    cardFour.src = "assets/4_B/4.jpg";
    cardFive.src = "assets/4_B/5.jpg";
    cardSix.src = "assets/4_B/6.jpg";
    cardSeven.src = "assets/4_B/7.jpg";
    cardSet = 3;
  } else if (cardSet == 3) {
    cardOne.src = "assets/4_C/1.jpg";
    cardTwo.src = "assets/4_C/2.jpg";
    cardThree.src = "assets/4_C/3.jpg";
    cardFour.src = "assets/4_C/4.jpg";
    cardFive.src = "assets/4_C/5.jpg";
    cardSix.src = "assets/4_C/6.jpg";
    cardSeven.src = "assets/4_C/7.jpg";
    cardSet = 4;
  } else if (cardSet == 4) {
    cardOne.src = "assets/4_D/1.jpg";
    cardTwo.src = "assets/4_D/2.jpg";
    cardThree.src = "assets/4_D/3.jpg";
    cardFour.src = "assets/4_D/4.jpg";
    cardFive.src = "assets/4_D/5.jpg";
    cardSix.src = "assets/4_D/6.jpg";
    cardSeven.src = "assets/4_D/7.jpg";
    cardSet = 5;
  } else if (cardSet == 5) {
    cardOne.src = "assets/4_E/1.jpg";
    cardTwo.src = "assets/4_E/2.jpg";
    cardThree.src = "assets/4_E/3.jpg";
    cardFour.src = "assets/4_E/4.jpg";
    cardFive.src = "assets/4_E/5.jpg";
    cardSix.src = "assets/4_E/6.jpg";
    cardSeven.src = "assets/4_E/7.jpg";
    cardSet = 1;
  } 
  sound.play(0, 1, 1, int(random(soundDuration)), 1);
}

function clickCard(e) {
  // soundDuration = sound.duration() - 1;

  // if (e == 1) {
  //   if (cardOneChanged) {
  //     cardOne.src = "assets/A/1.jpg";
  //     cardOneChanged = false;
  //   } else {
  //     cardOne.src = "assets/B/1.jpg";
  //     cardOneChanged = true;
  //   }
  // } else if (e == 2) {
  //   if (cardTwoChanged) {
  //     cardTwo.src = "assets/A/2.jpg";
  //     cardTwoChanged = false;
  //   } else {
  //     cardTwo.src = "assets/B/2.jpg";
  //     cardTwoChanged = true;
  //   }
  // } else if (e == 3) {
  //   if (cardThreeChanged) {
  //     cardThree.src = "assets/A/3.jpg";
  //     cardThreeChanged = false;
  //   } else {
  //     cardThree.src = "assets/B/3.jpg";
  //     cardThreeChanged = true;
  //   }
  // } else if (e == 4) {
  //   if (cardFourChanged) {
  //     cardFour.src = "assets/A/4.jpg";
  //     cardFourChanged = false;
  //   } else {
  //     cardFour.src = "assets/B/4.jpg";
  //     cardFourChanged = true;
  //   }
  // } else if (e == 5) {
  //   if (cardFiveChanged) {
  //     cardFive.src = "assets/A/5.jpg";
  //     cardFiveChanged = false;
  //   } else {
  //     cardFive.src = "assets/B/5.jpg";
  //     cardFiveChanged = true;
  //   }
  // } else if (e == 6) {
  //   if (cardSixChanged) {
  //     cardSix.src = "assets/A/6.jpg";
  //     cardSixChanged = false;
  //   } else {
  //     cardSix.src = "assets/B/6.jpg";
  //     cardSixChanged = true;
  //   }
  // } else if (e == 7) {
  //   if (cardSevenChanged) {
  //     cardSeven.src = "assets/A/7.jpg";
  //     cardSevenChanged = false;
  //   } else {
  //     cardSeven.src = "assets/B/7.jpg";
  //     cardSevenChanged = true;
  //   }
  // } else {}
  // sound.play(0, 1, 1, int(random(soundDuration)), 1);
}
