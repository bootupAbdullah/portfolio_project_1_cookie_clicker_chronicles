/* ========================================================================
  DOM QUERIES - ORGANIZED BY HTML STRUCTURE
  ======================================================================== */

/* ========================================================================
  BODY/MAIN
  ======================================================================== */
const bodyElement = document.querySelector('body')

/* ========================================================================
  GAME MENU SECTION
  ======================================================================== */
const gameMenuDisplay = document.querySelector('.game-menu');
const startGameButton = document.querySelector('#start-button');
const howToPlayButton = document.querySelector('#how-to-play-button');
const audioOnButton = document.querySelector('#audio-on-button');
const audioOffButton = document.querySelector('#audio-off-button');

/* ========================================================================
  HOW TO PLAY MENU SECTION
  ======================================================================== */
const howToPlayMenu = document.querySelector('.how-to-play-menu');
const howToPlayContentSelector = document.querySelector('.how-to-play-content')
const howToPlayImageAndButtonContainer = document.querySelector('.how-to-play-image-and-button-container')
const howToPlayImage1Selector = document.querySelector('#how-to-play-image-1')
const howToPlayImage2Selector = document.querySelector('#how-to-play-image-2')
const howToPlayImage3Selector = document.querySelector('#how-to-play-image-3')
const nextImageButton = document.querySelector('#next-image-button')
const previousImageButton = document.querySelector('#previous-image-button')
const backToMenuButton = document.querySelector('#back-to-menu');
const turorialStartGameButon = document.querySelector('#tutorial-start-game-button')


/* ========================================================================
  GAME LOOP SECTION
  ======================================================================== */
const mainGameLoop = document.querySelector('.game-loop');

/* ========================================================================
  SCOREBOARD
  ======================================================================== */
const totalCLicksCount = document.querySelector('#total-clicks-count');
const totalClicksText = document.querySelector('#total-clicks-text');
const totalCookiesCount = document.querySelector('#cookies-eaten-count');
const gifContainer1 = document.querySelector('#gif-container');

/* ========================================================================
  GAME CONTAINER/GRID
  ======================================================================== */
const gridContainer = document.querySelector('.grid-container');
const gridContainerItems = document.querySelectorAll('.grid-items');
const cookieQuadrant1 = document.querySelector('#quadrant-1');
const cookieQuadrant2 = document.querySelector('#quadrant-2');
const cookieQuadrant3 = document.querySelector('#quadrant-3');
const cookieQuadrant4 = document.querySelector('#quadrant-4');
const gameScreenReturnToMenuButton = document.querySelector('#game-screen-return-to-menu-button')


/* ========================================================================
  AUDIO
  ======================================================================== */
const holidayCheer = new Audio('./src/sound/jingle-bells-audio.mp3');


/* ========================================================================
  GLOBAL VARIABLES
  ======================================================================== */

/* GAME STATE VARIABLES */
let quadrant1 = true
let quadrant2 = true
let quadrant3 = true
let quadrant4 = true
let totalClicks = 0
let totalCookiesEatenCounter = 0

/* HOW TO PLAY MENU STATE VARIABLES */
let howToPlayImage1Boolean = true
let howToPlayImage2Boolean = false
let howtoPlayImage3Boolean = false

/* ========================================================================
  CONSOLE OUTPUTS - DEBUG
  ======================================================================== */
console.dir(bodyElement)
console.dir(gridContainer)
console.dir(gridContainerItems)
console.dir(totalCLicksCount)
console.dir(cookieQuadrant1)
console.dir(totalCookiesCount)
console.dir(gifContainer1)
console.dir(gameMenuDisplay)
console.dir(startGameButton)
console.dir(howToPlayMenu)
console.dir(howToPlayImageAndButtonContainer)
console.dir(nextImageButton)
console.dir(previousImageButton)
console.dir(backToMenuButton)
console.dir(holidayCheer)
console.dir(audioOnButton)
console.dir(audioOffButton)

/* ========================================================================
  ARRAYS/LISTS
  ======================================================================== */
const updateTotalClickTextList = ["Way to Go!", "Woah!", "Wow", "Nice", "Keep Going!"]
const cookieQuadrantList = [cookieQuadrant1, cookieQuadrant2, cookieQuadrant3, cookieQuadrant4]



/* ========================================================================
   LANGUAGE/INTERNATIONALIZATION
   ======================================================================== */
const languages = {
    english: {
        gameTitle: "Cookie Clicker Chronicles",
        totalClicks: "Total Clicks:",
        cookiesEaten: "Cookies Eaten:",
        startGame: "Start Game",
        howToPlay: "How to Play"
    },
    chinese: {
        gameTitle: "饼干点击编年史", 
        totalClicks: "总点击数:",
        cookiesEaten: "吃掉的饼干:",
        startGame: "开始游戏",
        howToPlay: "游戏说明"
    }
};

let currentLanguage = 'english';

const toggleLanguage = () => {
    currentLanguage = currentLanguage === 'english' ? 'chinese' : 'english';
    // Update text logic here
}



/* ========================================================================
  GAME FUNCTIONS
  ======================================================================== */

/* CLICK TRACKING FUNCTIONS */
//attaches click event to cookie grid, updates text and integers for 'total clicks' and click count
gridContainerItems.forEach((containerItem) => {
   containerItem.addEventListener('click', (event) => {
       if (quadrant1 === true || quadrant2 === true || quadrant3 === true || quadrant4 === true) {
           totalClicks += 1
       totalCLicksCount.innerText = totalClicks
       updateClickText(totalClicksText, totalClicks) //added function to update text! para:(text-you-want-to-update, click-count)
       }
   });
});

//works to add additonal functionality, does not impede base functionality of clickable event
//update 'total clicks' count and text as the count is incremented:
const updateClickText = (elementToUpdate, count) => {
   if(count === 5) {
       elementToUpdate.innerText = 'Nice!'
       elementToUpdate.style.fontSize = '2.5em'
       elementToUpdate.style.paddingRight = '70px'
   } else if (count === 10) {
       elementToUpdate.innerText = "Woah!"
       elementToUpdate.style.paddingRight = '50px'
   } else if (count === 15) {
       elementToUpdate.innerText = "Keep.."
   } else if (count === 20) {
       elementToUpdate.innerText = "..on"
       elementToUpdate.style.paddingRight = '90px'
   } else if (count === 25) {
       elementToUpdate.innerText = "GOING!"
       elementToUpdate.style.paddingRight = '45px'
   } else if (count === 30) {
       gifContainer1.style.display = 'block';
       setTimeout(()=>{
           gifContainer1.style.display = 'none';
       }, "3150");
   }
};

// creating a function to incriment 'cookies eaten' counter:
const updateCookiesEatenCounter = (elementToUpdate) => {
   totalCookiesEatenCounter += 1
   elementToUpdate.innerText = totalCookiesEatenCounter
}

/* COOKIE QUADRANT FUNCTIONS */
const restoreCookieImage = (boolean1, boolean2, boolean3, boolean4) => {
   if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 === true) {
       cookieQuadrant1.style.backgroundImage = "none";
       cookieQuadrant1.style.pointerEvents = "auto";
       cookieQuadrant2.style.backgroundImage = "none";
       cookieQuadrant2.style.pointerEvents = "auto";
       cookieQuadrant3.style.backgroundImage = "none";
       cookieQuadrant3.style.pointerEvents = "auto";
       cookieQuadrant4.style.backgroundImage = "none";
       cookieQuadrant4.style.pointerEvents = "auto";
   }
}

// adding functionality if quadrant clicked, quadrant then dissappears
cookieQuadrantList.forEach((cookieQuadrant) => {
   cookieQuadrant.addEventListener('click', (event) => {
       if(cookieQuadrant === cookieQuadrant1) {
           const clickedQuadrant1 = event.target
           if(clickedQuadrant1 === clickedQuadrant1) {
               cookieQuadrant1.style.backgroundImage = "url('src/window-imgs-folder/quadrant1-window-image.jpg')";
               cookieQuadrant1.style.pointerEvents = "none";
               quadrant1 = false
           }
       } else if(cookieQuadrant === cookieQuadrant2) {
           const clickedQuadrant2 = event.target
           if(clickedQuadrant2 === clickedQuadrant2) {
               cookieQuadrant2.style.backgroundImage = "url('src/window-imgs-folder/quadrant2-window-image.jpg')";
               cookieQuadrant2.style.pointerEvents = "none"
               quadrant2 = false
           }
       } else if(cookieQuadrant === cookieQuadrant3) {
           const clickedQuadrant3 = event.target
           if(clickedQuadrant3 === clickedQuadrant3) {
               cookieQuadrant3.style.backgroundImage = "url('src/window-imgs-folder/quadrant3-window-image.jpg')";
               cookieQuadrant3.style.pointerEvents = "none"
               quadrant3 = false
           }
       } else if(cookieQuadrant === cookieQuadrant4) {
           const clickedQuadrant4 = event.target
           if(clickedQuadrant4 === clickedQuadrant4) {
               cookieQuadrant4.style.backgroundImage = "url('src/window-imgs-folder/quadrant4-window-image.jpg')";
               cookieQuadrant4.style.pointerEvents = 'none'
               quadrant4 = false
           }
       } if (quadrant1 === false && quadrant2 === false && quadrant3 === false && quadrant4 === false) {
           updateCookiesEatenCounter(totalCookiesCount)
           gridContainer.style.display = "none"; 
           quadrant1 = true, quadrant2 = true, quadrant3 = true, quadrant4 = true
           restoreCookieImage(quadrant1, quadrant2, quadrant3, quadrant4)
           setTimeout(()=>{
               gridContainer.style.display = "flex"; 
           }, 300);
       }
   })
})


/* ========================================================================
  NAVIGATION FUNCTIONS
  ======================================================================== */

//return to main menu
const returnToMainMenu = () => {
    gameMenuDisplay.style.display = 'flex'
    howToPlayMenu.style.display = 'none'
    mainGameLoop.style.display = 'none'
    howToPlayImage1Boolean = true
    howToPlayImage2Boolean = false
    howtoPlayImage3Boolean = false
    howToPlayImage1Selector.style.display = "flex"
    howToPlayImage2Selector.style.display = "none"
    howToPlayImage3Selector.style.display = "none"
    
    // Check viewport and set appropriate background
    if (window.innerWidth <= 480) {
        bodyElement.style.backgroundImage = "url('src/start-menu-imgs/background-image-project-smaller-viewport.jpg')"
    } else {
        bodyElement.style.backgroundImage = "url('src/start-menu-imgs/start-menu-background.jpg')"
    }
}

// clickable event for the 'back to menu' button
// const resetToMainMenuState = () => {
//    // Hide all screens
//    howToPlayMenu.style.display = 'none'
//    mainGameLoop.style.display = 'none'
//    gameMenuDisplay.style.display = 'flex'
   
//    // Reset how-to-play state
//    howToPlayImage1Boolean = true
//    howToPlayImage2Boolean = false
//    howtoPlayImage3Boolean = false
   
//    // Reset how-to-play UI
//    howToPlayContentSelector.style.width = "50%"
//    howToPlayImage1Selector.style.display = 'inline'
//    howToPlayImage2Selector.style.display = 'none'
//    howToPlayImage3Selector.style.display = 'none'
//    nextImageButton.style.display = 'inline'
   
//   //  Set background
//    bodyElement.style.backgroundImage = "url('src/start-menu-imgs/start-menu-background.jpg')"
// }

const startGame = () => {
   gameMenuDisplay.style.display = 'none'
   howToPlayMenu.style.display = 'none'
   mainGameLoop.style.display = 'flex'
   bodyElement.style.backgroundImage = "url('src/background-img-folder/background-img-project.jpg')"
}

/* ========================================================================
  AUDIO FUNCTIONS
  ======================================================================== */
const toggleAudio = (clickedButton) => {
   if(clickedButton === audioOnButton) {
       holidayCheer.play();
   } else if (clickedButton === audioOffButton) {
       holidayCheer.pause();
       holidayCheer.currentTime = 0;
   }
}

/* ========================================================================
  EVENT LISTENERS
  ======================================================================== */

/* NAVIGATION EVENT LISTENERS */
// How to play menu
howToPlayButton.addEventListener('click', (event) => {
   gameMenuDisplay.style.display = 'none'
   mainGameLoop.style.display = 'none'
   howToPlayMenu.style.display = 'flex'
   bodyElement.style.backgroundImage = "url(/src/how-to-play-menu-image/how-to-play-image.jpg)"
})

// Back to menu state
gameScreenReturnToMenuButton.addEventListener('click', returnToMainMenu);
backToMenuButton.addEventListener('click', returnToMainMenu);

// Start game
startGameButton.addEventListener('click', startGame);
turorialStartGameButon.addEventListener('click', startGame);

/* HOW TO PLAY IMAGE NAVIGATION */
nextImageButton.addEventListener('click', (event) => {
   if (howToPlayImage1Boolean === true && howToPlayImage2Boolean === false && howtoPlayImage3Boolean === false) {
       howToPlayImage1Boolean = false
       howToPlayImage2Boolean = true
       howToPlayImage1Selector.style.display = 'none'
       howToPlayImage2Selector.style.display = 'flex'
   } else if (howToPlayImage1Boolean === false && howtoPlayImage3Boolean === false) {
       howToPlayImage2Boolean = false
       howtoPlayImage3Boolean = true
       howToPlayImage2Selector.style.display = 'none'
       howToPlayImage3Selector.style.display = 'flex'
      //  console.log(howToPlayImage1Boolean)
      //  console.log(howtoPlayImage3Boolean)
   } 
})

previousImageButton.addEventListener('click', (event) => {
    if (howToPlayImage1Boolean === false && howToPlayImage2Boolean === true && howtoPlayImage3Boolean === false) {
        howToPlayImage2Boolean = false
        howToPlayImage1Boolean = true
        howToPlayImage2Selector.style.display = 'none'
        howToPlayImage1Selector.style.display = 'flex'
    } else if (howToPlayImage1Boolean === false && howToPlayImage2Boolean === false && howtoPlayImage3Boolean === true) {
        howtoPlayImage3Boolean = false
        howToPlayImage2Boolean = true
        howToPlayImage3Selector.style.display = 'none'
        howToPlayImage2Selector.style.display = 'flex'
    } else if (howToPlayImage1Boolean === true && howToPlayImage2Boolean === false && howtoPlayImage3Boolean === false) {
        returnToMainMenu()
    }
})

/* AUDIO EVENT LISTENERS */
audioOnButton.addEventListener('click', () => toggleAudio(audioOnButton));
audioOffButton.addEventListener('click', () => toggleAudio(audioOffButton));

/* ========================================================================
  AUDIO SETTINGS
  ======================================================================== */
holidayCheer.loop = true;


