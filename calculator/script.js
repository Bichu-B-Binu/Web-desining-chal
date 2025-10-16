let display = document.getElementById("screen");

let cureentInput = "";
let prevoiusInput = "";
let operation = null;

const buttonClick = (val) => {
  cureentInput = cureentInput + val;
  display.value = cureentInput;
};

const opClick = (val) => {
  prevoiusInput = cureentInput;
  operation = val;
  display.value = prevoiusInput + operation;
  cureentInput = "";
};

const equalClick = () => {
  switch (operation) {
    case "+":
      cureentInput = Number(prevoiusInput) + Number(cureentInput);
      display.value = cureentInput;
      break;
    case "-":
      cureentInput = Number(prevoiusInput) - Number(cureentInput);
      display.value = cureentInput;
      break;
    case "*":
      cureentInput = Number(prevoiusInput) * Number(cureentInput);
      display.value = cureentInput;
      break;
    case "/":
      cureentInput = Number(prevoiusInput) / Number(cureentInput);
      display.value = cureentInput;
      break;
    default:
      return;
  }
};

const clearDisplay = () => {
  document.getElementById("screen").value = "";
  cureentInput = "";
  prevoiusInput = "";
  operation = null;
};
