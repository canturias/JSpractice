let minimumNumber = 1;
let maximumNumber = 100;

document.getElementById("minimumNumber").addEventListener("change", checkMinimumNumber);
document.getElementById("maximumNumber").addEventListener("change", checkMaximumNumber);

function checkMinimumNumber() {
    minimumNumber = parseInt(document.getElementById("minimumNumber").value);
}

function checkMaximumNumber() {
    maximumNumber = parseInt(document.getElementById("maximumNumber").value);
}

document.getElementById("numberGeneratorButton").onclick = function() {
    if (minimumNumber > maximumNumber) {
        document.getElementById("numberGeneratorTitle").textContent = `Random Whole Number Generator: Invalid`;
    }
    else {
        let randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
        document.getElementById("numberGeneratorTitle").textContent = `Random Whole Number Generator: ${randomNumber}`;
    }
}