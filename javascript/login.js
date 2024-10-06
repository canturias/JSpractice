import { isWhitespace } from "../index.js";

let username;
document.getElementById("submit").onclick = function() {
    username = document.getElementById("username").value.trim();
    if (isWhitespace(username)) {
        document.getElementById("welcome").textContent = `Welcome`;
    }
    else {
        document.getElementById("welcome").textContent = `Welcome, ${username}!`;
    } 
}

document.getElementById("submit").addEventListener('click', function() {
    const loginElement = document.getElementById('login');
    const loginLine = document.getElementById('loginLine');
    const toggle = document.getElementById('toggle');
    if (username != "") {
        loginElement.remove();
        loginLine.remove();
        toggle.classList.remove('toggle');
    }
    else {
        const redBorder = document.getElementById("username");
        redBorder.classList.add('red-border');
    }
});

document.getElementById("username").addEventListener('click', function() {
    const blackBorder = document.getElementById("username");
    blackBorder.classList.remove('red-border');
});

document.getElementById("username").addEventListener('focus', function() {
    const blackBorder = document.getElementById("username");
    blackBorder.classList.remove('red-border');
});