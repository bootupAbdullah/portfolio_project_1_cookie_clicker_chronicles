//variables===========================================================
const gridContainerItems = document.querySelectorAll('.grid-items');
const totalCLicksCount = document.querySelector('#total-clicks-count');
const totalClicksText = document.querySelector('#total-clicks-text');
let quadrant1 = true
let quadrant2 = true
let quadrant3 = true
let quadrant4 = true
let totalClicks = 0

// List ======================================================
updateTotalClickText = ["Way to Go!", "Woah!", "Wow", "Nice", "Keep Going!"]
updateCookiesEatenText = {5: 'Hungry', 10: 'Starving', 20: 'Santa Status'}

// Functions ======================================================

const randomInt = (max) => {
    return Math.floor(Math.random() * max)
}

//attach click event to cookie grid, updates text and integer
gridContainerItems.forEach((quadrant) => {
    quadrant.addEventListener('click', (event) => {
        totalClicks += 1
        totalCLicksCount.innerText = totalClicks
        updateText(totalClicksText, totalClicks)
    });
    // totalClicks += 1
});

//creae a funtion the randomizes text selection through for loop

// !! STOPED HERE: Creating function that will iterate over list to display text
// const randomizeTextSelection = (selectedElementText) => {
//     for (let i = 0, i )
// }



//update 'total clicks count and text as incremented'
const updateText = (elementToUpdate, count, selectedText) => {
    if(count === 5) {
        elementToUpdate.innerText = 'Nice!'
        elementToUpdate.style.fontSize = '2.5em'
    } else if (count === 15) {
        elementToUpdate.innerText = "Woah!"
    } else if (count === 25) {
        elementToUpdate.innerText = "Keep.."
    } else if (count === 28) {
        elementToUpdate.innerText = "..on"
    } else if (count === 35) {
        elementToUpdate.innerText = "GOING!"
    }
}

// Console Outputs ======================================================
console.log(randomInt(5))
console.dir(gridContainerItems)
console.dir(totalCLicksCount)






