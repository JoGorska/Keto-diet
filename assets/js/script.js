//remember to use ID male and female from welcome question to pre fill the form in calculator

// function - Replace questions Loose Weight -> Excercise More
// I need one function to replace HTML for male and female and two functions to pre fill the form in calculator 



document.getElementById('learn-more').addEventListener("click", function() {
  let mainContainer = document.getElementById("main-container");
  
  //Excercise Question
  mainContainer.innerHTML = `

    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
      <h1 id="excercise-question" class="display-5 fw-bold">Do you want to excercise More?</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4"></p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-danger btn-lg px-4 gap-3">Yes</button>
          <button type="button" class="btn btn-success btn-lg px-4">No</button>
        </div>
      </div>
    </div>`
    
  //Loop through all buttons responding to yes and no

  let buttons = document.getElementsByTagName("button");
    for(let button of buttons) {
      button.addEventListener("click", function() {
        if (this.innerHTML === "Yes") {
            console.log("I clicked Yes")
            //Alert message to review your answer
            alert("I need you to be Honest with me!")
                    
        } else if (this.innerHTML === "No") {
            console.log("I clicked No");

            let mainContainer =document.getElementById("main-container");

            //Calorie Question 
            mainContainer.innerHTML = `
              <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
                <h1 id="calorie-question" class="display-5 fw-bold">Do you want to calculate Every calorie?</h1>
                <div class="col-lg-6 mx-auto">
                  <p class="lead mb-4"></p>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-danger btn-lg px-4 gap-3">Yes</button>
                    <button type="button" class="btn btn-success btn-lg px-4">No</button>
                  </div>
                </div>
              </div>` 

            //new loop for buttons after HTML has been changed
            let buttons = document.getElementsByTagName("button");
            for(let button of buttons) {
              button.addEventListener("click", function() {

                if (this.innerHTML === "Yes") {
                  console.log("I clicked Yes, to calorie count");

                  //Alert message to review your answer
                  alert("I need you to be Honest with me!")
              

                } else if (this.innerHTML === "No") {
                  console.log("I clicked No to calorie count");

                  let mainContainer =document.getElementById("main-container");
                    //Calculator Question 
                  mainContainer.innerHTML = `
                
                    <div class="px-4 py-5 my-5 text-center">
                      <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
                      <h1 id="calorie-question" class="display-5 fw-bold">Predicted Result Calculator</h1>
                      <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">See what you can acheve by changing your fuel from carbohydrates to fat (yes FAT)</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                          <button id="target-weight" type="button" class="btn btn-danger btn-lg px-4 gap-3">Target Weight</button>
                          <button id="target-date" type="button" class="btn btn-success btn-lg px-4">Target Date</button>
                        </div>
                      </div>
                    </div>`
                } else {
                    console.log("button unnknown")
                };
              });
            } 
        } else {
          console.log("button unnknown")
        }

      })
    };
});

//////////////////////////////////////////////////////////////////Caclulator starts here///////////////////////////////////////////////////////////////////////////

// Calculator

///////////////////////////////////// to be deleted

//
// code from code pen, explained by Sean Young on Webinar 22/07/2021
//https://codepen.io/seanyoung247/pen/qBmbZQK
// commented out as I don't know how to give 2 different responses to two different buttons.
//function testing(event) {
//  if (this && event) console.log(`this.id = ${this.id}, event.target.id = ${event.target.id}`);
//  return () => document.getElementById("main-container").innerHTML = `<div>ddddd</div>`

//}



// Dynamic event attachement
//document.getElementById("main-container").addEventListener("click", function() {
  // Attaches the testing function as an event listener on button click
  //document.getElementById("target-weight").addEventListener("click", testing());
  
  // Attaches the testing function to the  button
  //document.getElementById("target-date").addEventListener("click", testing());
//});

/////////////////////////////////////////////////actual content of calculator starts here///////////////////////////////////////////////

//Event listeners to create calculator
document.getElementById("calculator").addEventListener("click", calculatorTargetWeightMetric);

//Event attached to the parent to target children
// code from code pen, explained by Sean Young on Webinar 22/07/2021
//https://codepen.io/seanyoung247/pen/qBmbZQK

document.getElementById("main-container").addEventListener("click", function(event){
  if(event.target.matches("button")) {
    event.target.innerHTML = "Target Weight";
    calculatorTargetWeightMetric();
    
  
} else {
  event.target.innerHTML = "Target Date";
  calculatorTargetDateMetric();
}
});

//Second attempt on event 

/**
 * Main function to create calculator for Target Weight option with Metric measures
 */
function calculatorTargetWeightMetric() {
  console.log("create the calculator target weight in metric measures")
};

/**
 * Main function to create calculator for Target Date option with Metric measures
 */
 function calculatorTargetDatetMetric() {
  console.log("create the calculator target date in metric measures")
};