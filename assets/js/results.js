
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
var heightCm = allFormData["height-cm"];
var heightFeet = allFormData["height-feet"];
var heightInches = allFormData["height-inches"]

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
        console.log((stone * 6.35029) + (pounds * 0.453592));
        return((stone * 6.35029) + (pounds * 0.453592));
    } else {
        console.log(kg);
        return(kg);
    };
};



// get values in meters
var variableHeightIntoMeters = lengthIntoMeters(heightFeet, heightInches, heightCm);

function lengthIntoMeters(feet, inches, cm) {
    if (isImperial(feet, inches)) {
        console.log((feet * 30.48)+(inches * 2.54) / 100);
        return((feet * 30.48) + (inches * 2.54) / 100);
    } else {
        console.log(cm / 100);
        return(cm / 100);
    };
    
};

// function to calculate BMI

function calculateBMI (kg, meters) {
    console.log(kg / Math.pow(meters, 2));
    console.log(Math.pow(meters, 2));
    let BMI = kg/Math.pow(meters, 2);
    parseInt(BMI)
    console.log(parseInt(BMI))
    return(parseInt(BMI));
};

// display user name in results.html

document.getElementById("input-name").innerHTML = allFormData["input-name"];
document.getElementById("input-name2").innerHTML = allFormData["input-name"];

// display current weight for the user 

if (isImperial(currentWeightStone, currentWeightPounds) === false) {
    document.getElementById("display-current-weight").innerHTML = `${allFormData["current-weight-kg"]} kg`;
    document.getElementById("display-current-weight2").innerHTML = `${allFormData["current-weight-kg"]} kg`;

} else if ((isImperial(currentWeightStone, currentWeightPounds) === true) && (currentWeightStone === "")) {
    document.getElementById("display-current-weight").innerHTML = `${allFormData["current-weight-pounds"]} lbs`;
    document.getElementById("display-current-weight2").innerHTML = `${allFormData["current-weight-pounds"]} lbs`;

} else if ((isImperial(currentWeightStone, currentWeightPounds) === true) && (currentWeightPounds === "")) {
    document.getElementById("display-current-weight").innerHTML = `${allFormData["current-weight-stone"]} st`;
    document.getElementById("display-current-weight2").innerHTML = `${allFormData["current-weight-stone"]} st`;  

} else {
    document.getElementById("display-current-weight").innerHTML = `${allFormData["current-weight-stone"]} st ${allFormData["current-weight-pounds"]} lbs`;
    document.getElementById("display-current-weight2").innerHTML = `${allFormData["current-weight-stone"]} st ${allFormData["current-weight-pounds"]} lbs`;
};

// display BMI for the user
document.getElementById("current-BMI").innerHTML = calculateBMI(variableCurrentWeightIntoKg, variableHeightIntoMeters);
