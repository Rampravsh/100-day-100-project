const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(
  "#add, #subtract, #multiply, #divide"
);
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";
let operator = "";
let previousInput = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    currentInput += number.innerText;
    display.value = currentInput;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculate();
    }
    operator = op.innerText;
    previousInput = currentInput;
    currentInput = "";
  });
});

equals.addEventListener("click", () => {
  if (currentInput === "" || previousInput === "") return;
  calculate();
  operator = "";
});

clear.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
});

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result;
  previousInput = "";
  display.value = result;
}
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    // If the key is a number
    currentInput += key;
    display.value = currentInput;
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    // If the key is an operator
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculate();
    }
    operator = key;
    previousInput = currentInput;
    currentInput = "";
  } else if (key === "Enter" || key === "=") {
    // If the key is Enter or equals
    event.preventDefault(); // Prevent default behavior (e.g., form submission)
    if (currentInput === "" || previousInput === "") return;
    calculate();
    operator = "";
  } else if (key === "Escape") {
    // If the key is Escape (for clear)
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
  } else if (key === "Backspace") {
    // If the key is Backspace
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
});
