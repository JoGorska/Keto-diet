
//https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object

var search = location.search.substring(1);
console.log(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value); }));

console.log(search);
// this object holds all data that user has input in the calculator form

var allFormData = (JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value); }));
console.log(allFormData);



// variables off the string
var currentWeightStone = allFormData["current-weight-stone"];
var currentWeightPounds = allFormData["current-weight-pounds"];
var currentWeightKg = allFormData["current-weight-kg"];
var targetWeightStone = allFormData["target-weight-stone"];
var targetWeightPounds = allFormData["target-weight-pounds"];
var targetWeightKg = allFormData["target-weight-kg"];
var targetDate = allFormData["target-date"];
var heightCm = allFormData["height-cm"];
var heightFeet = allFormData["height-feet"];
var heightInches = allFormData["height-inches"];
var waistCm = allFormData["waist-cm"];
var waistInches = allFormData["waist-inches"];
var inputGender = allFormData["input-gender"];
var excerciseHours = allFormData["excercise-hours"];

// variables for the divs that will have content input by this javascript

const displayCurrentWeight = document.getElementById("display-current-weight");
const displayCurrentWeightTwo = document.getElementById("display-current-weight2");
const displayTargetWeight = document.getElementById("display-target-weight");
const displayTargetDate = document.getElementById("display-target-date");
const divDisplayWaistLine = document.getElementById("waist-line");
const divDisplayExcerciseHours = document.getElementById("input-excercise");

//test if the data input is imperial or metric measure

function isImperial(stoneTest, poundsTest) {

    if ((stoneTest !== "") || (poundsTest !== "")) {
        return true;
    } else {
        return false;
    }
}

// functions to add or remove classes copied from Felipe Souza Alarcon_mentor, and explained on mentoring meeting 31.07.2021

/**
 * Function to add class
 */
 function addClass(className, targetNode) {
    targetNode.classList.add(className);
  }
  
/**
 * Function to remove class
 */
  
  function removeClass(className, targetNode){
    targetNode.classList.remove(className);
  }

// get values in kg
var variableCurrentWeightIntoKg = weightIntoKg(currentWeightStone, currentWeightPounds, currentWeightKg);
var variableTargetWeightIntoKg = weightIntoKg(targetWeightStone, targetWeightPounds, targetWeightKg);

function weightIntoKg(stone, pounds, kg) {
    if (isImperial(stone, pounds)) {

        return((stone * 6.35029) + (pounds * 0.453592));
    } else {

        return(kg);
    }
}

//////////////////////////////////////////////// I need function to get stone and pounds from kg/////////////////////// display string
/**
 * function to get stone and pounds from the given value in Kg
 * returs the value in stones and pounds as a string
 */
var stone;
var pounds;
var kg;
var stringKgIntoImperialOrKg = "";
// calculate how many pounds and how many stones are in the given value of Kg
var allPounds = kg * 2.2046;
var allStone = kg * 0.1574;

 function functionKgIntoImperialOrKg (kg) {
// calculate how many pounds and how many stones are in the given value of Kg
  allPounds = kg * 2.2046;
  allStone = kg * 0.1574;
    // the user wants to see how many stones and pounds are in the result value
    stone = parseInt(allStone);
    pounds = (stone * 14) - allPounds;

    // if the result is exact stones only, user doesn't want to see the abbreviation lb at the end, 
    //if the results are in kg user wants to see abbreviation kg at the end

    function displayStringForWeight (kg, stone, pounds) {
        // if the user input on current weight was not in stone or pounds, function will display string showing weight in kg
        if (isImperial(currentWeightStone, currentWeightPounds) == false) {
            stringKgIntoImperialOrKg = kg + " kg";
        
        // function will calculate from kg to imperial and check if the result was in full stones and if so, function will display string showing weight in stones 
        } else if (pounds === 0) {
            stringKgIntoImperialOrKg = stone + " st";
         
        // function will display string showing weight in stones and pounds
        } else {
            stringKgIntoImperialOrKg = stone + " st" + pounds + " lb";
        
        }

        return(stringKgIntoImperialOrKg);
    }

    return(displayStringForWeight(kg, stone, pounds));
}



// get values in meters
var variableHeightIntoMeters = lengthIntoMeters(heightFeet, heightInches, heightCm);

function lengthIntoMeters(feet, inches, cm) {

    if (isImperial(feet, inches)) {
        return(((feet * 30.48) + (inches * 2.54)) / 100);
    } else {
        return(cm / 100);
    }
    
}

// function to calculate BMI

function calculateBMI (kg, meters) {

    let BMI = kg/Math.pow(meters, 2);
    parseInt(BMI);
    console.log(parseInt(BMI));
    return(parseInt(BMI));
}
/**
 * Function to display the weight correctly including units (kg, stone or lbs) in each variant, whether the user input was metric or imperial
 * The test for imperial is on current weight but it is correct test for any input, as user was required to input this value
 */
function displayWeight (displayNode, userInputKg, userInputStone, userInputPounds) {

    if (isImperial((userInputStone, userInputPounds) === false) && (userInputKg !== "")){
        displayNode.innerHTML = `${userInputKg} kg`;

    } else if ((isImperial(userInputStone, userInputPounds) === true) && (userInputStone === "")) {
        displayNode.innerHTML = `${userInputPounds} lbs`;

    } else if ((isImperial(userInputStone, userInputPounds) === true) && (userInputPounds === "")) {
        displayNode.innerHTML = `${userInputStone} st`;

    } else if ((userInputKg === "") && (userInputStone === "") && (userInputPounds === "")) {
        displayNode.innerHTML = "";
        displayNode.classList.add("my-invisible");
        
    } else {
        displayNode.innerHTML = `${userInputStone} st ${userInputPounds} lbs`;
    }
}

//////////////////////////////////////////////////////////////// calculating Targets


const dayInMs = 86400000;
const minLossKgPerDay = 0.056164384;
const maxLossKgPerDay = 0.129597714;

/**
 * Function to calclate how many days it takes to loose the given amount of weight
 *
 */
function howManyDays (current, target, lossKgPerDay) {
    return((current - target) / lossKgPerDay);
}

/**
 * Function to calculate the date when the target weight will be acheved
 * returns the date value in miliseconds
 */

function dateWhenAcheved (current, target, lossKgPerDay) {
    return(todayInMs + (86400000 * howManyDays(current, target, lossKgPerDay)));
}

// dates in miliseconds 
const todayInMs = new Date().getTime();
const targetDateInMs = new Date(targetDate).getTime();
console.log(todayInMs);
console.log(`this is a target date in miliseconds ${targetDateInMs}`);

// dates looking like JavaScript
//for minimum date and maximum date - for minimum speed of weight loss and maximum speed weight loss respectively

var variableMinDateWhenAcheved = new Date(dateWhenAcheved(variableCurrentWeightIntoKg, variableTargetWeightIntoKg, minLossKgPerDay));
var variableMaxDateWhenAcheved = new Date(dateWhenAcheved(variableCurrentWeightIntoKg, variableTargetWeightIntoKg, maxLossKgPerDay));


// target Date in format resembling JavaScript date
var targetDateJS = new Date(targetDate);
var targetDateJSString = targetDateJS.toString();

console.log(`this is a target date looking like JavaScript date ${targetDateJS.toString()}`);

// changing the date from format looking like Javascript date into a string
var stringMinDateWhenAcheved = variableMinDateWhenAcheved.toString();
var stringMaxDateWhenAcheved = variableMaxDateWhenAcheved.toString();


function showMeDate(dateString) {
    let thisDate = "";
    thisDate = dateString[8] + dateString[9];

    if (thisDate[0] === "0") {
        thisDate = thisDate[1];
    }
    let thisMonth = "";
    thisMonth = dateString[4] + dateString[5] + dateString[6];

    let thisYear = "";
    thisYear = dateString[11] + dateString[12] + dateString[13] + dateString[14];
    let completeDate;
    completeDate = thisDate + " " + thisMonth + " " + thisYear;
    console.log(`${thisDate} ${thisMonth} ${thisYear}`);
    console.log(completeDate);
    return(completeDate);
}

//////////////////////////////////////calculate weight on target date 
/**
 * Function to calculate how many days from today to the target date
 * Time in miliseconds - target date minus today, gives numbers of days
 */
function daysBetweenTargetAndToday(tomorrow, today) {
    console.log(`days between target date and today ${parseInt((tomorrow - today) / dayInMs)}`);
    return(parseInt((tomorrow - today) / dayInMs));
}


function whatWeightLossAcheved(days, lossPerDay) {
    console.log(`weight loss in kg depending on the speed ${(days * lossPerDay)} the speed per day ${lossPerDay} number of days ${days}`);
    return(days * lossPerDay);
}

function whatFinalWeightAcheved(current, weightLoss) {
    console.log(`final result of weight ${current} minus ${weightLoss} equals ${parseInt(current - weightLoss)}`);
    return(parseInt(current - weightLoss));
}

var minlResultInKg = whatFinalWeightAcheved(variableCurrentWeightIntoKg, whatWeightLossAcheved(daysBetweenTargetAndToday(targetDateInMs, todayInMs), minLossKgPerDay));

var maxResultInKg = whatFinalWeightAcheved(variableCurrentWeightIntoKg, whatWeightLossAcheved(daysBetweenTargetAndToday(targetDateInMs, todayInMs), maxLossKgPerDay));
//////////////////////////////////////////////////////////////////////////////////////////////here starts displaying things in cards


// display name where it is needed in the cards

let allNameDivs = document.getElementsByClassName("input-name");
let nameDiv;
for (nameDiv of allNameDivs) {
    nameDiv.innerHTML = allFormData["input-name"];
}

// display BMI for the user
document.getElementById("display-current-BMI").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);
document.getElementById("display-current-BMI2").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);

// display current weight
displayWeight(displayCurrentWeight, currentWeightKg, currentWeightStone, currentWeightPounds);
displayWeight(displayCurrentWeightTwo, currentWeightKg, currentWeightStone, currentWeightPounds);

//cards display different content in cards depeneding if user opted for target weight or target date

function displayWeightOrDate () {
    if (targetDate === "") {
        // display this in cards when the user chose option target weight
        // card - target
        displayWeight(displayTargetWeight, targetWeightKg, targetWeightStone, targetWeightPounds);
        addClass("my-invisible", displayTargetDate);
        removeClass("my-invisible", displayTargetWeight);

        // card - speed
        document.getElementById("div-min-acheved").innerHTML = 
        `<div  class="d-inline"> Going for low carb diet you can acheve this goal on </div>
        <div class="d-inline text-success fw-bold">${showMeDate(stringMinDateWhenAcheved)}</div`;
    
        document.getElementById("div-max-acheved").innerHTML = 
        `<div  class="d-inline">Going all in and starting Keto Diet you can acheve this goal on </div>
        <div class="d-inline text-success fw-bold">${showMeDate(stringMaxDateWhenAcheved)}</div`;

    } else {
        // display this in cards when user chose option target date
        // card - target
        displayTargetDate.innerHTML = `${showMeDate(targetDateJSString)} <div class="d-inline text-body fw-normal">as a date to loose as much weight as you can.</div>`;
        addClass("my-invisible", displayTargetWeight);
        removeClass("my-invisible", displayTargetDate);

        // card - speed
        document.getElementById("div-min-acheved").innerHTML = 
        `<div  class="d-inline"> Going for low carb diet you can acheve </div>
        <div class="d-inline text-success fw-bold">${functionKgIntoImperialOrKg(minlResultInKg)}</div><div>on ${showMeDate(targetDateJSString)}.</div>`;
    
        document.getElementById("div-max-acheved").innerHTML = 
        `<div  class="d-inline">Going all in and starting Keto Diet your weight can go as low as</div>
        <div class="d-inline text-success fw-bold">${functionKgIntoImperialOrKg(maxResultInKg)}.</div`;


    }
}

// display excercise time
console.log(divDisplayExcerciseHours);
divDisplayExcerciseHours.innerHTML = excerciseHours;


// display waist line
// Why waist also matters source: https://www.nhs.uk/live-well/healthy-weight/bmi-calculator/

/**
 * function to display the content of the div with the value and description of having too bigh waist line
 * if the user has not input any waist, the parseInt value of waist is zero therefore the div will not display
 */
 function displayWaistLine() {
    // check if user has input waist line value at all
        // if the user is a female
        if ((inputGender === "Female") || (inputGender === "female")) {
            console.log("I am female");
            if ((waistInches === "") && (parseInt(waistCm) >= 80)) {
                divDisplayWaistLine.innerHTML = `Your current is ${waistCm} cm. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine);
            } else if ((waistInches !== "") && ((parseInt(waistInches)) > 31)) {
                divDisplayWaistLine.innerHTML = `${waistInches} in. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine);
            }
        // if the user is other gender, male or other written in input field
        } else {
            console.log("I male");
            if ((waistInches === "") && (parseInt(waistCm) >= 94)) {
                divDisplayWaistLine.innerHTML = `Your current waist is ${waistCm} cm. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine);
            } else if ((waistInches !== "") && ((parseInt(waistInches)) >= 37)) {
                divDisplayWaistLine.innerHTML = `${waistInches} in. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine);
            }
        }
  }

// change which cards are displayed depending on current BMI and gender

document.addEventListener("DOMContentLoaded",  function() {

    let testBMI = (calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters));

    let cardGoodNews = document.getElementById("good-news");
    let cardTarget = document.getElementById("card-target");
    let cardSpeed = document.getElementById("card-speed");
    let cardIF = document.getElementById("card-if");
    let cardWaist = document.getElementById("card-waist");
    let cardExcercise = document.getElementById("card-excercise");
    let cardFemale = document.getElementById("card-female");
    let cardCalories = document.getElementById("card-calories");
 

    if ( testBMI < 25) {
        
        console.log(calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters));
        removeClass("my-invisible", cardGoodNews);
        addClass("my-invisible", cardTarget);
        addClass("my-invisible", cardSpeed);
        addClass("my-invisible", cardIF);
        addClass("my-invisible", cardWaist);
        addClass("my-invisible", cardExcercise);
        addClass("my-invisible", cardFemale);       
        addClass("my-invisible", cardCalories);

    } else if ((testBMI >= 25) && ((inputGender === "Female") || (inputGender === "female"))) {
        // call function to display Waist line if Waist Line tests are met
        displayWaistLine();
        // display target in for the user, returns target date or target  weight
        displayWeightOrDate();
        removeClass("my-invisible", cardFemale);
        addClass("my-invisible", cardGoodNews);


    } else {
        // call function to display Waist line if Waist Line tests are met
        displayWaistLine();
        // display target in for the user, returns target date or target  weight
        displayWeightOrDate();
        addClass("my-invisible", cardGoodNews);

    }
});
// event listener on the button Dietitian. 
// Allows the user to send the query including fragment of URL containing data.

let buttons = document.getElementsByTagName("button");
      for(let button of buttons) {
        button.addEventListener("click", function() {
          if (this.innerHTML === "Dietitian") {
              console.log("I clicked for dietititan now");
                var myWindow = window.open("", "", "width=700, height=700");
              myWindow.document.write(
                `<!doctype html>
                <html lang="en" class="h-100">
                  <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta name="description" content="">
                    <meta name="description" content="Change your fuel - website aiming to encourage people to change to keto diet">
                    <meta name="keywords" content="weight loss, keto, keto diet, diet, target weight, ">
                    <meta name="author" content="JoGorska">
                    
                    <!--Bootstrap 5 css-->
              
                    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap-grid.css">
                    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap-reboot.css">
                    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap-utilities.css">
                    
                    <!--the below link is to debug console out of error, solution from https://stackoverflow.com/questions/30693021/chrome-developer-tools-shows-favicon-404-error-in-brackets-livepreview-->
                    <link rel="icon" href="data:;base64,iVBORwOKGO=" />
                    
                    <!--link to Bootswatch file to replace Bootstrap's css-->
                    <link rel="stylesheet" href="assets/css/bootstrap.css"> 
                  
                    <!-- Custom styles for this template -->
                    <link href="assets/css/bootstrap/cover.css" rel="stylesheet">
              
                    <!--google fonts-->
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Kodchasan:wght@200&display=swap" rel="stylesheet">
              
                    <!--my stylesheet link-->
                    <link rel="stylesheet" href="assets/css/style.css">
              
                    <title>Change your Fuel</title>  
                </head>
                <body class="clear-shadow d-flex background-img-tape-fixed my-plain-text-font fw-bold">
              
                  <!--Nav bar-->
              
                  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              
                    <!--Nav bar-->
                    <header class="mb-auto">
                      <div class="container mt-5 text-center">
                        <a class="navbar-brand text-center" href="index.html">
                          <img src="/assets/images/keto-logo.png" alt="logo - three sugar cubes with prohibition sign" width="50" height="50" class=" d-inline-block align-text-top float-md-start mb-auto text-center">
                          <h1 class="float-md-start mb-0 text-dark my-heading-font fw-bold">Change your fuel</h1>
                      </a>
                        <nav class="nav nav-masthead justify-content-center float-md-end">
                          <a class="text-dark my-heading-font nav-link" href="index.html">Home</a>
                          <a class="text-dark my-heading-font nav-link" href="calculator.html">Calculator</a>
                          <a class="fw-bold text-dark my-heading-font nav-link my-active" aria-current="page" href="contact.html">Contact</a>
                        </nav>
                      </div>
                    </header>
              
                    <!--Main-->
                  <!--Header-->
              
                  <div class="container">
                          
                      <div class="pb-md-4 mx-auto text-center">
                          <h1 class="display-4 mt-3 mb-3 font-family-header text-dark fw-bold">Contact</h1>
                          <p class="fs-5 text-dark p-1 my-plain-text-font fw-bold my-white-gradient-to-left my-border-radius-bigger">Fill in the details below and we will get back to you.</p>
                      </div>
              
                  </div>
              
                  <!--contact form-->
                  <main>
                    <div class="container mt-5 p-5 mb-5 my-white-gradient-to-left my-border-radius-bigger text-dark">
                      <!--Add formspre form dump to an assigned email-->
                      <form action="https://formspree.io/f/mqkwgzoe" method="POST" target="_blank">
              
                        <label class="form-label mt-5" for="contact-name">Name</label>
                        <input class="form-control mb-3" type="text" name="contact-name" id="contact-name" title="Please write your name without any numbers or special characters">
                        <div id="contact-name-help" class="invalid-feedback my-invisible fw-bold">Please use only letters and special characters in the Name field</div>
                        
                        <label class="form-label" for="email">Email address</label>
                        <input class="form-control mb-3" type="email" id="email" name="email" title="Please enter a valid email address for example example@domain.uk">
                        <div id="email-help" class="invalid-feedback my-invisible">Please enter a valid email address for example example@domain.uk</div>
                        
                        <label class="form-label" for="telephone">Telephone</label>
                        <input class="form-control mb-3" type="number" id="telephone" name="telephone" title="Please enter a valid UK phone number (11 digits)">
                        <div id="telephone-help" class="invalid-feedback my-invisible">Please put valid UK phone number (11 digits)</div>
                        
                        <label class="form-label" for="enquiry">Your enquiry</label>
                        <textarea class="form-control mb-3" type="text" id="enquiry" name="enquiry" rows="3">${search}</textarea>
                        <div id="enquiry-help">We have copied fragment of your results URL containing the data that dietitian will need when speaking with you</div>
                        
              
                        <div class="container text-center p-5">
                          <div class="row">
                            <div class="col p-3">      
                              <button type="submit" class="btn btn-success text-dark">Send</button>
                            </div>
                            <div class="col p-3">
                              <button type="reset" class="btn btn-danger text-dark">Reset</button>
                            </div>  
                          </div>
                        </div>    
                      </form>
                    </div>
                  </main>
              
                    <!--Footer-->
              
                    <!--have a think what you want in footer, repo link added, need linked in, anything else?-->
              
                    <footer class="mt-auto text-success text-center">
                      <p class="fw-bold text-dark my-heading-font" >Copyright 2021 JoGorska <a class="fw-bold text-dark my-heading-font" href="https://github.com/JoGorska">Gitpod</a> and <a class="fw-bold text-dark my-heading-font" href="https://uk.linkedin.com" class="text-white">Linked in</a>.</p>
                    </footer>
                  </div>
              
                  <!--Bootstrap JavaScript-->
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                      
                  <!--my javascript link-->
                  <script src="assets/js/contact.js"></script>
                  
                </body>
              </html>
              
                
                
                `);
              

              // moves window from the corner
              // https://www.w3schools.com/jsref/met_win_moveto.asp

              moveWin();
            }
        });
    }
var MyWindow;
function moveWin() {
  myWindow.moveTo(500, 200);                                  // Moves the new window   
  myWindow.focus();                                           // Sets focus to the new window
}