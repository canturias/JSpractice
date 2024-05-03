function isWhitespace(string) {
    return /^\s*$/.test(string);
  }

// Welcome
let username;
document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value;
    if (isWhitespace(username)) {
        document.getElementById("welcome").textContent = `Welcome`;
    }
    else {
        document.getElementById("welcome").textContent = `Welcome, ${username}!`;
    }
    
}

// Area Calculator
let length, width;
document.getElementById("areaButton").onclick = function() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    let area = length * width;
    if (isNaN(length) || isNaN(width)) {
        document.getElementById("area").textContent = `Area Calculator — Invalid`;
    }
    else {
        document.getElementById("area").textContent = `Area Calculator — ${area.toFixed(2)}`;
    }
    
}

// Celsisus to Fahrenheit to Celsius
let tempInput, tempResult;

checkSelected();

document.getElementById("ctf").addEventListener("click", checkSelected);
document.getElementById("ftc").addEventListener("click", checkSelected);
document.getElementById("tempInput").addEventListener("change", checkSelected);

function checkSelected() {
    var ctfRadio = document.getElementById("ctf");
    var ftcRadio = document.getElementById("ftc");

    tempInput = parseFloat(document.getElementById("tempInput").value);
    console.log(tempInput);

    if (ctfRadio.checked) {
        console.log("CTF");
        document.getElementById("tempTitle").textContent = "Celsius to Fahrenheit";
        document.getElementById("tempLabel").textContent = "Celsius";
        document.getElementById("tempButton").onclick = function() {
            tempResult = (tempInput * 9 / 5) + 32;
            document.getElementById("tempTitle").textContent = `Celsius to Fahrenheit — ${tempResult.toFixed(2)}\u00B0F`;
        }
            
    } else if (ftcRadio.checked) {
        console.log("FTC");
        document.getElementById("tempTitle").textContent = "Fahrenheit to Celsius";
        document.getElementById("tempLabel").textContent = "Fahrenheit";
        document.getElementById("tempButton").onclick = function() {
            tempResult = (tempInput - 32) * 5 / 9;
            document.getElementById("tempTitle").textContent = `Fahrenheit to Celsius — ${tempResult.toFixed(2)}\u00B0C`;
        }
    }
}

// Counter
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const counterTitle = document.getElementById("counterTitle");

let counter = 0;
document.getElementById("counterTitle").textContent = `Counter — ${counter}`

increaseButton.onclick = function() {
    counter++;
    counterTitle.textContent = `Counter — ${counter}`
}
decreaseButton.onclick = function() {
    counter--;
    counterTitle.textContent = `Counter — ${counter}`
}
resetButton.onclick = function() {
    counter = 0;
    counterTitle.textContent = `Counter — ${counter}`
}

// Random Whole Number Generator
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
        document.getElementById("numberGeneratorTitle").textContent = `Random Whole Number Generator — Invalid`;
    }
    else {
        let randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
        document.getElementById("numberGeneratorTitle").textContent = `Random Whole Number Generator — ${randomNumber}`;
    }
}

// Two of a Kind
let die1, die2, diceScore = 0;

document.getElementById("diceRollerButton").onclick = function() {
    document.getElementById("diceTitle").style.color = "initial";
    document.getElementById("dicePlus").textContent = ``;
    die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    die2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (die1 === die2 && die1 !== 6) {
        diceScore++;
        document.getElementById("diceTitle").style.color = "green";
        document.getElementById("diceTitle").textContent = `Two of a Kind — ${die1} and ${die2}`;
        document.getElementById("diceScore").textContent = `Score: ${diceScore}`;
        document.getElementById("dicePlus").textContent = `(+1)`;
    }
    else if (die1 === 6 && die2 ===6) {
        diceScore += 3;
        document.getElementById("diceTitle").style.color = "cornflowerblue";
        document.getElementById("diceTitle").textContent = `Two of a Kind — ${die1} and ${die2} (Double Six!)`;
        document.getElementById("diceScore").textContent = `Score: ${diceScore}`;
        document.getElementById("dicePlus").textContent = `(+3)`;
    }
    else {
        document.getElementById("diceTitle").textContent = `Two of a Kind — ${die1} and ${die2}`;
    }
}

