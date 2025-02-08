let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
function sumOfTwoNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");

    // Convert input to numbers
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    // Check for valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        alert("Invalid input. Please enter a valid number.");
    } else {
        let sum = number1 + number2;
        alert(`The sum of ${number1} and ${number2} is ${sum}.`);
    }
}

// Call the function
sumOfTwoNumbers();
