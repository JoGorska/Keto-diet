
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "wrong-answer") {
                
                console.log("wrong-aswer add function");
                document.getElementById("answer1").addEventListener("click", hondestDiv);

                function honestDiv() {
                    document.getElementsByClassName("welcome-container")[0].innerHTML = `
                    <div class="welcome-container">
                    <div id="question" class="big-welcome">I need you to be honest with me</div>
                    <div class="answer-container">
                        <button data-type="weight" id="go-back" >Go Back</button>
                    </div>
                    </div>
                    `
                }
            } else {
                let questionType = this.getAttribute("data-type");
                runGame(questionType);
            }
        })
    }
    
});
/**
 * The main game "loop", called when the script is first loaded
 * depending on data-type attribute the game should display different question
 */

function runGame(questionType) {

   

    if (questionType === "weight") {
        displayWeightQuestion();
    } else if (questionType === "excercise") {
        displayExcerciseQuestion();

    } else if (questionType === "calories") {
        displayCaloriesQuestion();

    } else if (questionType === "which-calculator") {
        displayCalculatorQuestion();

    } else {
        alert(`unknown question type: ${questionType}`);
        throw `Unknown question type: ${questionType}. Aborting!`;
    }
}


function displayWeightQuestion() {

    document.getElementsByClassName("welcome-container")[0].innerHTML = `
    <div class="welcome-container">
    <div data-type="weight" id="question" class="big-welcome">Do you want to loose weight?</div>
    <div class="answer-container">
        <div class="my-col-6" ><button data-type="excercise" id="answer1" data-type="excercise"">Male</button></div>
        <div class="my-col-6"><button data-type="excercise id="answer2" data-type="excercise">Female</button></div>
    </div>
    </div>
    `

}

function displayExcerciseQuestion() {
    document.getElementsByClassName("welcome-container")[0].innerHTML = `
    <div class="welcome-container">
    <div data-type="excercise" id="question" class="big-welcome">Do you want to excercise More?</div>
    <div class="answer-container">
        <div class="my-col-6" ><button data-type="wrong-answer" id="answer1">Yes</button></div>
        <div class="my-col-6"><button data-type="calories" id="answer2">No</button></div>
    </div>
    </div>
    `
}

function displayCaloriesQuestion() {
    
    document.getElementsByClassName("welcome-container")[0].innerHTML = `
    <div class="welcome-container">
    <div data-type="calories" id="question" class="big-welcome">Do you want to calculate every Calorie you consume?</div>
    <div class="answer-container">
        <div class="my-col-6" ><button data-type="wrong-answer" id="answer1">Yes</button></div>
        <div class="my-col-6"><button data-type="which-calculator" id="answer2">No</button></div>
    </div>
    </div>
    `

}

function displayDisplayCalculatorQuestion() {
    document.getElementsByClassName("welcome-container")[0].innerHTML = `
    <div class="welcome-container">
    <div data-type="which-calculator" id="question" class="big-welcome">Calculate what you can acheve with Keto Diet:</div>
    <div class="answer-container">
        <div class="my-col-6" ><button data-type="target-weight" id="answer1">How soon I can acheve my weight goal?</button></div>
        <div class="my-col-6"><button data-type="hard-deadline" id="answer2">How much I can loose untill my hard deadline?</button></div>
    </div>
    </div>
    `

}


