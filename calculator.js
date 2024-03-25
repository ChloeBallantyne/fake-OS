import createElementWithText from "./dom-utils.js";

const form = document.querySelector("form");
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const operator = document.getElementById("operator");
const resultArea = document.getElementById("resultArea");

const calculate = (x, y, op) => {
  if (op === "+") {
    return x + y;
  } else if (op === "-") {
    return x - y;
  } else if (op === "*") {
    return x * y;
  } else {
    return x / y;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(inputOne.value, inputTwo.value, operator.value);

  let resultData = calculate(
    Number(inputOne.value),
    Number(inputTwo.value),
    operator.value
  );

  console.log(resultData);

  createElementWithText("p", resultData, resultArea);

  inputOne.value = "";
  inputTwo.value = "";
});
