// Your code goes here
let num1 = +prompt('Your first number?', '');
let num2 = +prompt('Your second number?', '');
const numsBetween = [];

if (isNaN(num1) || isNaN(num2) || num1 >= num2) {
    alert('Invalid input data')
} else {
    for (let i=Math.floor(num1+1); i<num2; i++) {
        numsBetween.push(i);
    }
    alert(`First number: ${num1} \nSecond number: ${num2} \n\nNumbers between: ${numsBetween}`);
}