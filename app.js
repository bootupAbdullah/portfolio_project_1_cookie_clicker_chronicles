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
const updateTotalClickText = ["Way to Go!", "Woah!", "Wow", "Nice", "Keep Going!"]
const updateCookiesEatenText = {5: 'Hungry', 10: 'Starving', 20: 'Santa Status'}

// Functions ======================================================

const randomInt = (max) => {
    return Math.floor(Math.random() * max)
}

//attach click event to cookie grid, updates text and integer
gridContainerItems.forEach((quadrant) => {
    quadrant.addEventListener('click', (event) => {
        totalClicks += 1
        totalCLicksCount.innerText = totalClicks
        updateClickText(totalClicksText, totalClicks) //added function to update text! para:(text-you-want-to-update, click-count)
    });
    // totalClicks += 1
});

//update 'total clicks count and text as incremented:
const updateClickText = (elementToUpdate, count) => {
    if(count === 5) {
        elementToUpdate.innerText = 'Nice!'
        elementToUpdate.style.fontSize = '2.5em'
        elementToUpdate.style.paddingRight = '70px'
    } else if (count === 15) {
        elementToUpdate.innerText = "Woah!"
        elementToUpdate.style.paddingRight = '50px'
    } else if (count === 25) {
        elementToUpdate.innerText = "Keep.."
    } else if (count === 28) {
        elementToUpdate.innerText = "..on"
        elementToUpdate.style.paddingRight = '90px'
    } else if (count === 35) {
        elementToUpdate.innerText = "GOING!"
        elementToUpdate.style.paddingRight = '45px'
    }
}


// cookies eaten count:
// const


//creae a funtion the randomizes text selection through for loop


// Console Outputs ======================================================
console.log(randomInt(5))
console.dir(gridContainerItems)
console.dir(totalCLicksCount)






