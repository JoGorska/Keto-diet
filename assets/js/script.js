
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    
    let allDivs = document.getElementsByTagName("div");
    
    for(let thisDiv of allDivs) {
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
    let answer1 = document.getElementById("answer1").innerText;
    if (answer1 === "Yes") {
        document.getElementById("answer1").addEventListener("click", hondestDiv);
        function honestDiv() {
            document.getElementsByClassName("welcome-container")[0].innerHTML = `
            <div class="welcome-container">
            <div id="question" class="big-welcome">I need you to be honest with me</div>
            <div class="answer-container">
                <button id="go-back">Go Back</button>
            </div>
            </div>
            `
            document.getElementById("go-back").addEventListener("click", runGame("weight"));

    } else {

        document.getElementById("answer1").addEventListener("click", calculateCorrectAnswer);
            
    }
}
    
    document.getElementById("answer1").addEventListener("click", );
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    let 


    if (isCorrect) {
        console.log("correct answer, next question please");
    }else {
        console.log("incorrect, get the honestDiv");
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the answers and the questions (plus, minus etc)
 * directly from the DOM, and returns new HTML.
 */
function calculateCorrectAnswer() {

    let answer1 = parseInt(document.getElementById('answer1').innerText);
    let answer2 = parseInt(document.getElementById('answer2').innerText);
    let question = document.getElementById('question').innerText;

    if (question === 'Do you want to Loose Weight?') {
        return [
            document.getElementsByClassName("welcome-container")[0].innerHTML = `
            <div class="welcome-container">
            <div data-type="weight" id="question" class="big-welcome">Do you want to loose weight?</div>
            <div class="answer-container">
                <div data-type="next-question" class="my-col-6" ><button id="answer1" data-type="male">Male</button></div>
                <div data-type="next-question" class="my-col-6"><button id="answer2" data-type="female">Female</button></div>
            </div>
            </div>
            `
        ];

    } else if (question === 'Do you want to excercise More') {
        return [
            document.getElementsByClassName("welcome-container")[0].innerHTML = `
            <div class="welcome-container">
            <div data-type="excercise" id="question" class="big-welcome">Do you want to excercise More?</div>
            <div class="answer-container">
                <div data-type="wrong-answer" class="my-col-6" ><button id="answer1">Yes</button></div>
                <div data-type="next-question" class="my-col-6"><button id="answer2">No</button></div>
            </div>
            </div>
            `
        ];

    } else if (question === 'Do you want to calculate every Calorie you consume?') {
        return [
            document.getElementsByClassName("welcome-container")[0].innerHTML = `
            <div class="welcome-container">
            <div data-type="calories" id="question" class="big-welcome">Do you want to calculate every Calorie you consume?</div>
            <div class="answer-container">
                <div data-type="wrong-answer" class="my-col-6" ><button id="answer1">Yes</button></div>
                <div data-type="next-question" class="my-col-6"><button id="answer2">No</button></div>
            </div>
            </div>
            `
    ];

    } else if (question === 'Calculate what you can acheve with Keto Diet:') {
        return [
        document.getElementsByClassName("welcome-container")[0].innerHTML = `
        <div class="welcome-container">
        <div id="question" class="big-welcome">Calculate what you can acheve with Keto Diet:</div>
        <div class="answer-container">
            <div data-type="target-weight" class="my-col-6" ><button id="answer1">How soon I can acheve my weight goal?</button></div>
            <div data-type="hard-deadline" class="my-col-6"><button id="answer2">How much I can loose untill my hard deadline?</button></div>
        </div>
        </div>
        `
        ];
    } else {
        alert(`Unimplemented question ${question}`);
        throw `Unimplemented question ${question}, Aborting!`
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


