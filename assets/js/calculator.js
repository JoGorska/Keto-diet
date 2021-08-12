

//guidance to handle submit and validation javascripttutorial.net/javascript-dom/javascript-form-validation/
//I followed logic created in contact.js and adjusted them to the needs of calculator form


//declare variables for each input field and the contact Form itself
const calulatorForm = document.getElementsByTagName("FORM")[0];

const inputName = document.getElementById("input-name");
const selectGender = document.getElementById("input-gender");
const inputAge = document.getElementById("input-age");
const targetDate = document.getElementById("target-date");
const currentWeightStone = document.getElementById("current-weight-stone");
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
const helpCurrentWeightStone = document.getElementById("current-weight-stone-help");
const helpCurrentWeightPounds = document.getElementById("current-weight-pounds-help");
const helpTargetWeightStone = document.getElementById("target-weight-stone-help");
const helpTargetWeightPounds = document.getElementById("target-weight-pounds-help");
const helpHeightFeet = document.getElementById("height-feet-help");
const helpHeightInches = document.getElementById("height-inches-help");
const helpCurrentWeightKg = document.getElementById("current-weight-kg-help");
const helpTargetWeightKg = document.getElementById("target-weight-kg-help");
const helpHeightCm = document.getElementById("height-cm-help");
const helpExcerciseHours = document.getElementById("excercise-hours-help");
const helpDiet = document.getElementById("input-diet-help");

// Radio button variables
const radioTargetWeight = document.getElementById("radio-target-weight");
const radioTargetDate = document.getElementById("radio-target-date");

const radioImperial = document.getElementById("imperial");
const radioMetric = document.getElementById("metric");



//Regex testing if the input field contains letters and a few chosen characters 

const regexLetters = /[a-zA-Z \,'\.\-\']/g;

/**
 *  Function testing if name input field contains letters and chosen special characters
 *  function testing if particular field is in line with Regex
 */

function containsLetters(inputName) {
  let valueLetters = inputName.value;
  return regexLetters.test(valueLetters);
}

/**

/**
 * function testing if the target date has been set for a day in the past or for today
 * https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?rq=1
 * 
 */

 var todayDate = new Date().toISOString().slice(0, 10);

function beforeToday () {
  
  if (targetDate.value <= todayDate) {

    return false;

  } else {
    return true;
  }
}

/**
 * Function to test if the target date is further than a month ahead
 * both dates: today and target date are converted to miliseconds from Unix timestamp is the time elapsed since the 1, Jan 1970 00:00:00 UTC,
 * @returns true or false
 */


function monthLater () {
  let todayInMs = new Date().getTime();
  let targetInMs = targetDate.valueAsNumber;
  let monthInMs = 2629800000;
  
  if ((targetInMs-todayInMs) < monthInMs) {
    return false;
  } else {
    return true;

  }
}
/**
 * function to check if the target year is less than a year from Today
 * @returns 
 */

function lessThanAYear () {
  let todayInMs = new Date().getTime();
  let targetInMs = targetDate.valueAsNumber;
  let monthInMs = 2629800000;

  if ((targetInMs-todayInMs > (12 * monthInMs))) {
    return false;

  } else {
    return true;
  }
}

//Function to calculate total Imperial weght in pounds

function totalImperialWeight (stone, pounds) {
  return ((stone * 14) + pounds);
  
}



// functions to add or remove classes copied from Felipe Souza Alarcon_mentor, and explained on mentoring meeting 31.07.2021

/**
 * Function to add class
 * @param {*} className 
 * @param {*} targetNode 
 */
function addClass(className, targetNode) {
  targetNode.classList.add(className);
}

/**
 * Function to remove class
 * @param {*} className 
 * @param {*} targetNode 
 */

function removeClass(className, targetNode){
  targetNode.classList.remove(className);
}

/**
 * Function to set attribute
 * @param {*} className 
 * @param {*} targetNode 
 */

function setAtribute(atributeName, atributeValue, targetNode) {
  targetNode.setAttribute(atributeName, atributeValue);
}
/**
 * Function to remove attribute
 * @param {*} atributeName 
 * @param {*} atributeValue 
 * @param {*} targetNode 
 */
function removeAtribute(atributeName, atributeValue, targetNode) {
  targetNode.removeAttribute(atributeName, atributeValue);
}

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

}

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
}


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
 * Function to clear the content of the input field when Radio button is used
 * Need to clear the input on the target weight if target date option is chosen
 * Need to clear the input on the target date if the input weight is choosen
 * and similary on imperial and metric measures
 */
function clearFormRadio (inputNode) {
  inputNode.value = "";
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
    clearFormRadio(targetWeightPounds);
    clearFormRadio(targetWeightStone);
    clearFormRadio(targetWeightKg);

  } else if (event.target.matches("#radio-target-weight")){
    radioButtonSwap(divTargetMetric, divTargetDate);
    removeClass("my-invisible", divTargetImperial);
    clearFormRadio(targetDate);
    
  } else if (event.target.matches("#imperial")){
    radioButtonSwap(divAllImperial, divAllMetric);
    clearFormRadio(targetWeightKg);
    clearFormRadio(currentWeightKg);
    clearFormRadio(heightCm);
    clearFormRadio(waistCm);
  
  } else if (event.target.matches("#metric")){
    radioButtonSwap(divAllMetric, divAllImperial);
    clearFormRadio(targetWeightStone);
    clearFormRadio(targetWeightPounds);
    clearFormRadio(currentWeightStone);
    clearFormRadio(currentWeightPounds);
    clearFormRadio(heightFeet);
    clearFormRadio(heightInches);
    clearFormRadio(waistInches);
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
    displayErrorValidation(inputName, helpName);
    return(false);

  } else if (inputName.value.length > 50) {
    helpName.innerHTML = "Name too long";
    displayErrorValidation(inputName, helpName);
    return(false);

  } else if (!containsLetters(inputName)) {
  
    helpName.innerHTML = 'The name can contain letters and some special characters such as "-", "`" "." ';
    displayErrorValidation(inputName, helpName);
    return(false);

  } else {
    
    removeErrorValidation(inputName, helpName);
    return(true);

  }
  
}


/**
 * Function to show the result of valiation on gender select field
 * Returns true or false, if false - changes the look of the select field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultGender() {
  
  if(selectGender.value === "Please choose from one of the options") {

    helpGender.innerHTML = "This field is required";
    displayErrorValidation(selectGender, helpGender);
    return(false);

  } else {
  
 
    removeErrorValidation(selectGender, helpGender);
    return(true);

  }
  
}

/**
 * Function to show the result of valiation on Age
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultAge() {
  
  if (inputAge.value == 0) {

    helpAge.innerHTML = "This field is required";
    displayErrorValidation(inputAge, helpAge);
    return(false);

  } else if (inputAge.value === "") {

      helpAge.innerHTML = "This field is required";
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
    

    removeErrorValidation(inputAge, helpAge);
    return(true);

  }
  
}

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

      helpTargetDate.innerHTML = "This field is required";
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);

    } else if (targetDate.value.length > 10) {
      helpTargetDate.innerHTML = "Date contains too many digits, please check the date";
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);
    
    } else if (!beforeToday()) {

      return (false);
    
    } else if (!monthLater()) {
    
      helpTargetDate.innerHTML = "We can only calculate the results for dates further than month ahead";
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);

    } else if (!lessThanAYear()) {
    
      helpTargetDate.innerHTML = "Please set your target within 12 months from today, it is good to plan short term goals and revise once they are acheved";
      displayErrorValidation(targetDate, helpTargetDate);
      return(false);

    } else {
      

      removeErrorValidation(targetDate, helpTargetDate);
      return(true);

    }

  } else {

    removeErrorValidation(targetDate, helpTargetDate);
    return(true);
  }
}


function validateResultCurrentWeightImperial() {

  if (radioImperial.checked) {

    if ((currentWeightStone.value === "") && (currentWeightPounds.value === "")) {

      helpCurrentWeightStone.innerHTML = "Fill in at least one of those fields";
      helpCurrentWeightPounds.innerHTML = "Fill in at least one of those fields";
      displayErrorValidation(currentWeightStone, helpCurrentWeightStone);
      displayErrorValidation(currentWeightPounds, helpCurrentWeightPounds);
      return(false);

    } else if ((totalImperialWeight(parseInt(currentWeightStone.value), parseInt(currentWeightPounds.value)) <= (totalImperialWeight(parseInt(targetWeightStone.value)), parseInt(targetWeightPounds.value)))) {

        helpCurrentWeightStone.innerHTML = "Your total target weight must be smaller than total current weight (Stone + lbs)";
        helpCurrentWeightPounds.innerHTML = "Your total target weight must be smaller than total current weight (Stone + lbs)";
        displayErrorValidation(targetWeightStone, helpTargetWeightStone);
        displayErrorValidation(targetWeightPounds, helpTargetWeightPounds);
        return(false);
 
    } else {
      

      removeErrorValidation(currentWeightStone, helpCurrentWeightStone);
      removeErrorValidation(currentWeightPounds, helpCurrentWeightPounds);
      return(true);

    }

  } else {

    removeErrorValidation(currentWeightStone, helpCurrentWeightStone);
    removeErrorValidation(currentWeightPounds, helpCurrentWeightPounds);
    return(true);
  }
}

/**
 * Validate User input on Target Weight Stone and target Weight Pounds
 * 
 */

 function validateResultTargetWeightImperial() {

  if (radioTargetWeight.checked && radioImperial.checked) {

    if ((targetWeightStone.value === "") && (targetWeightPounds.value === "")) {

      helpTargetWeightStone.innerHTML = "Fill in at least one of those fields";
      helpTargetWeightPounds.innerHTML = "Fill in at least one of those fields";
      displayErrorValidation(targetWeightStone, helpTargetWeightStone);
      displayErrorValidation(targetWeightPounds, helpTargetWeightPounds);
      return(false);

    } else if ((totalImperialWeight(parseInt(currentWeightStone.value), parseInt(currentWeightPounds.value))) <= (totalImperialWeight(parseInt(targetWeightStone.value), parseInt(targetWeightPounds.value)))) {

        helpTargetWeightStone.innerHTML = "Your total target weight must be smaller than total current weight (Stone + lbs)";
        helpTargetWeightPounds.innerHTML = "Your total target weight must be smaller than total current weight (Stone + lbs)";
        displayErrorValidation(targetWeightStone, helpTargetWeightStone);
        displayErrorValidation(targetWeightPounds, helpTargetWeightPounds);
        return(false);
 
    } else {
      
      removeErrorValidation(targetWeightStone, helpTargetWeightStone);
      removeErrorValidation(targetWeightPounds, helpTargetWeightPounds);
      return(true);
      

    }

  } else {

    removeErrorValidation(targetWeightStone, helpTargetWeightStone);
    removeErrorValidation(targetWeightPounds, helpTargetWeightPounds);
    return(true);
  }
}



function validateResultHeightImperial() {

  if (radioImperial.checked) {

    if ((heightFeet.value === "") && (heightInches.value === "")) {

      helpHeightFeet.innerHTML = "Fill in at least one of those fields";
      helpHeightInches.innerHTML = "Fill in at least one of those fields";
      displayErrorValidation(heightFeet, helpHeightFeet);
      displayErrorValidation(heightInches, helpHeightInches);
      return(false);

    } else {
      removeErrorValidation(heightFeet, helpHeightFeet);
      removeErrorValidation(heightInches, helpHeightInches);
      return(true);

    }

  } else {
    removeErrorValidation(heightFeet, helpHeightFeet);
    removeErrorValidation(heightInches, helpHeightInches);
    return(true);
  }
}


/**
 * Validate user input on Current Weight Kg
 * 
 * 
 */
 function validateResultCurrentWeightKg() {

  if (radioMetric.checked) {

    if (currentWeightKg.value === "") {

      helpCurrentWeightKg.innerHTML = "This field is required";
      displayErrorValidation(currentWeightKg, helpCurrentWeightKg);
      return(false);

    } else if (parseInt(targetWeightKg.value) >= parseInt(currentWeightKg.value)) {
      
      console.log(`my target weight ${targetWeightKg.value} and the current weight ${currentWeightKg.value}`);
        helpCurrentWeightKg.innerHTML = "Please set correct Target Weight, that is lower than your Current Weight";
        displayErrorValidation(currentWeightKg, helpCurrentWeightKg);
        return(false);
 
    } else {
      
      console.log(`Current Weight Kg - I have passed through validation and my value is: ${currentWeightKg.value}`);
      removeErrorValidation(currentWeightKg, helpCurrentWeightKg);
      return(true);

    }

  } else {
    console.log(`Current Weight Kg  - the radio button for Target weight and Imperial is off, `);
    removeErrorValidation(currentWeightKg, helpCurrentWeightKg);
    return(true);
  }
}


/**
 * Validate user input on Target Weight Kg
 * 
 * 
 */
function validateResultTargetWeightKg() {

  if (radioTargetWeight.checked && radioMetric.checked) {

    if (targetWeightKg.value === "") {

      helpTargetWeightKg.innerHTML = "This field is required";
      displayErrorValidation(targetWeightKg, helpTargetWeightKg);
      return(false);

    } else if (parseInt(targetWeightKg.value) >= parseInt(currentWeightKg.value)) {

        helpTargetWeightKg.innerHTML = "Please set correct Target Weight, that is lower than your Current Weight";
        displayErrorValidation(targetWeightKg, helpTargetWeightKg);
        return(false);
 
    } else {
      
      console.log(`Target Weight Kg - I have passed through validation and my value is: ${targetWeightKg.value}`);
      removeErrorValidation(targetWeightKg, helpTargetWeightKg);
      return(true);

    }

  } else {
    console.log(`target Weight Kg  - the radio button for Target weight and Imperial is off, `);
    removeErrorValidation(targetWeightKg, helpTargetWeightKg);
    return(true);
  }
}


function validateResultHeightMetric() {

  if (radioMetric.checked) {

    falseIfEmpty(heightCm, helpHeightCm);

  } else {
    console.log(`Height Feet and Inches - I have passed through validation and my value is: ${heightFeet.value}`);
    removeErrorValidation(heightFeet, helpHeightFeet);
    removeErrorValidation(heightInches, helpHeightInches);
    return(true);
  }
}

/**
 * universal function to test the input fields if they were left empty. This function is used for fields that do not require complex validation.
 * @param {*} testedNode 
 * @param {*} helpNode 
 * @returns 
 */

 function falseIfEmpty (testedNode, helpNode) {
  if (testedNode.value === "") {

    helpNode.innerHTML = "This field is required";
    displayErrorValidation(testedNode, helpNode);
    return false;

  } else {

    removeErrorValidation(testedNode, helpNode);
    return true;
  }
}

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

  } else if (validateResultCurrentWeightImperial() == false) {
    console.log("Current weight Imperial failed all validation results");
    return(false); 

  } else if (validateResultTargetWeightImperial() == false) {
    console.log("target weight Imperial failed all validation results");
    return(false); 

  } else if (validateResultHeightImperial() == false) {
    console.log("Height imperial failed all validation results");
    return(false);   

  } else if (validateResultCurrentWeightKg()  == false) {
    console.log("current weight Kg failed all validation results");
    return(false);

  } else if (validateResultTargetWeightKg()  == false) {
      console.log("target weight Kg failed all validation results");
      return(false);

  } else if (validateResultHeightMetric() == false) {
    console.log("height cm failed all validation results");
    return(false);

  } else if (falseIfEmpty(excerciseHours, helpExcerciseHours)  == false) {
    console.log("excercise hours failed all validation results");
    return(false);
   
  } else if (falseIfEmpty(diet, helpDiet)  == false) {
    console.log("diet failed all validation results");
    return(false);
      
  } else {
    console.log("all fields passed all validation results");
    return(true);
    
  }
}

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
  }

}


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
          fn.apply(null, args);
      }, delay);
  };
};

/**
* Gives instant feedback on input with the delay set above
*/

calulatorForm.addEventListener ('input', debounce(function (e) {
  switch (e.target.id) {
      case 'input-name':
        validateResultName();
          break;
      case 'gender':
        validateResultGender();
          break;
      case 'input-age':
        validateResultAge();
          break;
      case 'target-date':
        validateResultTargetDate();
          break;
      case 'current-weight-stone':
        validateResultCurrentWeightImperial();
          break;
      case 'current-weight-pounds':
        validateResultCurrentWeightImperial();
          break;
          
      case 'target-weight-stone':
        validateResultTargetWeightImperial();
          break;
      case 'target-weight-pounds':
        validateResultTargetWeightImperial();
          break;
      case 'height-feet':
        validateResultHeightImperial();
          break;

      case 'height-inches':
        validateResultHeightImperial();
          break;

      case 'current-weight-kg':
        validateResultCurrentWeightKg();
          break;
      case 'target-weight-kg':
        validateResultTargetWeightKg();
          break;
      case 'height-cm':
        validateResultHeightMetric();
          break;
      case 'excercise-hours':
        falseIfEmpty(excerciseHours, helpExcerciseHours);
          break;
      case 'input-diet':
        falseIfEmpty(diet, helpDiet);
          break;

}
}));
