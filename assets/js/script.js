//remember to use ID male and female from welcome question to pre fill the form in calculator
document.getElementById('male').addEventListener("click", function() {
    let excerciseMore =document.getElementsByClassName("welcome-container")[0];

    excerciseMore.innerHTML = `

    <div class="excercise-container">
    <div class="big-welcome">Do you want to excercise More?</div>
    <div class="answer-container">
        <div class="yes-answer">Yes</div>
        <div class="no-answer">No</div>
    </div>
    </div>
    `
}

) 