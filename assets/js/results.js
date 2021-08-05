
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






// get values in kg
var variableCurrentWeightIntoKg = weightIntoKg(currentWeightStone, currentWeightPounds, currentWeightKg);
// var variableTargetWeightIntoKg = weightIntoKg(targetWeightStone, targetWeightPounds, targetWeightKg);

function weightIntoKg(stone, pounds, kg) {
    if (isImperial(stone, pounds)) {
        console.log("I used weight in imperial measures")
        console.log((stone * 6.35029) + (pounds * 0.453592));
        return((stone * 6.35029) + (pounds * 0.453592));
    } else {
        console.log("I used weight in kg")
        console.log(kg);
        return(kg);
    };
};



// get values in meters
var variableHeightIntoMeters = lengthIntoMeters(heightFeet, heightInches, heightCm);

function lengthIntoMeters(feet, inches, cm) {
    console.log("I used height in imperial measures")
    if (isImperial(feet, inches)) {
        console.log(((feet * 30.48)+(inches * 2.54)) / 100);
        return(((feet * 30.48) + (inches * 2.54)) / 100);
    } else {
        console.log("I used height in cm")
        console.log(cm / 100);
        return(cm / 100);
    };
    
};

// function to calculate BMI

function calculateBMI (kg, meters) {
    console.log(kg)
    console.log(meters)
    console.log(kg / Math.pow(meters, 2));
    console.log(Math.pow(meters, 2));

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

    if (isImperial((currentWeightStone, currentWeightPounds) === false) && (userInputKg !== "")){
        console.log("test if imperial and if user input kg")
        displayNode.innerHTML = `${userInputKg} kg`;

    } else if ((isImperial(currentWeightStone, currentWeightPounds) === true) && (userInputStone === "")) {
        console.log("test if imperial and if user input lbs")
        displayNode.innerHTML = `${userInputPounds} lbs`;

    } else if ((isImperial(currentWeightStone, currentWeightPounds) === true) && (userInputPounds === "")) {
        displayNode.innerHTML = `${userInputStone} st`;

    } else if ((userInputKg === "") && (userInputStone === "") && (userInputPounds === "")) {
        displayNode.innerHTML = "";
        displayNode.classList.add("my-invisible")
        
    } else {
        displayNode.innerHTML = `${userInputStone} st ${userInputPounds} lbs`;
    };
};

// display user name in results.html

document.getElementById("input-name").innerHTML = allFormData["input-name"];
document.getElementById("input-name2").innerHTML = allFormData["input-name"];

// display current weight for the user 


// display BMI for the user
document.getElementById("display-current-BMI").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);
document.getElementById("display-current-BMI2").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);

// display current weight
displayWeight(displayCurrentWeight, currentWeightKg, currentWeightStone, currentWeightPounds)
displayWeight(displayCurrentWeightTwo, currentWeightKg, currentWeightStone, currentWeightPounds)

//display target weight or target date


displayWeight(displayTargetWeight, targetWeightKg, targetWeightStone, targetWeightPounds);

displayTargetDate.innerHTML = targetDate;
