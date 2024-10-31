//variables===========================================================
const gridContainer = document.querySelector('.grid-container')
const gridContainerItems = document.querySelectorAll('.grid-items');
const totalCLicksCount = document.querySelector('#total-clicks-count');
const totalClicksText = document.querySelector('#total-clicks-text');
const totalCookiesCount = document.querySelector('#total-cookies-count')
const cookieQuadrant1 = document.querySelector('#quadrant-1');
const cookieQuadrant2 = document.querySelector('#quadrant-2');
const cookieQuadrant3 = document.querySelector('#quadrant-3');
const cookieQuadrant4 = document.querySelector('#quadrant-4');
const gifContainer1 = document.querySelector('#gif-container')
let quadrant1 = true
let quadrant2 = true
let quadrant3 = true
let quadrant4 = true
let totalClicks = 0
let totalCookiesEatenCounter = 0

// Console Outputs ======================================================
// console.log(randomInt(5))
console.dir(gridContainer)
console.dir(gridContainerItems)
console.dir(totalCLicksCount)
console.dir(cookieQuadrant1)
console.dir(totalCookiesCount)
console.dir(gifContainer1)

// List ======================================================
const updateTotalClickTextList = ["Way to Go!", "Woah!", "Wow", "Nice", "Keep Going!"]
const updateCookiesEatenTextList = {5: 'Hungry', 10: 'Starving', 20: 'Santa Status'}
const cookieQuadrantList = [cookieQuadrant1, cookieQuadrant2, cookieQuadrant3, cookieQuadrant4]

// Functions ======================================================

// create a function to produce a random int
const randomInt = (max) => {
    return Math.floor(Math.random() * max)
}



//attach click event to cookie grid, updates text and integer
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
//update 'total clicks count and text as incremented:
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
        }, "3500");
    }
};

// creating a function to incriment 'cookies eaten' counter:
const updateCookiesEatenCounter = (elementToUpdate) => {
    totalCookiesEatenCounter += 1
    elementToUpdate.innerText = totalCookiesEatenCounter
}

const setImageBack = (boolean1, boolean2, boolean3, boolean4) => {
    if (boolean1 === true && boolean2 === true && boolean3 === true && boolean4 === true) {
        cookieQuadrant1.style.backgroundImage = "none";
        cookieQuadrant2.style.backgroundImage = "none";
        cookieQuadrant3.style.backgroundImage = "none";
        cookieQuadrant4.style.backgroundImage = "none";  
    }
}

//check to see if clicked event is grid container

// adding functionality if quadrant clicked, quadrant then dissappears
cookieQuadrantList.forEach((cookieQuadrant) => {
    cookieQuadrant.addEventListener('click', (event) => {
        if(cookieQuadrant === cookieQuadrant1) {
            cookieQuadrant1.style.backgroundImage = "url('/src/window-panel-images/quadrant1-window-image.jpg')";
            quadrant1 = false;
        } else if (cookieQuadrant === cookieQuadrant2) {
            cookieQuadrant2.style.backgroundImage = "url('/src/window-panel-images/quadrant2-window-image.jpg')";
            quadrant2 = false;
        } else if (cookieQuadrant === cookieQuadrant3) {
            cookieQuadrant3.style.backgroundImage = "url('/src/window-panel-images/quadrant3-window-image.jpg')";
            quadrant3 = false;
        } else if (cookieQuadrant === cookieQuadrant4) {
            cookieQuadrant4.style.backgroundImage = "url('/src/window-panel-images/quadrant4-window-image.jpg')";
            quadrant4 = false;
        }
        if (quadrant1 === false && quadrant2 === false && quadrant3 === false && quadrant4 === false) {
            updateCookiesEatenCounter(totalCookiesCount)
            quadrant1 = true, quadrant2 = true, quadrant3 = true, quadrant4 = true
            setImageBack(quadrant1, quadrant2, quadrant3, quadrant4)
            // cookieQuadrant1.style.backgroundImage = "none";
            // !! This works cookieQuadrant1.style.backgroundImage = "url('/src/glass-of-milk/glass-of-milk-img.png')";
        }
    });
});

// cookies eaten count:
// const

//creae a funtion the randomizes text selection through for loop









