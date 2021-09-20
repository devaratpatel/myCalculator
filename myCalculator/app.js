/* eslint-disable no-unused-vars */
function calculate(inputObj) {
  let number1 = parseFloat(document.calcForm.num1.value);
  let number2 = parseFloat(document.calcForm.num2.value);
  let result = document.calcForm.result;

  if (inputObj.value === "Add") {
    result.value = number1 + number2;
  } else if (inputObj.value === "Subtract") {
    result.value = number1 - number2;
  } else if (inputObj.value === "Multiply") {
    result.value = number1 * number2;
  } else if (inputObj.value === "Divide") {
    result.value = number1 / number2;
  } else {
    result.value = number1 % number2;
  }
}
