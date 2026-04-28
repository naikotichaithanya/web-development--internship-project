// GREETING
function setGreeting() {
    let hour = new Date().getHours();
    let msg = "";

    if (hour < 12) msg = "Good Morning ☀️";
    else if (hour < 18) msg = "Good Afternoon 🌤️";
    else msg = "Good Evening 🌙";

    document.getElementById("greeting").innerText = msg;
}
setGreeting();

// CALCULATOR
function calculate(op) {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Enter valid numbers");
        return;
    }

    let result;

    if (op === '+') result = a + b;
    if (op === '-') result = a - b;
    if (op === '*') result = a * b;
    if (op === '/') {
        if (b === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = a / b;
    }

    document.getElementById("result").innerText = "Result: " + result;
}

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// CARD BUTTON
function showMessage() {
    alert("This is my internship project 🚀");
}

// IMAGE ZOOM
function zoomImage(img) {
    document.getElementById("zoomBox").style.display = "flex";
    document.getElementById("zoomImg").src = img.src;
}

function closeZoom() {
    document.getElementById("zoomBox").style.display = "none";
}