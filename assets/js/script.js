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
                          <a href="calculator.html"><button id="target-weight" type="button" class="btn btn-danger btn-lg px-4 gap-3">Calculator</button></a>
                          
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
document.getElementById("calculator").addEventListener("click", calcFormTargetWeightMetric);

//Event attached to the parent to target children
// code from code pen, explained by Sean Young on Webinar 22/07/2021
//https://codepen.io/seanyoung247/pen/qBmbZQK

document.getElementById("main-container").addEventListener("click", function(event){
  if(event.target.matches("#target-weight")) {
    
    calcFormTargetWeightMetric();
    
} else if (event.target.matches("#target-date")) {
  
  calcFormTargetDatetMetric();
  
}
});

// Functions to create calculator

/**
 * Main function to create calculator form for Target Date option with Metric measures
 */
 function calcFormTargetDatetMetric() {
  
   return (
    console.log("toggle radio button for date")
 // full HTML of the calculator goes into main-container
   

    
  )
};

/**
 * Main function to create calculator form for Target Weight option with Metric measures
 */


function calcFormTargetWeightMetric() {
  
  return (
    console.log("toggle radio button to Weight")
  )

};
////////////////////////////////////////////styling functions///////////////////////////////////////////////
/**
 * function to remove classes from body and div elements, to display caclulator form correctly on full width of the page
 */

function removeClassH100() {
  let body = document.getElementsByTagName("body")[0];
  let div = document.getElementsByTagName("div")[0];
  body.classList.remove("h-100");
  body.classList.remove("text-center");
  body.classList.remove("d-flex");
  div.classList.remove("cover-container");
};

function addClassH100() {
  let body = document.getElementsByTagName("body")[0];
  let div = document.getElementsByTagName("div")[0];
  body.classList.add("h-100");
  body.classList.add("text-center");
  body.classList.add("d-flex");
  div.classList.add("cover-container");
}

//event listener to replace Metric with imperial and the other way arround
document.getElementById("main-container").addEventListener("change", function(event){
  if(event.target.matches("#imperial")) {
    event.target.matches("#swapMeasures").innerHTML = "<p>ddddddddd</p>"

    console.log("I will change form to Imperial")
  } else if (event.target.matches("#metric")){
    console.log("I will change form to Metric")
    
  }
});

//event listener to replace target date for with target weight and the other way arround
//??? please write it here




//Calculator form validation with javascript - on input for each field regardles which form it is
//https://html.form.guide/snippets/javascript-form-validation-using-regular-expression/

//??? pops alert every time you write in any field



//document.getElementById("main-container").addEventListener("input", function(event){
//  if(event.target.matches("#inputName")) {
//    console.log(`${event.target.value}`)
//    let inputName = event.target.value
//    var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
//    var inputNameResult = AZRegex.test(inputName);
//    if (inputNameResult == false) {
//      console.log("function validating on input for input name field")
//      return false;
//    };
//  } else if (event.target.matches("#inputDiet"))
//  console.log(`${event.target.value}`)
//  let inputName = event.target.value
//  var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
//  var inputNameResult = AZRegex.test(inputName);
//  if (inputNameResult == false) {
//    console.log("function validating on input for input diet field")
//    return false;
//  };
//
//});
  

//Calculator form on submit

document.getElementById("main-container").addEventListener("submit", function(event){
  if(event.target.matches("#calcFormTargetDate")) {
   
    
    handleSubmitTargetDate(event)
    
} else if (event.target.matches("#calcFormTargetWeight")) {
  
    handleSubmitTargetWeight(event);
  
}
});



function handleSubmitTargetDate(event) {
  event.preventDefault();
  console.log("I prevented the form from being submitted");
  
  validateForm()
  addClassH100();
  };

function handleSubmitTargetWeight(event) {
  event.preventDefault();
  console.log("I prevented the form from being submitted");
  addClassH100();
  document.getElementById("main-container").innerHTML = 
  `<p class="shadow-lg">I will let you know the results once I will get round to it...You have submitted data to calculate how long will it take you to acheve your target weight</p>`
};
/////function to validate form ON SUBMIT before calculating the result. loop works, gives 11 undefined, but I want to capture this input field with a specific id
function validateForm(){

  let inputs = document.getElementsByTagName("input");
    for(let input of inputs) {
      
       
        if (input.id === "inputName") {
            console.log(`I have the righ input field to validate - target date input field ${input.id} and I can check if your value ${input.value} is matching my validation function`)
            //Alert message to review your answer
            var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
            let inputNameValue = input.value;
            var inputNameResult = AZRegex.test(inputNameValue);

            if (inputNameResult === false) {
              //to input html to div holding name input need for loop to find the right div
              let divs = document.getElementsByTagName("div")
                for(let div of divs ){
                if (div.id === inputNameDiv) {
                  this.innerHTML = 
                  `
                    <label for="ipnutName" class="form-label">Name</label>
                    <input type="text" class="form-control is-invalid" id="inputName" name="name" required value="${inputNameValue}">
                    <div id="ageHelp" class="invalid-feedback">Please use only letters and special characters in the Name field</div>
                  `
                }
              }

                console.log(`flase result of testing the value ${inputNameResult}`)
                                
            } else {
                console.log(`All good to go value ok, create variable: ${input.value} will be used to calculate final result of calcuation`);
                
              };

          }

    };
  };

  //let form = document.getElementById("calcFormTargetDate");
  //let inputName = form.element["inputName"].value
  //let inputAge = form.element["inputAge"]
  //if (inputName !== isNan) {
  //  console.log("change me into letters")
  //} else {
  //  console.log("give me results of calculations")
  //}
//}