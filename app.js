/* =========================================================================
   🍪 COOKIE CLICKER CHRONICLES - MAIN JAVASCRIPT FILE
   ========================================================================= */

/* =========================================================================
   📱 DOM ELEMENTS - All HTML element references organized by screen
   ========================================================================= */

   /* ---- 🏠 MAIN BODY ---- */
   const bodyElement = document.querySelector('body')

   /* ---- 🎮 GAME MENU SCREEN ---- */
   const gameMenuDisplay = document.querySelector('.game-menu');
   const startGameButton = document.querySelector('#start-button');
   const howToPlayButton = document.querySelector('#how-to-play-button');
   
   /* ---- 📚 HOW TO PLAY SCREEN ---- */
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
   
   /* ---- 🎲 GAME PLAY SCREEN ---- */
   const mainGameLoop = document.querySelector('.game-loop');
   const gameScreenReturnToMenuButton = document.querySelector('#game-screen-return-to-menu-button')
   
   /* ---- 📊 SCOREBOARD ELEMENTS ---- */
   const totalCLicksCount = document.querySelector('#total-clicks-count');
   const totalClicksTextEng = document.querySelector('#total-clicks-text');
   const totalClicksTextChi = document.querySelector('#total-clicks-text-chinese');
   const totalCookiesCount = document.querySelector('#cookies-eaten-count');
   const gifContainer1 = document.querySelector('#gif-container');
   
   /* ---- 🍪 COOKIE GAME GRID ---- */
   const gridContainer = document.querySelector('.grid-container');
   const gridContainerItems = document.querySelectorAll('.grid-items');
   const cookieQuadrant1 = document.querySelector('#quadrant-1');
   const cookieQuadrant2 = document.querySelector('#quadrant-2');
   const cookieQuadrant3 = document.querySelector('#quadrant-3');
   const cookieQuadrant4 = document.querySelector('#quadrant-4');
   
   /* ---- 🔊 AUDIO ELEMENTS ---- */
   const holidayCheer = new Audio('./src/sound/jingle-bells-audio.mp3');

/* =========================================================================
   🎯 GAME STATE VARIABLES - Track game progress and UI state
   ========================================================================= */

   /* ---- 🍪 COOKIE QUADRANT STATES ---- */
   let quadrant1 = true          // Track if quadrant 1 is clickable
   let quadrant2 = true          // Track if quadrant 2 is clickable  
   let quadrant3 = true          // Track if quadrant 3 is clickable
   let quadrant4 = true          // Track if quadrant 4 is clickable
   
   /* ---- 📈 SCORE TRACKING ---- */
   let totalClicks = 0                    // Count of all clicks made
   let totalCookiesEatenCounter = 0       // Count of complete cookies eaten
   
   /* ---- 📚 TUTORIAL NAVIGATION STATE ---- */
   let howToPlayImage1Boolean = true      // Show image 1 (default)
   let howToPlayImage2Boolean = false     // Show image 2
   let howtoPlayImage3Boolean = false     // Show image 3

/* =========================================================================
   🌍 INTERNATIONALIZATION - Language support system
   ========================================================================= */

   /* ---- 📖 LANGUAGE DICTIONARY ---- */
   const languages = {
       english: {
           gameTitle: "Cookie Clicker Chronicles",
           totalClicks: "Total Clicks:",
           cookiesEaten: "Cookies Eaten:",
           startGame: "Start Game",
           howToPlay: "How to Play",
           backToMenu: "Back to Menu",
           setTimer: "Set Timer",
           quit: "Quit",
           // Encouragement messages for clicking
           nice: "Nice!",
           woah: "Woah!",
           keep: "Keep..",
           on: "..on",
           going: "GOING!"
       },
       chinese: {
           gameTitle: "饼干点击编年史", 
           totalClicks: "总点击数:",
           cookiesEaten: "吃掉的饼干:",
           startGame: "开始游戏",
           howToPlay: "游戏说明",
           backToMenu: "返回菜单",
           setTimer: "设置计时器",
           quit: "退出",
           // Encouragement messages for clicking
           nice: "不错!",
           woah: "哇!",
           keep: "继续..",
           on: "..加油",
           going: "冲啊!"
       }
   };

   let currentLanguage = 'english';

   /* ---- 🔄 LANGUAGE TOGGLE FUNCTION ---- */
   /**
    * 🌐 LANGUAGE SWITCHER: Toggles between English and Chinese
    * Updates all visible text elements safely with null checks
    */
   const toggleLanguage = () => {
   // Switch language state
   currentLanguage = currentLanguage === 'english' ? 'chinese' : 'english';
   
   // Update main menu elements (always exist)
   const gameTitle = document.querySelector('#game-title h1');
   const startButton = document.querySelector('#start-button');
   const howToPlayButton = document.querySelector('#how-to-play-button');
   const setTimerButton = document.querySelector('#set-timer');
   const quitButton = document.querySelector('#quit-game');
   
   if (gameTitle) gameTitle.innerText = languages[currentLanguage].gameTitle;
   if (startButton) startButton.innerText = languages[currentLanguage].startGame;
   if (howToPlayButton) howToPlayButton.innerText = languages[currentLanguage].howToPlay;
   if (setTimerButton) setTimerButton.innerText = languages[currentLanguage].setTimer;
   if (quitButton) quitButton.innerText = languages[currentLanguage].quit;
   
   // Toggle between English and Chinese total clicks elements
   const totalClicksTextEng = document.querySelector('#total-clicks-text');
   const totalClicksTextChi = document.querySelector('#total-clicks-text-chinese');

   if (currentLanguage === 'chinese') {
       if (totalClicksTextEng) totalClicksTextEng.style.display = 'none';
       if (totalClicksTextChi) totalClicksTextChi.style.display = 'flex';
   } else {
       if (totalClicksTextEng) totalClicksTextEng.style.display = 'flex';
       if (totalClicksTextChi) totalClicksTextChi.style.display = 'none';
   }
   
   // Update other game screen elements
   const cookiesEatenText = document.querySelector('#cookies-eaten-text h1');
   const backToMenuButton = document.querySelector('#back-to-menu');
   
   if (cookiesEatenText) cookiesEatenText.innerText = languages[currentLanguage].cookiesEaten;
   if (backToMenuButton) backToMenuButton.innerText = languages[currentLanguage].backToMenu;
}

/* =========================================================================
   🎮 GAME MECHANICS - Core gameplay logic and interactions
   ========================================================================= */

   /* ---- 📊 SCORE TRACKING SYSTEM ---- */
   
   /**
    * 🎯 CLICK COUNTER: Tracks every click on cookie quadrants
    * Increments total clicks and updates encouraging text
    */
   gridContainerItems.forEach((containerItem) => {
       containerItem.addEventListener('click', (event) => {
           if (quadrant1 === true || quadrant2 === true || quadrant3 === true || quadrant4 === true) {
               totalClicks += 1
               totalCLicksCount.innerText = totalClicks
               updateClickText(totalClicksTextEng, totalClicks)
           }
       });
   });

   /**
    * 💬 ENCOURAGEMENT SYSTEM: Updates text based on click milestones
    * @param {HTMLElement} elementToUpdate - The text element to modify
    * @param {number} count - Current click count
    */
   const updateClickText = (elementToUpdate, count) => {
       if(count === 5) {
           elementToUpdate.innerText = languages[currentLanguage].nice;
           elementToUpdate.style.fontSize = '2.5em'
           elementToUpdate.style.paddingRight = '70px'
       } else if (count === 10) {
           elementToUpdate.innerText = languages[currentLanguage].woah;
           elementToUpdate.style.paddingRight = '50px'
       } else if (count === 15) {
           elementToUpdate.innerText = languages[currentLanguage].keep;
       } else if (count === 20) {
           elementToUpdate.innerText = languages[currentLanguage].on;
           elementToUpdate.style.paddingRight = '90px'
       } else if (count === 25) {
           elementToUpdate.innerText = languages[currentLanguage].going;
           elementToUpdate.style.paddingRight = '45px'
       } else if (count === 30) {
           // Show celebration GIF
           gifContainer1.style.display = 'block';
           setTimeout(()=>{
               gifContainer1.style.display = 'none';
           }, 3150);
       }
   };

   /**
    * 🍪 COOKIE COUNTER: Increments cookies eaten when all quadrants clicked
    * @param {HTMLElement} elementToUpdate - The cookies eaten display element
    */
   const updateCookiesEatenCounter = (elementToUpdate) => {
       totalCookiesEatenCounter += 1
       elementToUpdate.innerText = totalCookiesEatenCounter
   }

   /* ---- 🍪 COOKIE QUADRANT INTERACTION SYSTEM ---- */
   
   /**
    * 🔄 QUADRANT RESET: Restores all quadrants to clickable state
    * Called when preparing for a new cookie to appear
    */
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

   /**
    * 🎯 QUADRANT CLICK HANDLER: Main cookie clicking logic
    * When clicked, quadrant shows "eaten" image and becomes unclickable
    * When all 4 quadrants eaten, cookie resets and counter increases
    */
   const cookieQuadrantList = [cookieQuadrant1, cookieQuadrant2, cookieQuadrant3, cookieQuadrant4]
   
   cookieQuadrantList.forEach((cookieQuadrant) => {
       cookieQuadrant.addEventListener('click', (event) => {
           // Handle quadrant 1 click
           if(cookieQuadrant === cookieQuadrant1) {
               cookieQuadrant1.style.backgroundImage = "url('assets/window-imgs-folder/quadrant1-window-image.jpg')";
               cookieQuadrant1.style.pointerEvents = "none";
               quadrant1 = false
           } 
           // Handle quadrant 2 click
           else if(cookieQuadrant === cookieQuadrant2) {
               cookieQuadrant2.style.backgroundImage = "url('assets/window-imgs-folder/quadrant2-window-image.jpg')";
               cookieQuadrant2.style.pointerEvents = "none"
               quadrant2 = false
           } 
           // Handle quadrant 3 click
           else if(cookieQuadrant === cookieQuadrant3) {
               cookieQuadrant3.style.backgroundImage = "url('assets/window-imgs-folder/quadrant3-window-image.jpg')";
               cookieQuadrant3.style.pointerEvents = "none"
               quadrant3 = false
           } 
           // Handle quadrant 4 click
           else if(cookieQuadrant === cookieQuadrant4) {
               cookieQuadrant4.style.backgroundImage = "url('assets/window-imgs-folder/quadrant4-window-image.jpg')";
               cookieQuadrant4.style.pointerEvents = 'none'
               quadrant4 = false
           } 
           
           // Check if all quadrants are eaten (complete cookie)
           if (quadrant1 === false && quadrant2 === false && quadrant3 === false && quadrant4 === false) {
               updateCookiesEatenCounter(totalCookiesCount)
               gridContainer.style.display = "none"; 
               
               // Reset quadrant states
               quadrant1 = true, quadrant2 = true, quadrant3 = true, quadrant4 = true
               restoreCookieImage(quadrant1, quadrant2, quadrant3, quadrant4)
               
               // Show new cookie after brief pause
               setTimeout(()=>{
                   gridContainer.style.display = "flex"; 
               }, 300);
           }
       })
   })

/* =========================================================================
   🧭 SCREEN NAVIGATION - Handle transitions between game screens
   ========================================================================= */

   /**
    * 🏠 RETURN TO MAIN MENU: Complete reset to menu state
    * Resets all game state, counters, and UI elements
    */
   const returnToMainMenu = () => {
       // Hide other screens, show main menu
       gameMenuDisplay.style.display = 'flex'
       howToPlayMenu.style.display = 'none'
       mainGameLoop.style.display = 'none'
       
       // Reset tutorial state
       howToPlayImage1Boolean = true
       howToPlayImage2Boolean = false
       howtoPlayImage3Boolean = false
       howToPlayImage1Selector.style.display = "flex"
       howToPlayImage2Selector.style.display = "none"
       howToPlayImage3Selector.style.display = "none"

       // Reset game counters to zero
       totalClicks = 0
       totalCookiesEatenCounter = 0
       totalCLicksCount.innerText = totalClicks
       totalCookiesCount.innerText = totalCookiesEatenCounter

        // Update BOTH elements and reset styling
        const engH1 = totalClicksTextEng.querySelector('h1');
        const chiH1 = totalClicksTextChi.querySelector('h1');

        if (engH1) {
            engH1.innerText = languages['english'].totalClicks;
            engH1.style.fontSize = '';        
            engH1.style.paddingRight = '';    
        }

        if (chiH1) {
            chiH1.innerText = languages['chinese'].totalClicks;
            chiH1.style.fontSize = '';        
            chiH1.style.paddingRight = '';    
        }
        
       // Set appropriate background for viewport size
       if (window.innerWidth <= 480) {
           bodyElement.style.backgroundImage = "url('assets/start-menu-imgs/background-image-project-smaller-viewport.jpg')"
       } else {
           bodyElement.style.backgroundImage = "url('assets/start-menu-imgs/start-menu-background.jpg')"
       }
   }

   /**
    * 🎮 START GAME: Transition from menu to game screen
    * Hides menu, shows game, sets game background
    */
   const startGame = () => {
       gameMenuDisplay.style.display = 'none'
       howToPlayMenu.style.display = 'none'
       mainGameLoop.style.display = 'flex'
       bodyElement.style.backgroundImage = "url('assets/background-img-folder/background-img-project.jpg')"
   }

/* =========================================================================
   🔊 AUDIO SYSTEM - Background music controls
   ========================================================================= */

   /**
    * 🎵 AUDIO TOGGLE: Switch background music on/off with visual feedback
    * Updates button icon to match current audio state
    */
   const toggleAudio = () => {
       const audioIcon = document.querySelector('#audio-icon');
       
       if (holidayCheer.paused) {
           holidayCheer.play();
           audioIcon.src = 'src/sound-svg/sound-on-svgrepo-com.svg';
       } else {
           holidayCheer.pause();
           holidayCheer.currentTime = 0;
           audioIcon.src = 'src/sound-svg/sound-off-svgrepo-com.svg';
       }
   }

   // Set background music to loop
   holidayCheer.loop = true;

/* =========================================================================
   🎛️ EVENT LISTENERS - Wire up all user interactions
   ========================================================================= */

   /* ---- 🔊 AUDIO CONTROLS ---- */
   document.querySelector('#audio-toggle').addEventListener('click', toggleAudio);

   /* ---- 🧭 NAVIGATION CONTROLS ---- */
   gameScreenReturnToMenuButton.addEventListener('click', returnToMainMenu);
   backToMenuButton.addEventListener('click', returnToMainMenu);
   startGameButton.addEventListener('click', startGame);
   turorialStartGameButon.addEventListener('click', startGame);

   /* ---- 📚 HOW TO PLAY SCREEN ---- */
   howToPlayButton.addEventListener('click', (event) => {
       gameMenuDisplay.style.display = 'none'
       mainGameLoop.style.display = 'none'
       howToPlayMenu.style.display = 'flex'
       bodyElement.style.backgroundImage = "url(assets/how-to-play-menu-image/how-to-play-image.jpg)"
   })

   /* ---- 📚 TUTORIAL IMAGE NAVIGATION ---- */
   
   // Next image button
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
       } 
   })

   // Previous image button
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

/* =========================================================================
   🎯 END OF FILE - Cookie Clicker Chronicles JavaScript
   ========================================================================= */




