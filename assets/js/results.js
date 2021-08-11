
//https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object

var search = location.search.substring(1);
console.log(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }));

console.log(search);
// this object holds all data that user has input in the calculator form

var allFormData = (JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }));
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
var heightInches = allFormData["height-inches"]
var waistCm = allFormData["waist-cm"]
var waistInches = allFormData["waist-inches"]
var inputGender = allFormData["gender"];
var excerciseHours = allFormData["excercise-hours"]

// variables for the divs that will have content input by this javascript

const displayCurrentWeight = document.getElementById("display-current-weight")
const displayCurrentWeightTwo = document.getElementById("display-current-weight2")
const displayTargetWeight = document.getElementById("display-target-weight")
const displayTargetDate = document.getElementById("display-target-date")
const divDisplayWaistLine = document.getElementById("waist-line")
const divDisplayExcerciseHours = document.getElementById("input-excercise")

//test if the data input is imperial or metric measure

function isImperial(stoneTest, poundsTest) {

    if ((stoneTest !== "") || (poundsTest !== "")) {
        return true;
    } else {
        return false;
    };
};

// functions to add or remove classes copied from Felipe Souza Alarcon_mentor, and explained on mentoring meeting 31.07.2021

/**
 * Function to add class
 */
 function addClass(className, targetNode) {
    targetNode.classList.add(className);
  };
  
/**
 * Function to remove class
 */
  
  function removeClass(className, targetNode){
    targetNode.classList.remove(className);
  };

// get values in kg
var variableCurrentWeightIntoKg = weightIntoKg(currentWeightStone, currentWeightPounds, currentWeightKg);
var variableTargetWeightIntoKg = weightIntoKg(targetWeightStone, targetWeightPounds, targetWeightKg);

function weightIntoKg(stone, pounds, kg) {
    if (isImperial(stone, pounds)) {

        return((stone * 6.35029) + (pounds * 0.453592));
    } else {

        return(kg);
    };
};

//////////////////////////////////////////////// I need function to get stone and pounds from kg/////////////////////// display string
/**
 * function to get stone and pounds from the given value in Kg
 * returs the value in stones and pounds as a string
 */
var stone
var pounds
var stringKgIntoImperialOrKg = ""

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
            stringKgIntoImperialOrKg = kg + " kg"
        
        // function will calculate from kg to imperial and check if the result was in full stones and if so, function will display string showing weight in stones 
        } else if (pounds === 0) {
            stringKgIntoImperialOrKg = stone + " st";
         
        // function will display string showing weight in stones and pounds
        } else {
            stringKgIntoImperialOrKg = stone + " st" + pounds + " lb";
        
        };

        return(stringKgIntoImperialOrKg)
    };

    return(displayStringForWeight(kg, stone, pounds));
};



// get values in meters
var variableHeightIntoMeters = lengthIntoMeters(heightFeet, heightInches, heightCm);

function lengthIntoMeters(feet, inches, cm) {

    if (isImperial(feet, inches)) {
        return(((feet * 30.48) + (inches * 2.54)) / 100);
    } else {
        return(cm / 100);
    };
    
};

// function to calculate BMI

function calculateBMI (kg, meters) {

    let BMI = kg/Math.pow(meters, 2);
    parseInt(BMI)
    console.log(parseInt(BMI))
    return(parseInt(BMI));
};
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
        displayNode.classList.add("my-invisible")
        
    } else {
        displayNode.innerHTML = `${userInputStone} st ${userInputPounds} lbs`;
    };
};

//////////////////////////////////////////////////////////////// calculating Targets


const dayInMs = 86400000
const minLossKgPerDay = 0.056164384
const maxLossKgPerDay = 0.129597714

/**
 * Function to calclate how many days it takes to loose the given amount of weight
 *
 */
function howManyDays (current, target, lossKgPerDay) {
    return((current - target) / lossKgPerDay);
};

/**
 * Function to calculate the date when the target weight will be acheved
 * returns the date value in miliseconds
 */

function dateWhenAcheved (current, target, lossKgPerDay) {
    return(todayInMs + (86400000 * howManyDays(current, target, lossKgPerDay)));
};

// dates in miliseconds 
const todayInMs = new Date().getTime();
const targetDateInMs = new Date(targetDate).getTime()
console.log(todayInMs)
console.log(`this is a target date in miliseconds ${targetDateInMs}`)

// dates looking like JavaScript
//for minimum date and maximum date - for minimum speed of weight loss and maximum speed weight loss respectively

var variableMinDateWhenAcheved = new Date(dateWhenAcheved(variableCurrentWeightIntoKg, variableTargetWeightIntoKg, minLossKgPerDay));
var variableMaxDateWhenAcheved = new Date(dateWhenAcheved(variableCurrentWeightIntoKg, variableTargetWeightIntoKg, maxLossKgPerDay));

// today in Javascript format
var todayJS = new Date();
// target Date in format resembling JavaScript date
var targetDateJS = new Date(targetDate)
var targetDateJSString = targetDateJS.toString()

console.log(`this is a target date looking like JavaScript date ${targetDateJS.toString()}`)

// changing the date from format looking like Javascript date into a string
var stringMinDateWhenAcheved = variableMinDateWhenAcheved.toString()
var stringMaxDateWhenAcheved = variableMaxDateWhenAcheved.toString()
var todayJSString = todayJS.toString()

function showMeDate(dateString) {
    let thisDate = "";
    thisDate = dateString[8] + dateString[9];

    if (thisDate[0] === "0") {
        thisDate = thisDate[1];
    };
    let thisMonth = "";
    thisMonth = dateString[4] + dateString[5] + dateString[6];

    let thisYear = "";
    thisYear = dateString[11] + dateString[12] + dateString[13] + dateString[14];
    
    completeDate = thisDate + " " + thisMonth + " " + thisYear
    console.log(`${thisDate} ${thisMonth} ${thisYear}`);
    console.log(completeDate);
    return(completeDate);
};

//////////////////////////////////////calculate weight on target date 
/**
 * Function to calculate how many days from today to the target date
 * Time in miliseconds - target date minus today, gives numbers of days
 */
function daysBetweenTargetAndToday(tomorrow, today) {
    console.log(`days between target date and today ${parseInt((tomorrow - today) / dayInMs)}`)
    return(parseInt((tomorrow - today) / dayInMs));
};


function whatWeightLossAcheved(days, lossPerDay) {
    console.log(`weight loss in kg depending on the speed ${(days * lossPerDay)} the speed per day ${lossPerDay} number of days ${days}`)
    return(days * lossPerDay);
};

function whatFinalWeightAcheved(current, weightLoss) {
    console.log(`final result of weight ${current} minus ${weightLoss} equals ${parseInt(current - weightLoss)}`);
    return(parseInt(current - weightLoss));
};

var minlResultInKg = whatFinalWeightAcheved(variableCurrentWeightIntoKg, whatWeightLossAcheved(daysBetweenTargetAndToday(targetDateInMs, todayInMs), minLossKgPerDay))

var maxResultInKg = whatFinalWeightAcheved(variableCurrentWeightIntoKg, whatWeightLossAcheved(daysBetweenTargetAndToday(targetDateInMs, todayInMs), maxLossKgPerDay))
//////////////////////////////////////////////////////////////////////////////////////////////here starts displaying things in cards


// display name where it is needed in the cards

let allNameDivs = document.getElementsByClassName("input-name");

for (nameDiv of allNameDivs) {
    nameDiv.innerHTML = allFormData["input-name"];
};

// display BMI for the user
document.getElementById("display-current-BMI").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);
document.getElementById("display-current-BMI2").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);

// display current weight
displayWeight(displayCurrentWeight, currentWeightKg, currentWeightStone, currentWeightPounds)
displayWeight(displayCurrentWeightTwo, currentWeightKg, currentWeightStone, currentWeightPounds)

//cards display different content in cards depeneding if user opted for target weight or target date

function displayWeightOrDate () {
    if (targetDate === "") {
        // display this in cards when the user chose option target weight
        // card - target
        displayWeight(displayTargetWeight, targetWeightKg, targetWeightStone, targetWeightPounds);
        addClass("my-invisible", displayTargetDate)
        removeClass("my-invisible", displayTargetWeight)

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
        addClass("my-invisible", displayTargetWeight)
        removeClass("my-invisible", displayTargetDate)

        // card - speed
        document.getElementById("div-min-acheved").innerHTML = 
        `<div  class="d-inline"> Going for low carb diet you can acheve </div>
        <div class="d-inline text-success fw-bold">${functionKgIntoImperialOrKg(minlResultInKg)}</div><div>on ${showMeDate(targetDateJSString)}.</div>`;
    
        document.getElementById("div-max-acheved").innerHTML = 
        `<div  class="d-inline">Going all in and starting Keto Diet your weight can go as low as</div>
        <div class="d-inline text-success fw-bold">${functionKgIntoImperialOrKg(maxResultInKg)}.</div`;


    };
};

// display excercise time
console.log(divDisplayExcerciseHours)
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
            console.log("I am female")
            if ((waistInches === "") && (parseInt(waistCm) >= 80)) {
                divDisplayWaistLine.innerHTML = `Your current is ${waistCm} cm. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine)
            } else if ((waistInches !== "") && ((parseInt(waistInches)) > 31)) {
                divDisplayWaistLine.innerHTML = `${waistInches} in. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine)
            };
        // if the user is other gender, male or other written in input field
        } else {
            console.log("I ma male")
            if ((waistInches === "") && (parseInt(waistCm) >= 94)) {
                divDisplayWaistLine.innerHTML = `Your current waist is ${waistCm} cm. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine)
            } else if ((waistInches !== "") && ((parseInt(waistInches)) >= 37)) {
                divDisplayWaistLine.innerHTML = `${waistInches} in. This means that you are carrying too much fat around your stomach, which can raise your risk of heart disease, type 2 diabetes and stroke.`;
                removeClass("my-invisible", divDisplayWaistLine)
            };
        };
  };

// change which cards are displayed depending on current BMI and gender

document.addEventListener("DOMContentLoaded",  function() {

    let testBMI = (calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters))

    let cardGoodNews = document.getElementById("good-news")
    let cardTarget = document.getElementById("card-target")
    let cardSpeed = document.getElementById("card-speed")
    let cardIF = document.getElementById("card-if")
    let cardWaist = document.getElementById("card-waist")
    let cardExcercise = document.getElementById("card-excercise")
    let cardFemale = document.getElementById("card-female")
    let cardCalories = document.getElementById("card-calories")
 

    if ( testBMI < 25) {
        
        console.log(calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters))
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
        displayWaistLine()
        // display target in for the user, returns target date or target  weight
        displayWeightOrDate()
        removeClass("my-invisible", cardFemale);
        addClass("my-invisible", cardGoodNews);


    } else {
        // call function to display Waist line if Waist Line tests are met
        displayWaistLine()
        // display target in for the user, returns target date or target  weight
        displayWeightOrDate()
        addClass("my-invisible", cardGoodNews);

    }
})

let buttons = document.getElementsByTagName("button");
      for(let button of buttons) {
        button.addEventListener("click", function() {
          if (this.innerHTML === "Dietitian") {
              console.log("I clicked for dietititan now")
                var myWindow = window.open("", "", "width=700, height=700");
              myWindow.document.write(
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="description" content="">
                        <meta name="description" content="Change your fuel - website aiming to encourage people to change to keto diet">
                        <meta name="keywords" content="weight loss, keto, keto diet, diet, target weight, ">
                        <meta name="author" content="JoGorska">

                        <!--google fonts-->
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Kodchasan:wght@200&display=swap" rel="stylesheet">

                        <!--my stylesheet link-->
                        <link rel="stylesheet" href="assets/css/style.css">
                    <title>Be Honest!</title>
                </head>
                <body class="background-tape-animated">
                <div class="my-heading-font my-text-shadow my-text-danger">
                    <div class="center my-box rounded-corners my-text-center">
                        <p>${excerciseHours.value} me!</p>
                
                        
                    </div>
                </div>
                </body>
                </html>`);
              setTimeout(function(){ myWindow.close() }, 3000);

              // moves window from the corner
              // https://www.w3schools.com/jsref/met_win_moveto.asp
              function moveWin() {
                myWindow.moveTo(500, 200);                                  // Moves the new window   
                myWindow.focus();                                           // Sets focus to the new window
              }
              moveWin()
            }
        })
    }