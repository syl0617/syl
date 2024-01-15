/**
 * Setup
 */
const debugEl = document.getElementById('debug'),
// Mapping of indexes to icons: start from banana in middle of initial position and then upwards
// iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"],

// iconMap_1 = ["grey","blue","green", "pink","white","yellow","blue","yellow","white",],
// iconMap_2 = ["red","black","pink", "blue","darkred","grey","blue","orange","yellow",],

// iconMap_3 = ["blue", "blue","yellow","yellow","darkgrey","silver","darkgrey","white","silver"],
// iconMap_4 = ["white", "black" ,"black","red","black","blue","white","blue","red",],
// iconMap_5 = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"]

iconMap_1 = [1,0,8,7,6,5,4,3,2,1],
iconMap_2 = [1,0,8,7,6,5,4,3,2,1],
iconMap_3 = [1,0,8,7,6,5,4,3,2,1],
iconMap_4 = [1,0,8,7,6,5,4,3,2,1],
iconMap_5 = [1,0,8,7,6,5,4,3,2,1];

// 정방향
// iconMap_1 = ["blue","grey","white", "yellow","blue","yellow","white","pink","green"],
// iconMap_2 = ["black","red","yellow", "orange","blue","grey","darkred","blue","pink"],
// iconMap_3 = ["blue", "blue","white","silver","darkgrey","grey","darkgrey","yellow","yellow"],
// iconMap_4 = ["black", "white" ,"red","blue","white","blue","black","red","black"],
// iconMap_5 = ["seven", "banana", "melon", "lemon", "bar", "bell", "orange", "plum", "cherry"]


size_multiplier = getComputedStyle(document.documentElement).getPropertyValue('--size-multiplier');


// Width of the icons
icon_width = 79 * size_multiplier;
// Height of one icon in the strip
icon_height = 79 * size_multiplier;

// Number of icons in the strip
num_icons = 9,
// Max-speed in ms for animating one icon down
time_per_icon = 50,
// Holds icon indexes
indexes = [0, 0, 0, 0, 0];

// win_indexes = [["green","black","blue","black","banana"], ["blue","black","blue","black","seven"]];
win_indexes = [[[2,1,1,1,0],"sample.png"], [[1,1,1,1,1], "sample2.png"]];


//load winning sound
const spinSound = new Audio('spin.mp3');
const winSound = new Audio('win.mp3');
const winImage = new Image('sample.png');
/** 
 * Roll one reel
 */



const roll = (reel, offset = 0) => {
	// Minimum of 2 + the reel offset rounds
	const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons); 
	
	// Return promise so we can wait for all reels to finish
	return new Promise((resolve, reject) => {
		
    spinSound.volume = 0.3; // Adjust the volume value between 0 and 1
    spinSound.play();

		const style = getComputedStyle(reel),
					// Current background position
					backgroundPositionY = parseFloat(style["background-position-y"]),
					// Target background position
					targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
					// Normalized background position, for reset
					normTargetBackgroundPositionY = targetBackgroundPositionY%(num_icons * icon_height);

    // console.log( targetBackgroundPositionY, num_icons, icon_height)
    // console.log (backgroundPositionY, targetBackgroundPositionY, normTargetBackgroundPositionY)

    // Delay animation with timeout, for some reason a delay in the animation property causes stutter
    setTimeout(() => { 
			// Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
			reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
			// Set background position
			reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
		}, offset * 150);

    // After animation
    setTimeout(() => {
      // Reset position, so that it doesn't get higher without limit
      reel.style.transition = `none`;
      reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;

      // Resolve this promise
      resolve(delta % num_icons);
    }, (8 + 1 * delta) * time_per_icon + offset * 150);

  });
};


/**
 * Roll all reels, when promise resolves roll again
 */
function rollAll() {
  // Disable spin button
  const winContainer = document.querySelector('.win-container');
  if (winContainer) {
  winContainer.style.visibility = 'hidden';
}
  spinButton.disabled = true;


  debugEl.textContent = 'rolling...';

  const reelsList = document.querySelectorAll('.slots > [class^="reel"]');

  const rollAgain = () => {
    Promise
      // Activate each reel, must convert NodeList to Array for this with spread operator
      .all([...reelsList].map((reel, i) => roll(reel, i)))

      // When all reels done animating (all promises solve)
      .then(deltas => {
        // add up indexes
        deltas.forEach((delta, i) => {
          indexes[i] = (indexes[i] + delta) % num_icons;
          // indexes_1[i] = (indexes_1[i] + delta) % num_icons;
          // indexes_2[i] = (indexes_2[i] + delta) % num_icons;
          // indexes_3[i] = (indexes_3[i] + delta) % num_icons;
          // indexes_4[i] = (indexes_4[i] + delta) % num_icons;
          // indexes_5[i] = (indexes_5[i] + delta) % num_icons;

        });

        // indexes=  [1,1,1,1,1];


        debugEl.textContent = indexes.map((i, index) => {
          let icon = '';
          if (index === 0) {
            icon = iconMap_1[i];
          } else if (index === 1) {
            icon = iconMap_2[i];
          } else if (index === 2) {
            icon = iconMap_3[i];
          } else if (index === 3) {
            icon = iconMap_4[i];
          } else if (index === 4) {
            icon = iconMap_5[i];
          }
          return icon;
        }).join(' - ');

        
        // Win conditions
        let isFound = win_indexes.some(i => JSON.stringify(indexes) === JSON.stringify(i[0]));
        

        if (isFound) {
          let img_name = win_indexes.find(i => JSON.stringify(indexes) === JSON.stringify(i[0]))[1];
          let img = document.getElementById('win-image');
          img.src = img_name;
          const winCls = "win5";
          document.querySelector(".slots").classList.add(winCls);
          setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000);
          winSound.play();
          winContainer.style.visibility = 'visible';
          spinButton.disabled = false;

        // if (indexes.every(index => index === indexes[0])) {
        //   const winCls = "win5";
        //   document.querySelector(".slots").classList.add(winCls);
        //   setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000);
        //   winSound.play();
        } else {
          rollAgain(); // Roll again until win5 condition is met
        }
      });
  };

  rollAgain();
};

// Kickoff
// setTimeout(rollAll, 1000);

const spinButton = document.getElementById('spin');
spinButton.addEventListener('click', () => {
  rollAll();
});
