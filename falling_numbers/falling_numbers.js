var sound, amplitude, img;
var interval = 2;
var pieceList_1 = [];
var pieceList_2 = [];
var pieceList_5 = [];
//add pieceList_xx = [];
var piecelimit = 500;
var eachpiecelimit = 10;
var isSoundPlaying = false;

var cardSet = 1;

var isFirstScreen = true;
var isThirdScreen = false;
var isFourthScreen = false;


var isNinethScreen = false;
let permissionGranted = false;
let cx, cy;

let timer = 0;
let touched = false;
let textErased = false;

// Below are for thirdApp
var renderedImageList = [];
var ImageMaxWidth = [];
var ImageCount = 200; // Set Image count
var randomImageArray = [];



function preload() {
  sound_1 = loadSound('assets/converted_sound_1.mp3');
  sound_2 = loadSound('assets/converted_sound_2.mp3');
  sound_3 = loadSound('assets/converted_sound_3.mp3');
  sound_4 = loadSound('assets/converted_sound_4.mp3');
  sound_5 = loadSound('assets/converted_sound_5.mp3');
  sound_9 = loadSound('assets/converted_sound_9.mp3');
  img1_1 = loadImage('assets/1_1.png');
  img1_2 = loadImage('assets/1_2.png');
  img1_3 = loadImage('assets/1_3.png');
  img1_4 = loadImage('assets/1_4.png');
  img2_1 = loadImage('assets/1_1.png');
  img2_2 = loadImage('assets/1_2.png');
  img2_3 = loadImage('assets/1_3.png');
  img2_4 = loadImage('assets/1_4.png');

  for (var i = 1; i < ImageCount; i++) {
    temp_img = loadImage('assets/3/' + i + '.png');
    randomImageArray.push(temp_img);
  }
  bg3 = loadImage('assets/3/bgimg.jpeg');

  // add imagexx_yy
  bg1_1 = loadImage('assets/bg_1_1.jpg');
  bg1_2 = loadImage('assets/bg_1_2.jpg');
  bg1_3 = loadImage('assets/bg_1_3.jpg');
  bg1_4 = loadImage('assets/bg_1_4.jpg');
  bg1_5 = loadImage('assets/bg_1_5.jpg');
  bg2_1 = loadImage('assets/bg_2_1.jpg');
  bg2_2 = loadImage('assets/bg_2_2.jpg');
  bg2_3 = loadImage('assets/bg_2_3.jpg');
  bg2_4 = loadImage('assets/bg_2_4.jpg');

  loadImage('assets/4_B/1.jpg');
  loadImage('assets/4_B/2.jpg');
  loadImage('assets/4_B/3.jpg');
  loadImage('assets/4_B/4.jpg');
  loadImage('assets/4_B/5.jpg');
  loadImage('assets/4_B/6.jpg');
  loadImage('assets/4_B/7.jpg');

  bg5_1 = loadImage('assets/bg_5_1.jpg');
  bg5_2 = loadImage('assets/bg_5_2.jpg');
  bg5_3 = loadImage('assets/bg_5_3.jpg');
  bg5_4 = loadImage('assets/bg_5_4.jpg');

  img9_1 = loadImage('assets/9/1_1.png');
  img9_2 = loadImage('assets/9/1_2.png');
  img9_3 = loadImage('assets/9/1_3.png');
  img9_4 = loadImage('assets/9/1_4.png');
  img9_5 = loadImage('assets/9/1_5.png');
  img9_6 = loadImage('assets/9/1_6.png');
  img9_7 = loadImage('assets/9/1_7.png');
  // add bgxx_yy
  startImage = loadImage('assets/start_image.jpeg');
  randomImageArray_1 = [img1_1, img1_2, img1_3, img1_4];
  randomImageArray_2 = [img1_1, img1_2, img1_3, img1_4];

  randomImageArray_9 = [img9_2,img9_3,img9_4,img9_5,img9_1,img9_6,img9_7];

  randomImageArray_5 = [img1_1, img1_2, img1_3, img1_4];
  // add randomImageArray_xx

  appNumber = 0;
}

function setup() {
  var cnv = createCanvas(648, 864);

  // cnv.mouseClicked(toggleSound);

  cx = width / 2;
  cy = height / 2;

    // DeviceOrientationEvent, DeviceMotionEvent
    if (typeof (DeviceOrientationEvent) !== 'undefined' && typeof (DeviceOrientationEvent.requestPermission) === 'function') {
      // ios 13 device
  
      DeviceOrientationEvent.requestPermission()
        .catch(() => {
          // show permission dialog only the first time
          let button = createButton("click to allow access to sensors");
          button.style("font-size", "24px");
          button.center();
          button.mousePressed(requestAccess);
          throw error;
        })
        .then(() => {
          // on any subsequent visits
          permissionGranted = true;
  
          // sound.play();
        })
    } else {
      // non ios 13 device
      textSize(48);
      // text("non ios 13 device", 100, 100);
      permissionGranted = true;
  
      // sound.play();
    }

    cnv.parent('canvasForHTML');

  textSize(10); // Text Size
  setInterval(AddNumberToList_1, 100);
  setInterval(AddNumberToList_2, 100);
  setInterval(AddNumberToList_5, 100);
  // add setInterval(AddNumberToList_xx, 100);
  amplitude_1 = new p5.Amplitude();
  amplitude_1.setInput(sound_1);
  amplitude_2 = new p5.Amplitude();
  amplitude_2.setInput(sound_2);

  amplitude_5 = new p5.Amplitude();
  amplitude_5.setInput(sound_5);

  sound_4_duration = sound_4.duration() - 1;


  for (var i = 0; i < randomImageArray.length; i++) {
    var a = randomImageArray[i];
    ImageMaxWidth.push(a.width);
  }
  ImageMaxWidth = max(ImageMaxWidth);
  sound_3_duration = sound_3.duration() - 1;

  xstart = 50;
  ystart = 200;

  x = xstart;
  y = ystart;
  liney = ystart;
  
}

function AddNumberToList_1() {
  var level = amplitude_1.getLevel();
  var size = map(level, 0, 1, 0, 200);
  var actualsound = int(size);
  if (actualsound >= 5) {
    var t = {
      x: int(random(width)),
      y: random(10, 90),
      s: int(size),
      v: int(size) / 6,
      f: frameCount,
      i: random(randomImageArray_1)
    };

    if (pieceList_1.length <= piecelimit) {
      if (pieceList_1.filter((o) => o.s === t.s).length <= eachpiecelimit) {
        pieceList_1.push(t);
      }
    }
  }
}

function AddNumberToList_2() {
  var level = amplitude_2.getLevel();
  var size = map(level, 0, 1, 0, 200);
  var actualsound = int(size);
  if (actualsound >= 5) {
    var t = {
      x: int(random(width)),
      y: random(10, 90),
      s: int(size),
      v: int(size) / 4,
      f: frameCount,
      i: random(randomImageArray_2)
    };

    if (pieceList_2.length <= piecelimit) {
      if (pieceList_2.filter((o) => o.s === t.s).length <= eachpiecelimit) {
        pieceList_2.push(t);
      }
    }
  }
}

function AddNumberToList_5() {
  var level = amplitude_5.getLevel();
  var size = map(level, 0, 1, 0, 200) * 4;
  var actualsound = int(size);
  if (actualsound >= 4) {
    var t = {
      x: int(random(width)),
      y: random(10, 90),
      s: int(size),
      v: int(size) / 4,
      f: frameCount,
      i: random(randomImageArray_5)
    };

    if (pieceList_5.length <= piecelimit) {
      if (pieceList_5.filter((o) => o.s === t.s).length <= eachpiecelimit) {
        pieceList_5.push(t);
      }
    }
  }
}

// add function AddNumberToList_xx()


function draw() {

  if (!permissionGranted) return;

  
  if (isFirstScreen == true && isFourthScreen == false) {
    StartScreen();
  } else {
    if (appNumber == 1) {
      firstApp();
    } else if (appNumber == 9) {
      // ninethAppInit();
      ninethApp();
      // secondApp();
    } else if (appNumber == 3) {
      thirdApp();
    } else if (appNumber == 4) {
      fourthApp();
    } else if (appNumber == 5) {
      fifthApp();
    }
    // add else if (appNumber == xx) { xxApp();}
    drawGoBack();
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);

  this.remove();
}

function StartScreen() {
  background(startImage);
  // a = square(228, 280 , 60);
  // noStroke();
  // a.fill(0, 0, 0, 0);
}

function firstApp() {
  if (isSoundPlaying) {
    randomBG(1);
  }
  background(bg1_1);
  text('tap to play', 20, 20);

  let rms = amplitude_1.getLevel();
  fill(127);
  stroke(0);
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
  text(int(rms));
  noStroke();
  if (pieceList_1.length != 0) {
    for (var i = 0; i < pieceList_1.length; i++) {
      var p = pieceList_1[i];
      text(p.s, p.x, p.y);
      textAlign(CENTER);
      image(p.i, p.x - 19, p.y - 71, 40, 60);
      p.y += p.v;
      if (p.y > height) {
        newpieceList_1 = pieceList_1.filter(function (value) {
          return value['y'] < height;
        });
        pieceList_1 = newpieceList_1;
      }
    }
  }
}

function secondApp() {
  if (isSoundPlaying) {
    randomBG(2);
  }
  background(bg2_1);
  text('tap to play', 20, 20);

  let rms = amplitude_2.getLevel();
  fill(85, 64, 41);
  stroke(0);
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
  text(int(rms));
  noStroke();
  if (pieceList_2.length != 0) {
    for (var i = 0; i < pieceList_2.length; i++) {
      var p = pieceList_2[i];
      text(p.s, p.x, p.y);
      textAlign(CENTER);
      image(p.i, p.x - 19, p.y - 71, 40, 60);
      p.y += p.v;
      if (p.y > height) {
        newpieceList_2 = pieceList_2.filter(function (value) {
          return value['y'] < height;
        });
        pieceList_2 = newpieceList_2;
      }
    }
  }
}

function thirdApp() {
  background(bg3);
  for (var i = 0; i < renderedImageList.length; i++) {
    var p = renderedImageList[i];
    image(p.i, p.x, p.y);
  }

}


function fourthApp() {
  // if (isSoundPlaying) {
  //   randomBG(5);
  // }
  // background(bg5_1);
  // text('tap to play', 20, 20);

  // let rms = amplitude_5.getLevel();
  // fill(85, 64, 41);
  // stroke(0);
  // ellipse(width / 2, height / 2, 10 + rms * 1400, 10 + rms * 1400);
  // text(int(rms));
  // noStroke();
  // if (pieceList_5.length != 0) {
  //   for (var i = 0; i < pieceList_5.length; i++) {
  //     var p = pieceList_5[i];
  //     text(p.s, p.x, p.y);
  //     textAlign(CENTER);
  //     image(p.i, p.x - 19, p.y - 71, 40, 60);
  //     p.y += p.v;
  //     if (p.y > height) {
  //       newpieceList_5 = pieceList_5.filter(function (value) {
  //         return value['y'] < height;
  //       });
  //       pieceList_5 = newpieceList_5;
  //     }
  //   }
  // }



}

function fifthApp() {
  if (isSoundPlaying) {
    randomBG(5);
  }
  background(bg5_1);
  text('tap to play', 20, 20);

  let rms = amplitude_5.getLevel();
  fill(29, 129, 202);
  stroke(0);
  ellipse(width / 2, height / 2, 10 + rms * 1400, 10 + rms * 1400);
  text(int(rms));
  noStroke();
  
  if (pieceList_5.length != 0) {
    for (var i = 0; i < pieceList_5.length; i++) {
      var p = pieceList_5[i];
      text(p.s, p.x, p.y);
      textAlign(CENTER);
      image(p.i, p.x - 19, p.y - 71, 40, 60);
      p.y += p.v;
      if (p.y > height) {
        newpieceList_5 = pieceList_5.filter(function (value) {
          return value['y'] < height;
        });
        pieceList_5 = newpieceList_5;
      }
    }
  }
}

function ninethAppInit() {
  if (typeof (DeviceOrientationEvent) !== 'undefined' && typeof (DeviceOrientationEvent.requestPermission) === 'function') {
    // ios 13 device

    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // show permission dialog only the first time
        let button = createButton("click to allow access to sensors");
        button.style("font-size", "24px");
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      .then(() => {
        // on any subsequent visits
        permissionGranted = true;

        // sound.play();
      })
  } else {
    // non ios 13 device
    textSize(48);
    // text("non ios 13 device", 100, 100);
    permissionGranted = true;

    // sound.play();
  }
}

function ninethApp() {
  if (!permissionGranted) return;

  cx = width / 2;
  cy = height / 2;

  // if (touched == false) {touchToStart();
  //   return;}
  
  // rotationX, rotationY
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx * 1.2;
  cy += dy * 1.2;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);


  if (millis() >= 200 + timer) {
    image(randomImageArray_9[int(random(0, 7))], cx, cy);
    // console.log(random(randomImageArray))
    timer = millis();
  }
}


function touchToStart() {
  // fill(20);
  text('Touch to Start', width / 2, height /2);
}

// add function xxApp() {}

function mousePressed() {
  // if (e == 'back') {
 //   isFirstScreen = true;
 //   appNumber = 0;
 //   return true;
 // }

 if (isFirstScreen == true) {
   if ((mouseX > 228) && (mouseX < 288) && (mouseY > 280) && (mouseY < 340)) {
     isFirstScreen = false;
     appNumber = 1;
   } else if ((mouseX > 312) && (mouseX < 388) && (mouseY > 280) && (mouseY < 350)) {
     isFirstScreen = false;
     appNumber = 9;
     isNinethScreen = true;
     background(255); 
     sound_9.play();

   } else if ((mouseX > 412) && (mouseX < 474) && (mouseY > 284) && (mouseY < 350)) {
     // console.log("clicked");
     isFirstScreen = false;
     appNumber = 3;
     isThirdScreen = true;
   }else if ((mouseX > 224) && (mouseX < 290) && (mouseY > 400) && (mouseY < 462)) {
     // console.log("clicked");
     isFirstScreen = false;
     appNumber = 4;
     isFourthScreen = true;
     document.getElementById("fourthDiv").classList.remove('d-none');
     document.getElementById("canvasForHTML").classList.add('d-none');
   } else if ((mouseX > 312) && (mouseX < 382) && (mouseY > 400) && (mouseY < 470)) {
     // console.log("clicked");
     isFirstScreen = false;
     appNumber = 5;
   }
   // add else if with click area
 } else if (isFourthScreen == true) {
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
   sound_4.play(0, 1, 1, int(random(sound_4_duration)), 1);
 }

 else {
   if ((mouseX > 524) && (mouseX < 604) && (mouseY > 802) && (mouseY < 814)) {
     isFirstScreen = true;
     isThirdScreen = false;
     isNinethScreen = false;
     appNumber = 0;
     // sound_1.stop();
     // sound_2.stop();
     toggleSound();
     pieceList_1 = [];
     newpieceList_1 = [];
     pieceList_2 = [];
     newpieceList_2 = [];
     pieceList_5 = [];
     newpieceList_5 = [];
     
     renderedImageList = [];
     x = xstart;
     y = ystart;
     liney = ystart;
   } else {
    if (isNinethScreen) return;
     if (isThirdScreen == false) {
       toggleSound();
     }
   }
 }
}

function touchStarted() {
   // if (e == 'back') {
  //   isFirstScreen = true;
  //   appNumber = 0;
  //   return true;
  // }

  if (isFirstScreen == true) {
    if ((mouseX > 228) && (mouseX < 288) && (mouseY > 280) && (mouseY < 340)) {
      isFirstScreen = false;
      appNumber = 1;
    } else if ((mouseX > 312) && (mouseX < 388) && (mouseY > 280) && (mouseY < 350)) {
      isFirstScreen = false;
      appNumber = 9;
      isNinethScreen = true;
      background(255); 
    } else if ((mouseX > 412) && (mouseX < 474) && (mouseY > 284) && (mouseY < 350)) {
      // console.log("clicked");
      isFirstScreen = false;
      appNumber = 3;
      isThirdScreen = true;
    }else if ((mouseX > 224) && (mouseX < 290) && (mouseY > 400) && (mouseY < 462)) {
      // console.log("clicked");
      isFirstScreen = false;
      appNumber = 4;
      isFourthScreen = true;
      document.getElementById("fourthDiv").classList.remove('d-none');
      document.getElementById("canvasForHTML").classList.add('d-none');
    } else if ((mouseX > 312) && (mouseX < 382) && (mouseY > 400) && (mouseY < 470)) {
      // console.log("clicked");
      isFirstScreen = false;
      appNumber = 5;
    }
    // add else if with click area
  } else if (isFourthScreen == true) {
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
    sound_4.play(0, 1, 1, int(random(sound_4_duration)), 1);
  }

  else {
    if ((mouseX > 524) && (mouseX < 604) && (mouseY > 802) && (mouseY < 814)) {
      isFirstScreen = true;
      isThirdScreen = false;
      isNinethScreen = false;
      appNumber = 0;
      // sound_1.stop();
      // sound_2.stop();
      toggleSound();
      pieceList_1 = [];
      newpieceList_1 = [];
      pieceList_2 = [];
      newpieceList_2 = [];
      pieceList_5 = [];
      newpieceList_5 = [];
      
      renderedImageList = [];
      x = xstart;
      y = ystart;
      liney = ystart;
    } else {
      if (isNinethScreen) return;
      if (isThirdScreen == false) {
        toggleSound();
      }
    }
  }
}

function toggleSound() {
  if (sound_1.isPlaying() || sound_9.isPlaying() || sound_5.isPlaying()) {
    sound_1.stop();
    sound_9.stop();
    sound_5.stop();
    isSoundPlaying = false;
  } else {
    if (appNumber == 0) {
      return true;
    }
    eval("sound_" + appNumber).play();
    isSoundPlaying = true;
  }
}

function randomBG(i) {
  if (frameCount % (interval * 30) == 0) {
    if (i == 1) {
      bg1_1 = eval("bg1_" + int(random(1, 6)));
    } else if (i == 2) {
      bg2_1 = eval("bg2_" + int(random(1, 5)));
    } else if (i == 5) {
      bg5_1 = eval("bg5_" + int(random(1, 5)));
    }
    // add else if (i == x) {}
  }
}

function keyPressed() {
 
  if (isThirdScreen == true) {
    if (keyCode == 13) { 
      x = xstart;
      liney = liney + ImageMaxWidth * 1.5;
      y = liney;
    } else if (key.length == 1) {
      if (!/\s/.exec(key)) { // Not Space character
      }
  
      randomimage = random(randomImageArray);
  
      y = y + (ImageMaxWidth - randomimage.height);
      renderedImageList.push({
        i: randomimage,
        x: x,
        y: y
      });
  
      x = x + randomimage.width;
      y = liney;
      sound_3.play(0, 1, 1, int(random(sound_3_duration)), 1);
    }
  }
 
}

function drawGoBack() {
  fill(20);
  text('click to go back', 525, 803, 80);

}

function fourthAppGoFirstScreen() {
  isFourthScreen = false;
  isFirstScreen = true;
  document.getElementById("fourthDiv").classList.add('d-none');
  document.getElementById("canvasForHTML").classList.remove('d-none');
  
}