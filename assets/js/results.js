
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

const displayCurrentWeight = document.getElementById("display-current-weight")
const displayCurrentWeightTwo = document.getElementById("display-current-weight2")
const displayTargetWeight = document.getElementById("display-target-weight")
const displayTargetDate = document.getElementById("display-target-date")

//test if the data input is imperial or metric measure


function isImperial(stone, pounds) {

    if ((stone !== "") || (pounds !== "")) {
        return true;
    } else {
        return false;
    };
};

// functions to add or remove classes copied from Felipe Souza Alarcon_mentor, and explained on mentoring meeting 31.07.2021

/**
 * Function to add class
 * @param {*} className 
 * @param {*} targetNode 
 */
 function addClass(className, targetNode) {
    targetNode.classList.add(className);
  };
  
  /**
   * Function to remove class
   * @param {*} className 
   * @param {*} targetNode 
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
 * @param {*} displayNode 
 * @param {*} userInputKg 
 * @param {*} userInputStone 
 * @param {*} userInputPounds 
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
 * @param {*} current 
 * @param {*} target 
 * @param {*} LossKgPerDay 
 * @returns 
 */
function howManyDays (current, target, lossKgPerDay) {
    console.log(current - target);
    console.log(lossKgPerDay);
    console.log((current - target) / lossKgPerDay);
    return((current - target) / lossKgPerDay);
};

/**
 * Function to calculate the date when the target weight will be acheved
 * 
 * @param {*} current 
 * @param {*} target 
 * @param {*} lossKgPerDay 
 * @returns 
 */

function dateWhenAcheved (current, target, lossKgPerDay) {
    let today = new Date().getTime();

    console.log(today);
    console.log(today + howManyDays(current, target, lossKgPerDay));
    return(today + howManyDays(current, target, lossKgPerDay));
}

// change date in miliseconds to actual javascript date

var variableDateWhenAcheved = new Date(dateWhenAcheved(variableCurrentWeightIntoKg, variableTargetWeightIntoKg, minLossKgPerDay));
console.log(variableDateWhenAcheved)
variableDateWhenAcheved = variableDateWhenAcheved.toString()
console.log(variableDateWhenAcheved)

// changing the result into a string
var stringDateWhenAcheved = variableDateWhenAcheved.toString()

console.log(stringDateWhenAcheved)

function showMeDate(dateString) {
    let thisDate = "";
    thisDate = dateString[8] + dateString[9];

    if (thisDate.includes("0")) {
        thisDate = thisDate[1];
    };
    let thisMonth = "";
    thisMonth = dateString[4] + dateString[5] + dateString[6];

    let thisYear = "";
    thisYear = dateString[11] + dateString[12] + dateString[13] + dateString[14];
    
    console.log(`${thisDate} ${thisMonth} ${thisYear}`);
}

showMeDate(stringDateWhenAcheved);

//////////////////////////////////////////////////////////////////////////////////////////////here starts displaying things in cards
// display user name in results.html

document.getElementById("input-name").innerHTML = allFormData["input-name"];
document.getElementById("input-name2").innerHTML = allFormData["input-name"];




// display BMI for the user
document.getElementById("display-current-BMI").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);
document.getElementById("display-current-BMI2").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);

// display current weight
displayWeight(displayCurrentWeight, currentWeightKg, currentWeightStone, currentWeightPounds)
displayWeight(displayCurrentWeightTwo, currentWeightKg, currentWeightStone, currentWeightPounds)



//display target weight or target date

function displayWeightOrDate () {
    if (targetDate === "") {
        displayWeight(displayTargetWeight, targetWeightKg, targetWeightStone, targetWeightPounds);
        
        addClass("my-invisible", displayTargetDate)
        removeClass("my-invisible", displayTargetWeight)
    } else {
        displayTargetDate.innerHTML = `${targetDate} <div class="d-inline text-body fw-normal">as a date to loose as much weight as you can.</div>`;
        addClass("my-invisible", displayTargetWeight)
        removeClass("my-invisible", displayTargetDate)
    }
};

// call function

displayWeightOrDate()

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
    let inputGender = allFormData["gender"];

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
        removeClassClass("my-invisible", cardFemale);


    } else {
        addClass("my-invisible", cardGoodNews);

    }
})

