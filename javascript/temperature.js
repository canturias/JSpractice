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
        document.getElementById("tempTitle").textContent = "Celsius to Fahrenheit";
        document.getElementById("tempLabel").textContent = "Celsius";
        document.getElementById("tempInput").placeholder = "\u00B0C";
        document.getElementById("tempButton").onclick = function() {
            tempResult = (tempInput * 9 / 5) + 32;
            if (isNaN(tempInput)) {
                document.getElementById("tempTitle").textContent = `Celsius to Fahrenheit: Error`;
            }
            else {
                document.getElementById("tempTitle").textContent = `Celsius to Fahrenheit: ${tempResult.toFixed(2)}\u00B0F`;
            }
        }      
    } else if (ftcRadio.checked) {
        document.getElementById("tempTitle").textContent = "Fahrenheit to Celsius";
        document.getElementById("tempLabel").textContent = "Fahrenheit";
        document.getElementById("tempInput").placeholder = "\u00B0F";
        document.getElementById("tempButton").onclick = function() {
            tempResult = (tempInput - 32) * 5 / 9;
            if (isNaN(tempInput)) {
                document.getElementById("tempTitle").textContent = `Celsius to Fahrenheit: Error`;
            }
            else {
                document.getElementById("tempTitle").textContent = `Fahrenheit to Celsius: ${tempResult.toFixed(2)}\u00B0C`;
            } 
        }
    }
}