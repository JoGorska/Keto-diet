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
  removeClassH100();
   return (
    document.getElementById("main-container").innerHTML = 
 // full HTML of the calculator goes into main-container
 //BUG ??? need to add nav bar because it displays home...   
`
<div class="container">
      
    <div class="p-5 pb-md-4 mx-auto text-center">
        <h1 id="booking" class="display-4 fw-normal border-top p-5 font-family-header border-success">Calculator</h1>
        <p class="fs-5 text-muted pb-5 border-bottom border-success">Choose from one of the options below to calculate how long will it take you to acheve the target weight or how much weight you can loose untill your target date</p>
    </div>
        
</div>

<!--Calculator Form-->
<form id="calcFormTargetDate" action="https://formdump.codeinstitute.net/" method="POST" target="_blank">
    <div class="container p-3 mb-3">
        
        <!--
        Choose Target Weight or Target Date
        Button group copied from Bootswatch and applied bootsstrap and bootstwatch styling
        -->

        <div class="text-center bs-component mb-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="target" id="targetWeight" autocomplete="off" >
              <label class="btn btn-outline-success" for="targetWeight">Target Weight</label>
              <input type="radio" class="btn-check" name="target" id="targetDate" autocomplete="off" checked required>
              <label class="btn btn-outline-success" for="targetDate">Target Date</label>
            </div>
        </div>

        <!--Name-->
        <div class="mb-3">
            <label for="ipnutName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" name="name" required>
        </div>

        <!--Age-->
        <div class="mb-3">
            <label for="inputAge" class="form-label">Age</label>
            <input type="number" class="form-control" id="inputAge" min="18" max="110" name="name" aria-describedby="ageHelp" required>
            <div id="ageHelp" class="form-text">We'll never share your age with anyone else.</div>
        </div>

        <!--
        Choose Imperial Measures and Metric
        Button group copied from Bootswatch and applied bootsstrap and bootstwatch styling
        -->
            
        <fieldset>
            <legend class="text-center mb-5">Choose between Impearial Units and Metric</legend>
            
            <!--button group code copied from bootswatch and applied styling from bootswatch and bootstrap-->
            <div class="text-center bs-component mb-3">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="unitsOfMeasure" id="imperial" autocomplete="off">
                    <label class="btn btn-outline-success" for="imperial">Imperial Units</label>
                    <input type="radio" class="btn-check" name="unitsOfMeasure" id="metric" autocomplete="off" checked="" required>
                    <label class="btn btn-outline-success" for="metric">Metric</label>
                </div>
            </div>
            
            <!--Current weight for metric measures-->
            <div id="swapMeasures" class="container">
                <div class="mb-3">
                  <label for="currentWeightKg" class="form-label">Current Weight</label>
                  <input type="number" class="form-control" id="currentWeightKg" name="currentWeightKg" placeholder="kg">
                </div>
                <!--Target date for metric-->
                <div class="mb-3">
                  <label for="targetDatetKg" class="form-label">Target Date</label>
                  <input type="date" class="form-control" id="targetDatetKg" name="targetDatetKg" required>
                </div>
                <!--height for metric-->
              <div class="mb-3">
                <label for="heightM" class="form-label">Height</label>
                <input type="number" class="form-control" id="heightM" name="heightM" placeholder="cm" required>
              </div>
            </div>
            
        </fieldset>

        <!--Hours of excercise per week-->
        <div class="mb-3">
            <label for="excerciseHours" class="form-label">Hours of excercise per week</label>
            <input type="number" class="form-control" id="excerciseHours" name="excerciseHours" required>
        </div>

        <label class="form-label" for="inputDiet">Your current Diet</label>
        <input class="form-control mb-3" type="text" name="inputDiet" id="inputDiet" list="dietList" placeholder="Please write here or choose from drop down list" minlength="2" maxlength="160" required>

        <datalist id="dietList">
            <option>None</option>
            <option>Keto</option>
            <option>Low Carb</option>
            <option>High Protein</option>
            <option>Eat Less</option>
            <option>Zryj Mniej</option>
            <option>Noom</option>
            <option>NHS program</option>
            <option>Cabbage Soup Diet</option>
            <option>Weight Watchers</option>
            <option>Slimming World</option>
            <option>Low Fat</option>
            <option>My Own Diet</option>

        </datalist>

        <!--Buttons at the end of the page-->
      
        <div class="container-fluid text-center">
            <div class="row">
               <div class="col">
                    <button type="submit" class="btn btn-success">Submit</button>
               </div>
               <div class="col">
                <button type="reset" class="btn btn-danger">Reset</button>
               </div> 
            </div>
        </div>
    </div>
  </form>
    
  `)
};

/**
 * Main function to create calculator form for Target Weight option with Metric measures
 */


function calcFormTargetWeightMetric() {
  removeClassH100();
  return (
  document.getElementById("main-container").innerHTML = 

`  <div class="container">
      
    <div class="p-5 pb-md-4 mx-auto text-center">
        <h1 id="booking" class="display-4 fw-normal border-top p-5 font-family-header border-success">Calculator</h1>
        <p class="fs-5 text-muted pb-5 border-bottom border-success">Choose from one of the options below to calculate how long will it take you to acheve the target weight or how much weight you can loose untill your target date</p>
    </div>
        
</div>

<!--Calculator Form-->
<form id="calcFormTargetWeight" action="https://formdump.codeinstitute.net/" method="POST" target="_blank">
    <div class="container p-3 mb-3">
        
        <!--
        Choose Target Weight or Target Date
        Button group copied from Bootswatch and applied bootsstrap and bootstwatch styling
        -->

        <div class="text-center bs-component mb-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="target" id="targetWeight" autocomplete="off" checked required>
              <label class="btn btn-outline-success" for="targetWeight">Target Weight</label>
              <input type="radio" class="btn-check" name="target" id="targetDate" autocomplete="off">
              <label class="btn btn-outline-success" for="targetDate">Target Date</label>
            </div>
        </div>

        <!--Name-->
        <div class="mb-3">
            <label for="ipnutName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" name="name" required>
        </div>

        <!--Age-->
        <div class="mb-3">
            <label for="inputAge" class="form-label">Age</label>
            <input type="number" class="form-control" id="inputAge" min="18" max="110" name="name" aria-describedby="ageHelp" required>
            <div id="ageHelp" class="form-text">We'll never share your age with anyone else.</div>
        </div>

        <!--
        Choose Imperial Measures and Metric
        Button group copied from Bootswatch and applied bootsstrap and bootstwatch styling
        -->
            
        <fieldset>
            <legend class="text-center mb-5">Choose between Impearial Units and Metric</legend>
            
            <!--button group code copied from bootswatch and applied styling from bootswatch and bootstrap-->
            <div class="text-center bs-component mb-3">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="unitsOfMeasure" id="imperial" autocomplete="off">
                    <label class="btn btn-outline-success" for="imperial">Imperial Units</label>
                    <input type="radio" class="btn-check" name="unitsOfMeasure" id="metric" autocomplete="off" checked="" required>
                    <label class="btn btn-outline-success" for="metric">Metric</label>
                </div>
            </div>
                       
            <!--Current weight for metric measures-->
            <div id="swapMeasures" class="container">
                <div class="mb-3">
                    <label for="currentWeightKg" class="form-label">Current Weight</label>
                    <input type="number" class="form-control" id="currentWeightKg" name="currentWeightKg" placeholder="kg">
                </div>
                <!--Target weight for metric-->
                <div class="mb-3">
                    <label for="targetWeightKg" class="form-label">Target Weight</label>
                    <input type="number" class="form-control" id="targetWeightKg" name="targetWeightKg" placeholder="kg" required>
                </div>
                <!--height for metric-->
              <div class="mb-3">
                  <label for="heightM" class="form-label">Height</label>
                  <input type="number" class="form-control" id="heightM" name="heightM" placeholder="cm" required>
              </div>
            </div>
            
        </fieldset>

        <!--Hours of excercise per week-->
        <div class="mb-3">
            <label for="excerciseHours" class="form-label">Hours of excercise per week</label>
            <input type="number" class="form-control" id="excerciseHours" name="excerciseHours" required>
        </div>

        <label class="form-label" for="inputDiet">Your current Diet</label>
        <input class="form-control mb-3" type="text" name="inputDiet" id="inputDiet" list="dietList" placeholder="Please write here or choose from drop down list" minlength="2" maxlength="160" required>

        <datalist id="dietList">
            <option>None</option>
            <option>Keto</option>
            <option>Low Carb</option>
            <option>High Protein</option>
            <option>Eat Less</option>
            <option>Zryj Mniej</option>
            <option>Noom</option>
            <option>NHS program</option>
            <option>Cabbage Soup Diet</option>
            <option>Weight Watchers</option>
            <option>Slimming World</option>
            <option>Low Fat</option>
            <option>My Own Diet</option>

        </datalist>

        <!--Buttons at the end of the page-->
      
        <div class="container-fluid text-center">
            <div class="row">
               <div class="col">
                    <button id="submitButton" type="submit" class="btn btn-success">Submit</button>
               </div>
               <div class="col">
                <button type="reset" class="btn btn-danger">Reset</button>
               </div> 
            </div>
        </div>
    </div>
  </form>
`)
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
    
    console.log("I will change form to Imperial")
  } else if (event.target.matches("#metric")){
    console.log("I will change form to Metric")
    changeFormToMetric();
  }
});




//Calculator form validation with javascript - on input for each field regardles which form it is
//https://html.form.guide/snippets/javascript-form-validation-using-regular-expression/

document.getElementById("main-container").addEventListener("input", function(event){
  if(event.target.matches("#inputName")) {
    console.log(`${event.target.value}`)
    let inputName = event.target.value
    var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
    var inputNameResult = AZRegex.test(inputName);
    if (inputNameResult == false) {
      alert("please put only letters")
      return false;
    };
  } else if (event.target.matches("inputDiet"))
  console.log(`${event.target.value}`)
  let inputName = event.target.value
  var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
  var inputNameResult = AZRegex.test(inputName);
  if (inputNameResult == false) {
    alert("please put only letters")
    return false;
  };

});
  

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
  document.getElementById("main-container").innerHTML = 
  `<p class="shadow-lg">I will let you know the results once I will get round to it...You have submitted data to calculate how much weight you will loose untill target date</p>`
};

function handleSubmitTargetWeight(event) {
  event.preventDefault();
  console.log("I prevented the form from being submitted");
  addClassH100();
  document.getElementById("main-container").innerHTML = 
  `<p class="shadow-lg">I will let you know the results once I will get round to it...You have submitted data to calculate how long will it take you to acheve your target weight</p>`
};

function validateForm(){
  let form = document.getElementById("calcFormTargetDate");
  let inputName = form.element["inputName"]
  let inputAge = form.element["inputAge"]
  if (inputName !== isNan) {
    console.log("change me into letters")
  } else {
    console.log("give me results of calculations")
  }
}