
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key ==="Enter") {
            checkAnswer();
        }

    }
    
    )

    runGame("addition");
});
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two random numbers 1 - 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else if (gameType === "substract") {
        displaySubtractQuestion(num1, num2);

    } else if (gameType === "division") {
        displayDivideQuestion(num1, num2);

    } else {
        alert(`unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}
/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
            alert("Hey! You got it right! :D")
            incrementScore();
    }else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];

    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];

    } else if (operator === "-") {
        return [operand1 - operand2, "substract"];

    } else if (operator === "/") {
        return [operand1 / operand2, "division"];

    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, Aborting!`
    }
    
}


function displayWeightQuestion(answer1, answer2) {
    document.getElementById('question').textContent = 'Do you want to Loose Weight?';  
    document.getElementById('answer1').textContent = 'Male';
    document.getElementById('answer2').textContent = 'Female';

}

function displayExcerciseQuestion(answer1, answer2) {
    document.getElementById('question').textContent = 'Do you want to Excercise More';  
    document.getElementById('answer1').textContent = 'Yes';
    document.getElementById('answer2').textContent = 'No';
}

function displayCaloriesQuestion(answer1, answer2) {
    document.getElementById('question').textContent = 'Do you want to record every calorie you consume?';  
    document.getElementById('answer1').textContent = 'Yes';
    document.getElementById('answer2').textContent = 'No';

}

function displayDisplayCalculatorQuestion(answer1, answer2) {
    document.getElementById('question').textContent = 'Click below to calculate your weight loss:';  
    document.getElementById('answer1').textContent = 'I have a weight goal';
    document.getElementById('answer2').textContent = 'I have a hard deadline';

}


