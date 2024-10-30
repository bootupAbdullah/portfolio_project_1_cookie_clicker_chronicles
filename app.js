//variables===========================================================
const gridContainerItems = document.querySelectorAll('.grid-items');
const totalCLicksCount = document.querySelector('#total-clicks-count');
let clickCount = 0
// Console Outputs ======================================================
console.dir(gridContainerItems)
console.dir(totalCLicksCount)


// Functions ======================================================

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//     display.innerText = button.innerText
//     console.log(event.target.innerText);
//     });
//   });


gridContainerItems.forEach((quadrant) => {
    quadrant.addEventListener('click', (event) => {
        clickCount += 1
        totalCLicksCount.innerText = clickCount
    });
});

