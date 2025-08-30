const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

clear.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equals.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput);  // evaluates math expression
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
});
