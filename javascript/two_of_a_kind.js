let die1, die2, diceScore = 0;

document.getElementById("diceRollerButton").onclick = function() {
    document.getElementById("diceTitle").style.color = "initial";
    document.getElementById("dicePlus").textContent = ``;
    die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    die2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (die1 === die2 && die1 !== 6) {
        diceScore++;
        document.getElementById("diceTitle").style.color = "green";
        document.getElementById("diceTitle").textContent = `Two of a Kind:\n ${die1}\u00A0and\u00A0${die2}`;
        document.getElementById("diceScore").textContent = `Score: ${diceScore}`;
        document.getElementById("dicePlus").textContent = `(+1)`;
    }
    else if (die1 === 6 && die2 ===6) {
        diceScore += 3;
        document.getElementById("diceTitle").style.color = "cornflowerblue";
        document.getElementById("diceTitle").textContent = `Two of a Kind:\n ${die1}\u00A0and\u00A0${die2}\u00A0`;
        document.getElementById("diceScore").textContent = `Score: ${diceScore}`;
        document.getElementById("dicePlus").textContent = `(+3)`;
    }
    else {
        document.getElementById("diceTitle").textContent = `Two of a Kind:\n ${die1}\u00A0and\u00A0${die2}`;
    }
}