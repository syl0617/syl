var sound, amplitude, img;

let permissionGranted = false;
let cx, cy;
var randomImageArray = [];
let timer = 0;
let touched = false;
let textErased = false;
function preload() {

  img1_1 = loadImage('assets/1_1.png');
  img1_2 = loadImage('assets/1_2.png');
  img1_3 = loadImage('assets/1_3.png');
  img1_4 = loadImage('assets/1_4.png');
  img1_5 = loadImage('assets/1_5.png');
  img1_6 = loadImage('assets/1_6.png');
  img1_7 = loadImage('assets/1_7.png');
  sound = loadSound('assets/1.mp3');

  randomImageArray = [img1_1, img1_2, img1_3, img1_4, img1_5, img1_6, img1_7];
}

var renderedImageList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

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

function touchStarted() {
  if (permissionGranted) {
  touched = true;
  if (!sound.isPlaying()) {sound.play();}
}
}

function draw() {
  if (!permissionGranted) return;

  if (touched == false) {touchToStart();
    return;}
  
if (touched) { 
  if (!textErased) {
    background(255); 
    textErased = true;
  }
  // rotationX, rotationY
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx * 1.2;
  cy += dy * 1.2;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);


  if (millis() >= 200 + timer) {
    image(randomImageArray[int(random(0, 7))], cx, cy);
    // console.log(random(randomImageArray))
    timer = millis();
  }
}
}

function touchToStart() {
  // fill(20);
  text('Touch to Start', width / 2, height /2);
}