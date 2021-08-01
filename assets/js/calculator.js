


//guidance to handle submit and validation javascripttutorial.net/javascript-dom/javascript-form-validation/
//I followed logic created in contact.js and adjusted them to the needs of calculator form


//declare variables for each input field and the contact Form itself
const calulatorForm = document.getElementsByTagName("FORM")[0];

const inputName = document.getElementById("name");
const selectGender = document.getElementById("select-gender");
const inputAge = document.getElementById("input-age");
const targetDate = document.getElementById("target-date");
const currentWeightStone = document.getElementById("current-wieght-stone");
const currentWeightPounds = document.getElementById("current-weight-pounds");
const targetWeightStone = document.getElementById("target-weight-stone");
const targetWeightPounds = document.getElementById("target-weight-pounds");
const heightFeet = document.getElementById("height-feet");
const heightInches = document.getElementById("height-inches");
const waistInches = document.getElementById("waist-inches");
const currentWeightKg = document.getElementById("current-weight-kg");
const targetWeightKg = document.getElementById("target-weight-kg");
const heightCm = document.getElementById("height-cm");
const waistCm = document.getElementById("waist-cm");
const excerciseHours = document.getElementById("excercise-hours");
const diet = document.getElementById("input-diet");

//declare variables for each help field that will hold the error message
const helpName = document.getElementById("name-help");
const helpGender = document.getElementById("gender-help");
const helpAge = document.getElementById("age-help");
const helpTargetDate = document.getElementById("date-help");
const helpCurrentWeightStone = document.getElementById("current-wieght-stone-help");
const helpCurrentWeightPounds = document.getElementById("current-weight-pounds-help");
const helpTargetWeightStone = document.getElementById("target-weight-stone-help");
const helpTargetWeightPounds = document.getElementById("target-weight-pounds-help");
const helpHeightFeet = document.getElementById("height-feet-help");
const helpHeightInches = document.getElementById("height-inches-help");
const helpWaistInches = document.getElementById("waist-inches-help");
const helpCurrentWeightKg = document.getElementById("current-weight-kg-help");
const helpTargetWeightKg = document.getElementById("target-weight-kg-help");
const helpHeightCm = document.getElementById("height-cm-help");
const helpWaistCm = document.getElementById("waist-cm-help");
const helpExcerciseHours = document.getElementById("excercise-hours-help");
const helpDiet = document.getElementById("input-diet-help");


// Radio button variables
const radioTargetWeight = document.getElementById("radio-target-weight");
const radioTargetDate = document.getElementById("radio-target-date");

const radioImperial = document.getElementById("imperial");
const radioMetric = document.getElementById("metric");



//Regex 

//Regex testing if the input field contains letters and a few chosen characters 

const regexLetters = /[a-zA-Z \,'\.\-\']/g;

//functions testing if particular field is in line with Regex

/**
 *  Function testing if name input field contains letters and chosen special characters
 * 
 */

function containsLetters(inputName) {
  let valueLetters = inputName.value
  console.log(valueLetters)
  return regexLetters.test(valueLetters);
};

/**

/**
 * function testing if the target date has been set for a day in the past or for today
 * https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1
 * 
 * 
 * @returns 
 */

 var todayDate = new Date().toISOString().slice(0, 10);
 var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
 var todayString = todayDate.replace(/-/g, '');
 var targetString = targetDate.value.replace(/-/g, '');
function beforeToday () {
  
  console.log (targetDate.value.replace(/-/g, '') - todayString);
  console.log(todayString);
  console.log(targetString);
  if (targetDate.value <= todayDate) {

    return false

  } else {
    return true
  };
};
// gives incorrect results when the dates are end of year and beggining of year
//function monthAhead () {
//  if ((targetDate.value.replace(/-/g, '') - todayString) < 100) {
//  return false
//} else {
// return true
//}
//}
/**
 * Function testing if date input is month ahead the curent date
 * https://stackoverflow.com/questions/11344324/validate-if-date-is-before-date-of-current-date
 * ??? NOT WORKING
 * @returns 
 */

 //function monthDifference() {
 // pickedDate = targetDate.value;
 // console.log(pickedDate)
 // todaysDate = new Date();
 // todaysDate.setHours(0, 0, 0, 0);
 // dateDifference = Math.abs(Number(todaysDate) - pickedDate);
  //30 Days=2592000000ms
 // if (dateDifference < 2592000000) {
 //   console.log("date is less than month difference from current date")  
 //   return false;
      
 // } else {
 //     console.log("date is more than a month difference from current date")
 //     return true;
 // }
//}

// doesn't work as not able to convert html input to time without being given time

//function monthDifference () {
//  var todayInMs = new Date();
//  todayInMs = todayInMs.getTime()
//  console.log(todayInMs)
//  console.log(targetDate.value)
//  var targetInMs = targetDate.value
//  targetInMs = targetInMs.getTime()
//  console.log(targetInMs)
//}

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

/**
 * Function to set attribute
 * @param {*} className 
 * @param {*} targetNode 
 */

function setAtribute(atributeName, atributeValue, targetNode) {
  targetNode.setAttribute(atributeName, atributeValue);
};
/**
 * Function to remove attribute
 * @param {*} atributeName 
 * @param {*} atributeValue 
 * @param {*} targetNode 
 */
function removeAtribute(atributeName, atributeValue, targetNode) {
  targetNode.removeAttribute(atributeName, atributeValue);
};

/**
 * Function to display Error after validation has been failed
 * makes div with help message visible and in red, input's border is red and red icon with exclamation mark is displayed in input field
 * @param {*} targetNodeInput 
 * @param {*} targetNodeHelp 
 */

function displayErrorValidation(targetNodeInput, targetNodeHelp) {

  addClass("is-invalid",targetNodeInput);
  setAtribute("aria-describedby", "name-help", targetNodeInput);
  removeClass("my-invisible", targetNodeHelp);
  addClass("invalid-feedback", targetNodeHelp);

};

/**
 * Function to remove display Error after validation has been passed
 * makes div with help message invisible, input border comes back to standard and icon with exclamation mark disapears
 * @param {*} targetNodeInput 
 * @param {*} targetNodeHelp 
 */

function removeErrorValidation(targetNodeInput, targetNodeHelp) {

  removeClass("is-invalid",targetNodeInput);
  removeAtribute("aria-describedby", "name-help", targetNodeInput);
  addClass("my-invisible", targetNodeHelp);
  removeClass("invalid-feedback", targetNodeHelp);
};


/**
 * Function to swap the visibility of the divs when radio button is changed
 * makes one div visible and another invisible
 * @param {*} visibleDiv 
 * @param {*} invisibleDiv 
 */

function radioButtonSwap(visibleDiv, invisibleDiv) {
  removeClass("my-invisible", visibleDiv);
  addClass("my-invisible", invisibleDiv);
}

/**
 * Radio Buttons event listener and functions to make divs disapear, to display requested content in the form
 * code from code pen, explained by Sean Young on Webinar 22/07/2021
 * https://codepen.io/seanyoung247/pen/qBmbZQK
 */

document.getElementsByTagName("FORM")[0].addEventListener("change", function(event){
  let divTargetDate = document.getElementById("div-target-date");
  let divTargetMetric = document.getElementById("div-target-metric");
  let divTargetImperial = document.getElementById("div-target-imperial");
  let divAllMetric = document.getElementById("div-all-metric");
  let divAllImperial = document.getElementById("div-all-imperial");

    if(event.target.matches("#radio-target-date")) {
    radioButtonSwap(divTargetDate, divTargetMetric);
    addClass("my-invisible", divTargetImperial);

  } else if (event.target.matches("#radio-target-weight")){
    radioButtonSwap(divTargetMetric, divTargetDate);
    removeClass("my-invisible", divTargetImperial)
    
  } else if (event.target.matches("#imperial")){
    radioButtonSwap(divAllImperial, divAllMetric)
  
  } else if (event.target.matches("#metric")){
    radioButtonSwap(divAllMetric, divAllImperial)
  }
});

  
//functions to display result of the validation of each particular field, returns true or highlights the input field red

/**
 * Function to show the result of valiation on name input field
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

function validateResultName() {
  
  if(inputName.value === "") {
    helpName.innerHTML = "This field is required";
    displayErrorValidation(inputName, helpName)    
    return(false);

  } else if (inputName.value.length > 50) {
    helpName.innerHTML = "Name too long";
    displayErrorValidation(inputName, helpName)
    return(false);

  } else if (!containsLetters(inputName)) {
  
    helpName.innerHTML = 'The name can contain letters and some special characters such as "-", "`" "." ';
    displayErrorValidation(inputName, helpName)
    return(false);

  } else {
    
    console.log(`name - I have passed through validation and my value is: ${inputName.value} and my length ${inputName.value.length}`)
    removeErrorValidation(inputName, helpName)
    return(true)

  };
  
};


/**
 * Function to show the result of valiation on gender select field
 * Returns true or false, if false - changes the look of the select field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultGender() {
  
  if(selectGender.value === "Please choose from one of the options") {

    helpGender.innerHTML = "This field is required"
    displayErrorValidation(selectGender, helpGender);
    return(false);

  } else {
  
    console.log(`Gender - I have passed through validation and my value is: ${selectGender.value} and my length ${selectGender.value.length}`)
    removeErrorValidation(selectGender, helpGender);
    return(true)

  };
  
};

/**
 * Function to show the result of valiation on Age
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultAge() {
  
  if (inputAge.value == 0) {

    helpAge.innerHTML = "This field is required"
    displayErrorValidation(inputAge, helpAge);
    return(false);

  } else if (inputAge.value === "") {

      helpAge.innerHTML = "This field is required"
      displayErrorValidation(inputAge, helpAge);
      return(false);

  } else if (inputAge.value < 19 && inputAge.value > 0) {

    helpAge.innerHTML = "Our calculator is only able to give results for adults";
    displayErrorValidation(inputAge, helpAge);
    return(false);

  } else if (inputAge.value > 120) {

    helpAge.innerHTML = "Please enter your age correctly";
    displayErrorValidation(inputAge, helpAge);
    return(false);

  } else if (inputAge.value < 0) {

    helpAge.innerHTML = "We do not accept minus values for age";
    displayErrorValidation(inputAge, helpAge);
    return(false);

  } else {
    
    console.log(`Age - I have passed through validation and my value is: ${inputAge.value} and my length ${inputAge.value.length}`)
    removeErrorValidation(inputAge, helpAge);
    return(true)

  };
  
};


/**
 * Function to show the result of valiation on target date input field
 * checks first if the radio button has been set to target date, than
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed validation
 * 
 */

 function validateResultTargetDate() {

  if (radioTargetDate.checked) {

    if (targetDate.value === "") {

      helpTargetDate.innerHTML = "This field is required"
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);

    } else if (targetDate.value.length > 10) {
      helpTargetDate.innerHTML = "Date contains too many digits, please check the date"
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);
    
    //  let dateString = targetDate.value.toString();
    //  console.log(dateString);
    } else if (!beforeToday()) {
      console.log("failed validation on beforeToday")
      return (false);

    
    } else if (!monthDifference()) {
    
      helpTargetDate.innerHTML = "We can only calculate the results for dates further than month ahead";
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);

    } else {
      
      console.log(`target Date - I have passed through validation and my value is: ${targetDate.value} and my length ${targetDate.value.length}`)
      removeErrorValidation(targetDate, helpTargetDate);
      return(true);

    };
  } else {
    console.log(`target Date - the radio button for date is off, `)
    removeErrorValidation(targetDate, helpTargetDate);
    return(true);
  };
};


/**
 * Function to check if each validation result, for each input field is false
*/

function allValidationResults() {
  if (validateResultName() == false) {
      console.log("name failed all validation results");
      return(false);
  
  } else if (validateResultGender() == false) {
      console.log("gender failed all validation results");
      return(false);

  } else if (validateResultAge() == false) {
      console.log("age failed all validation results");
      return(false);
      
 } else if (validateResultTargetDate() == false) {
      console.log("target date failed all validation results");
      return(false);
      
  } else {
      console.log("all fields passed all validation results");
      return(true);
      
  };
};

//event listener for "submit"

calulatorForm.addEventListener("submit", handleCalculatorSubmit);

/**
 * Main function to handle submit event
 */

 function handleCalculatorSubmit(event) {
  event.preventDefault();
  if (allValidationResults() == false) {
      console.log("stay on the page calculator form");

  } else {
      console.log("all good to go");
      calulatorForm.submit();
  };

};


// debounce and instant feedback on input copied from the below link
//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/

/**
 * Function to delay response
 * @param {*} fn 
 * @param {*} delay 500
 * @returns 
 */

 const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args)
      }, delay);
  };
};

/**
* Gives instant feedback on input with the delay set above
*/

calulatorForm.addEventListener ('input', debounce(function (e) {
  switch (e.target.id) {
      case 'name':
        validateResultName();
          break;
      case 'select-gender':
        validateResultGender();
          break;
      case 'input-age':
        validateResultAge();
          break;
      case 'target-date':
        validateResultTargetDate();
          break;
  }
}));