//remember to use ID male and female from welcome question to pre fill the form in calculator

// function - Replace questions Loose Weight -> Excercise More
// I need one function to replace HTML for male and female and two functions to pre fill the form in calculator 


document.getElementById('male').addEventListener("click", function() {
    let excerciseMoreVar =document.getElementsByClassName("welcome-container")[0];

    excerciseMoreVar.innerHTML = `

        <div class="excercise-container">
        <div class="big-welcome">Do you want to excercise More?</div>
        <div class="answer-container">
            <div id="yes-excercise" class="yes-answer my-col-6">Yes</div>
            <div id="no-excercise" class="no-answer my-col-6">No</div>
        </div>
        </div>
        `
})

document.getElementById('female').addEventListener("click", function() {
    let excerciseMoreVar =document.getElementsByClassName("welcome-container")[0];

    excerciseMoreVar.innerHTML = `

        <div class="excercise-container">
        <div class="big-welcome">Do you want to excercise More?</div>
        <div class="answer-container">
            <div id="yes-excercise" class="yes-answer my-col-6">Yes</div>
            <div id="no-excercise" class="no-answer my-col-6">No</div>
        </div>
        </div>
        `

        
})

document.getElementById("yes-excercise").addEventListener("click", function(){
    console.log("inside honest function");
        let honestDiv = document.getElementByClassName(`excercise-container`);
        honestDiv.innerHTML = 
        `<div class="answer-container">
            <p>Please can you be honest with me?</p>
            <button>Go Back</button>
        </div>`
}
)
// Calculator

