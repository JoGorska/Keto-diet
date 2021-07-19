//remember to use ID male and female from welcome question to pre fill the form in calculator

// function - Replace questions Loose Weight -> Excercise More
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

document.getElementById('yes-excercise').addEventListener("clic", function(){

    
}
)
