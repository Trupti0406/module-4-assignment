// getting elements
// Function for all calculations

function calculate() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;
  var operator = document.getElementById("operator").value;

  //   For addition
  if (operator == "+") {
    var ans = parseInt(number1) + parseInt(number2);
  }

  // For subtraction
  if (operator == "-") {
    var ans = parseInt(number1) - parseInt(number2);
  }

  // For multiplication
  if (operator == "*") {
    var ans = parseInt(number1) * parseInt(number2);
  }

  // For division
  if (operator == "/") {
    var ans = parseInt(number1) / parseInt(number2);
  }

  document.getElementById("answer").value = ans;
}

function clearAnswer() {
  document.getElementById("answer").value = "";
}
