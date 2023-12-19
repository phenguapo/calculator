let displayValue = "";

function addToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "Enter",
    "Backspace",
  ];

  if (allowedKeys.includes(key) || event.code === "NumpadMultiply") {
    if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      displayValue = displayValue.slice(0, -1);
      document.getElementById("display").value = displayValue;
    } else {
      addToDisplay(key);
    }
  } else if (event.shiftKey && key === "Shift") {
    event.preventDefault();
  } else {
    alert("Only numbers and operators are allowed, try again!");
  }
});

function addToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
