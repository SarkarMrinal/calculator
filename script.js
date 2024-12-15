// Grabbing All Elements by ID
// Number Buttons
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const doubleZero = document.getElementById("doubleZero");

// Operator Buttons
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");

// Special Buttons
const allClear = document.getElementById("allClear");
const singleDelete = document.getElementById("singleDelete");
const point = document.getElementById("point");
const equal = document.getElementById("equal");

// Display
const display = document.getElementById("display");

// Event Listeners for Number Buttons
seven.addEventListener("click", function () {
  display.value += "7";
});
eight.addEventListener("click", function () {
  display.value += "8";
});
nine.addEventListener("click", function () {
  display.value += "9";
});
four.addEventListener("click", function () {
  display.value += "4";
});
five.addEventListener("click", function () {
  display.value += "5";
});
six.addEventListener("click", function () {
  display.value += "6";
});
one.addEventListener("click", function () {
  display.value += "1";
});
two.addEventListener("click", function () {
  display.value += "2";
});
three.addEventListener("click", function () {
  display.value += "3";
});
zero.addEventListener("click", function () {
  display.value += "0";
});
doubleZero.addEventListener("click", function () {
  display.value += "00";
});

// Event Listeners for Operator Buttons
add.addEventListener("click", function () {
  if (!["+", "-", "*", "/"].includes(display.value.slice(-1))) {
    display.value += "+";
  }
});
subtract.addEventListener("click", function () {
  if (!["+", "-", "*", "/"].includes(display.value.slice(-1))) {
    display.value += "-";
  }
});
multiply.addEventListener("click", function () {
  if (!["+", "-", "*", "/"].includes(display.value.slice(-1))) {
    display.value += "*";
  }
});
division.addEventListener("click", function () {
  if (!["+", "-", "*", "/"].includes(display.value.slice(-1))) {
    display.value += "/";
  }
});

// Event Listeners for Special Buttons
allClear.addEventListener("click", function () {
  display.value = ""; // Clear the display
});

singleDelete.addEventListener("click", function () {
  display.value = display.value.slice(0, -1); // Delete the last character
});

point.addEventListener("click", function () {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
});

// Calculation Logic
equal.addEventListener("click", function () {
  try {
    // Remove spaces and evaluate the expression
    let sanitizedInput = display.value.replace(/\s+/g, "");
    display.value = new Function("return " + sanitizedInput)();
  } catch (error) {
    display.value = "Error"; // Display "Error" for invalid input
  }
});

// Prevent Space Input
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    event.preventDefault(); // Prevent spaces from being added
  }
});
