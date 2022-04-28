// Your code goes here
const four = 4;
const three = 3;
const eight = 8;
let attempts = 3;
let totalPrize = 0;
let prizeOne = 25;
let prizeTwo = 50;
let prizeThree = 100;
let possiblePrize = [prizeOne, prizeTwo, prizeThree];
let max = 8;
let userNum, randomNum;
let game = confirm('Do you want to play a game?');
let again, range;
if (game) {
    randomNum = Math.floor(Math.random(0, max) * max);
    startGame();
} else {
    alert('You did not become a billionaire, but can.');
}
function startGame () {
    userNum = +prompt(`Choose a roulette pocket number from 0 to ${max}
    Attempts left: ${attempts}
    Total Prize: ${totalPrize}
    Possible prize on current attempt: ${possiblePrize[attempts-1]}$`, '');
    if (userNum === randomNum) {
        totalPrize += possiblePrize[attempts-1];
        range = confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`);
        if (range) {
            gameLast();
        } else {
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            playAgain();
        }
    } else {
        comparison();
    }
}
function gameLast () {
    randomNum = Math.floor(Math.random(0, max) * max);
    max += four;
    attempts = three;
    for (let i=0; i<possiblePrize.length; i++){
        possiblePrize[i] *= 2;
    }
    startGame();
}
function playAgain () {
    again = confirm('Do you want to play again');
    if (again) {
        attempts = three;
        max = eight;
        totalPrize = 0;
        randomNum = Math.floor(Math.random(0, max) * max);
        possiblePrize = [prizeOne, prizeTwo, prizeThree];
        startGame();
    } else {
        alert('You did not become a billionaire, but can.');
    }
}
function comparison () {
    attempts--;
    if (attempts > 0){
        startGame();
    } else {
        alert(`Thank you for your participation. Your prize is: ...$`);
        playAgain();
    }
}
