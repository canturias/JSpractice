const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const counterTitle = document.getElementById("counterTitle");

let counter = 0;
document.getElementById("counterTitle").textContent = `Counter: ${counter}`

increaseButton.onclick = function() {
    counter++;
    counterTitle.textContent = `Counter: ${counter}`
}
decreaseButton.onclick = function() {
    counter--;
    counterTitle.textContent = `Counter: ${counter}`
}
resetButton.onclick = function() {
    counter = 0;
    counterTitle.textContent = `Counter: ${counter}`
}