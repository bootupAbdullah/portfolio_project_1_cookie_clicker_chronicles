//variables===============================================================================
const bodyElement = document.querySelector('body')
const gridContainer = document.querySelector('.grid-container');
const gridContainerItems = document.querySelectorAll('.grid-items');
const totalCLicksCount = document.querySelector('#total-clicks-count');
const totalClicksText = document.querySelector('#total-clicks-text');
const totalCookiesCount = document.querySelector('#total-cookies-count');
const cookieQuadrant1 = document.querySelector('#quadrant-1');
const cookieQuadrant2 = document.querySelector('#quadrant-2');
const cookieQuadrant3 = document.querySelector('#quadrant-3');
const cookieQuadrant4 = document.querySelector('#quadrant-4');
const gifContainer1 = document.querySelector('#gif-container');
const gameMenuDisplay = document.querySelector('.game-menu');
const startGameButton = document.querySelector('#start-button');
const mainGameLoop = document.querySelector('#game-loop');
const holidayCheer = new Audio('/src/sound/jingle-bells-audio.mp3');
const audioOnButton = document.querySelector('#audio-on-button');
const audioOffButton = document.querySelector('#audio-off-button');
// const negateClickQuadrant1Div = document.querySelector('#negate-click-quadrant-1');
// const negateClickQuadrant2Div = document.querySelector('#negate-click-quadrant-2');
// const negateClickQuadrant3Div = document.querySelector('#negate-click-quadrant-3')
// const negateClickQuadrant4Div = document.querySelector('#negate-click-quadrant-4')

// these 'quadrant' variables are created globaly in an effort to track engagement with clickable event
let quadrant1 = true
let quadrant2 = true
let quadrant3 = true
let quadrant4 = true
let totalClicks = 0
let totalCookiesEatenCounter = 0

// Console Outputs ================================================================================
console.dir(bodyElement)
console.dir(gridContainer)
console.dir(gridContainerItems)
console.dir(totalCLicksCount)
console.dir(cookieQuadrant1)
console.dir(totalCookiesCount)
console.dir(gifContainer1)
console.dir(gameMenuDisplay)
console.dir(startGameButton)
console.dir(holidayCheer)
console.dir(audioOnButton)
console.dir(audioOffButton)
// console.dir(negateClickQuadrant1Div)
// console.dir(negateClickQuadrant2Div)
// console.dir(negateClickQuadrant3Div)
// console.dir(negateClickQuadrant4Div)

// List ==============================================================================================
const updateTotalClickTextList = ["Way to Go!", "Woah!", "Wow", "Nice", "Keep Going!"]
const cookieQuadrantList = [cookieQuadrant1, cookieQuadrant2, cookieQuadrant3, cookieQuadrant4]

// Functions ==========================================================================================
//attaches click event to cookie grid, updates text and integers for 'total clicks' and click count
gridContainerItems.forEach((containerItem) => {
    containerItem.addEventListener('click', (event) => {
        if (quadrant1 === true || quadrant2 === true || quadrant3 === true || quadrant4 === true) {
            totalClicks += 1
        totalCLicksCount.innerText = totalClicks
        updateClickText(totalClicksText, totalClicks) //added function to update text! para:(text-you-want-to-update, click-count)
        }
    });
    // totalClicks += 1
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
        // negateClickQuadrant1Div.style.display = "none";
        // negateClickQuadrant2Div.style.display = "none";
        // negateClickQuadrant3Div.style.display = "none";
        // negateClickQuadrant4Div.style.display = "none";
    }
}

//check to see if clicked event is grid container

// adding functionality if quadrant clicked, quadrant then dissappears
cookieQuadrantList.forEach((cookieQuadrant) => {
    cookieQuadrant.addEventListener('click', (event) => {
        if(cookieQuadrant === cookieQuadrant1) {
            const clickedQuadrant1 = event.target
            if(clickedQuadrant1 === clickedQuadrant1) {
                cookieQuadrant1.style.backgroundImage = "url('src/window-panel-images/quadrant1-window-image.jpg')";
                cookieQuadrant1.style.pointerEvents = "none";
                quadrant1 = false
            }
        } else if(cookieQuadrant === cookieQuadrant2) {
            const clickedQuadrant2 = event.target
            if(clickedQuadrant2 === clickedQuadrant2) {
                cookieQuadrant2.style.backgroundImage = "url('src/window-panel-images/quadrant2-window-image.jpg')";
                cookieQuadrant2.style.pointerEvents = "none"
                quadrant2 = false
            }
        } else if(cookieQuadrant === cookieQuadrant3) {
            const clickedQuadrant3 = event.target
            if(clickedQuadrant3 === clickedQuadrant3) {
                cookieQuadrant3.style.backgroundImage = "url('src/window-panel-images/quadrant3-window-image.jpg')";
                cookieQuadrant3.style.pointerEvents = "none"
                quadrant3 = false
            }
        } else if(cookieQuadrant === cookieQuadrant4) {
            const clickedQuadrant4 = event.target
            if(clickedQuadrant4 === clickedQuadrant4) {
                cookieQuadrant4.style.backgroundImage = "url('src/window-panel-images/quadrant4-window-image.jpg')";
                cookieQuadrant4.style.pointerEvents = 'none'
                quadrant4 = false
            }
        } if (quadrant1 === false && quadrant2 === false && quadrant3 === false && quadrant4 === false) {
            updateCookiesEatenCounter(totalCookiesCount)
            gridContainer.style.display = "none"; 
            quadrant1 = true, quadrant2 = true, quadrant3 = true, quadrant4 = true
            restoreCookieImage(quadrant1, quadrant2, quadrant3, quadrant4)
            setTimeout(()=>{
                gridContainer.style.display = "inline-grid"; 
            }, 300);
        }
    })
})

const toggleAudio = (clickedButton) => {
    if(clickedButton === audioOnButton) {
        holidayCheer.play();
    } else if (clickedButton === audioOffButton) {
        holidayCheer.pause();
        holidayCheer.currentTime = 0;
    }
}

// event listeners ==========================================================================================

// clickable event for the 'start game' button, listens for 'click' changes background for body, 
//changes display for #game-loop and .game-menu

startGameButton.addEventListener('click', (event) => {
    gameMenuDisplay.style.display = 'none'
    // bodyElement.style.backgroundImage = "url('src/start-menu-imgs/background-img-project.jpg')" I was having issues with rednering this image trough github pages so I removed the functionlaity and instead added the image straight through CSS.
    mainGameLoop.style.display = 'block'
    });

// These event listener expression were learned much later on in the project: 
audioOnButton.addEventListener('click', () => toggleAudio(audioOnButton));
audioOffButton.addEventListener('click', () => toggleAudio(audioOffButton));

// declerations ==========================================================================================
holidayCheer.loop = true;