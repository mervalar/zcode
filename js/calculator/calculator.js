let number = document.getElementById("nbr");
let operator = ["+", "-"];

function one(num) {
  console.log({ num });

  number.value += "1";
}
function two() {
  number.value += "2";
}
function two() {
  number.value += "3";
}
function plus() {
  number.value += "+";
}

function answerCalculation(operationString) {
  const operationsList = ["+", "-", "*", "/"];
  const numbers = operationString.split(/[+\-*/]/);
  const operations = operationString
    .split("")
    .filter((char) => operationsList.includes(char));

  let cumul = Number(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    if (operations[i - 1] === "+") {
      cumul += Number(numbers[i]);
    } else if (operations[i - 1] === "-") {
      cumul -= Number(numbers[i]);
    } else if (operations[i - 1] === "*") {
      cumul *= Number(numbers[i]);
    } else if (operations[i - 1] === "/") {
      cumul /= Number(numbers[i]);
    }
  }

  return cumul;
}
function equal() {
  console.log(answerCalculation(number.value));
  number.value = answerCalculation(number.value);
}
