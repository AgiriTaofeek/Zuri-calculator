"use strict";
// Courtesy intro
alert("Welcome to my basic Javascript calculator");
// first operand value from the user
const firstNumber = +prompt("Please enter the first number: ");
//check if operand is a number
if (isNaN(firstNumber)) alert("please enter a number");
// second operand value from the user
const secondNumber = +prompt("Please enter the second number");
// check if operand is a number
if (isNaN(secondNumber)) alert(secondNumber);
// operator for the operation from user
const operation = prompt("Please enter an operation from + , - , / , * ");
if (operation === "+")
  alert(`${firstNumber} + ${secondNumber} is ${firstNumber + secondNumber}`);
if (operation === "-")
  alert(`${firstNumber} - ${secondNumber} is ${firstNumber - secondNumber}`);
if (operation === "*")
  alert(`${firstNumber} * ${secondNumber} is ${firstNumber * secondNumber}`);
if (operation === "/")
  alert(`${firstNumber} / ${secondNumber} is ${firstNumber / secondNumber}`);
if (
  operation !== "+" &&
  operation !== "-" &&
  operation !== "/" &&
  operation !== "*"
)
  alert("Please enter a valid operation listed earlier");
