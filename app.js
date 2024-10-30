//variables===========================================================
const gridContainerItems = document.querySelectorAll('.grid-items');
const totalCLicksCount = document.querySelector('#total-clicks-count');
const totalClicksText = document.querySelector('#total-clicks-text');
let totalClicks = 0
// Console Outputs ======================================================
console.dir(gridContainerItems)
console.dir(totalCLicksCount)


// Functions ======================================================

gridContainerItems.forEach((quadrant) => {
    quadrant.addEventListener('click', (event) => {
        totalClicks += 1
        totalCLicksCount.innerText = totalClicks
        updateText(totalClicksText, totalClicks)
    });
    // totalClicks += 1
});

// console.log(totalClicks)

const updateText = (elementToUpdate, count) => {
    if(count === 5) {
        elementToUpdate.innerText = 'Nice!'
    } else if (count === 15) {
        elementToUpdate.innerText = "Woah!"
    } else if (count === 30) {
        elementToUpdate.innerText = "WOW!"
    }
}

// updateText(totalClicksText, )



