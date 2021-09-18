/* eslint-disable no-unused-vars */
function calculate(inputObj) {
  let num1 = parseFloat(document.calcForm.num1.value);
  let num2 = parseFloat(document.calcForm.num2.value);
  let result = document.calcForm.result;

  if (inputObj.value === "Add") {
    result.value = num1 + num2;
  } else if (inputObj.value === "Subtract") {
    result.value = num1 - num2;
  } else if (inputObj.value === "Multiply") {
    result.value = num1 * num2;
  } else if (inputObj.value === "Divide") {
    result.value = num1 / num2;
  } else {
    result.value = num1 % num2;
  }
}
