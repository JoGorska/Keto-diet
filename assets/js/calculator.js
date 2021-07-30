
//Radio Buttons event listener and functions to make divs disapear, to display requested content in the form
// code from code pen, explained by Sean Young on Webinar 22/07/2021
//https://codepen.io/seanyoung247/pen/qBmbZQK

document.getElementsByTagName("FORM")[0].addEventListener("change", function(event){
  if(event.target.matches("#radio-target-date")) {
    //make visible
    document.getElementById("div-target-date").classList.remove("my-invisible")
    //make invisible
    document.getElementById("div-target-metric").classList.add("my-invisible")
    document.getElementById("div-target-imperial").classList.add("my-invisible")
       
  } else if (event.target.matches("#radio-target-weight")){
    //make invisible
    document.getElementById("div-target-date").classList.add("my-invisible")
    //make visible
    document.getElementById("div-target-metric").classList.remove("my-invisible")
    document.getElementById("div-target-imperial").classList.remove("my-invisible")
    
  } else if (event.target.matches("#imperial")){
    //make invisible
    document.getElementById("div-all-metric").classList.add("my-invisible")
    //make visible
    document.getElementById("div-all-imperial").classList.remove("my-invisible")
  
  } else if (event.target.matches("#metric")){
    //make visible
    document.getElementById("div-all-metric").classList.remove("my-invisible")
    //make invisible
    document.getElementById("div-all-imperial").classList.add("my-invisible")

  } else {
    console.log("event 'change' on unknown field")
  }
});

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

// Regex testing if the date input field is correct copied from 
// https://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy-with-leap-year-support

const regexDate = 
/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

//functions testing if particular field is in line with Regex

/**
 *  Function testing if name input field contains letters and chosen special characters
 * 
 */

function containsLetters(inputName) {
  let value = inputName.value
  console.log(value)
  return regexLetters.test(value);
};

/**
 *  Function testing if date input field matches the regex
 * 
 */

 function corectDate(targetDate) {
  let value = targetDate.value
  console.log(value)
  return regexLetters.test(value);
};

//functions to display result of the validation of each particular field, returns true or highlights the input field red

/**
 * Function to show the result of valiation on name input field
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

function validateResultName() {
  
  if(inputName.value === "") {

    helpName.innerHTML = "This field is required"
    
    inputName.classList.add("is-invalid");
    inputName.setAttribute("aria-describedby", "name-help");
    helpName.classList.remove("my-invisible");
    return(false);

  }else if (inputName.value.length > 50) {

    helpName.innerHTML = "Name too long";

    inputName.classList.add("is-invalid");
    inputName.setAttribute("aria-describedby", "name-help");
    helpName.classList.remove("my-invisible");
    return(false);

  } else if (!containsLetters(inputName)) {
  
    inputName.innerHTML = 'The name can contain letters and some special characters such as "-", "`" "." ';

    inputName.classList.add("is-invalid");
    inputName.setAttribute("aria-describedby", "name-help");
    helpName.classList.remove("my-invisible");
    return(false);

  } else {
    
      console.log(`name - I have passed through validation and my value is: ${inputName.value} and my length ${inputName.value.length}`)
      inputName.classList.remove("is-invalid");
      inputName.removeAttribute("aria-describedby", "email-help");
      helpName.classList.add("my-invisible");

      return(true)

  };
  
};


/**
 * Function to show the result of valiation on gender select field
 * Returns true or false, if false - changes the look of the select field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultGender() {
  
  if(selectGender.value === "") {

    helpGender.innerHTML = "This field is required"
    
    selectGender.classList.add("is-invalid");
    selectGender.setAttribute("aria-describedby", "name-help");
    helpGender.classList.remove("my-invisible");
    return(false);

    } else {
    
      console.log(`Gender - I have passed through validation and my value is: ${selectGender.value} and my length ${selectGender.value.length}`)
      selectGender.classList.remove("is-invalid");
      selectGender.removeAttribute("aria-describedby", "email-help");
      helpGender.classList.add("my-invisible");

      return(true)

  };
  
};



/**
 * Function to show the result of valiation on Age
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultAge() {
  
  if(inputAge.value === "") {

    helpAge.innerHTML = "This field is required"
    
    inputAge.classList.add("is-invalid");
    inputAge.setAttribute("aria-describedby", "name-help");
    helpAge.classList.remove("my-invisible");
    return(false);

  }else if (inputAge.value < 19) {

    helpAge.innerHTML = "Our calculator is only able to give results for adults";

    inputAge.classList.add("is-invalid");
    inputAge.setAttribute("aria-describedby", "name-help");
    helpAge.classList.remove("my-invisible");
    return(false);

  }else if (inputAge.value > 120) {

    helpAge.innerHTML = "Please enter your age correctly";

    inputAge.classList.add("is-invalid");
    inputAge.setAttribute("aria-describedby", "name-help");
    helpAge.classList.remove("my-invisible");
    return(false);

  } else {
    
      console.log(`Age - I have passed through validation and my value is: ${inputAge.value} and my length ${inputAge.value.length}`)
      inputAge.classList.remove("is-invalid");
      inputAge.removeAttribute("aria-describedby", "email-help");
      helpAge.classList.add("my-invisible");

      return(true)

  };
  
};


/**
 * Function to show the result of valiation on name input field
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

 function validateResultTargetDate() {
  
  if(targetDate.value === "") {

    helpTargetDate.innerHTML = "This field is required"
    
    targetDate.classList.add("is-invalid");
    targetDate.setAttribute("aria-describedby", "name-help");
    helpTargetDate.classList.remove("my-invisible");
    return(false);


  } else if (!correctDate(targetDate)) {
  
    targetDate.innerHTML = 'The name can contain letters and some special characters such as "-", "`" "." ';

    targetDate.classList.add("is-invalid");
    targetDate.setAttribute("aria-describedby", "name-help");
    helpTargetDate.classList.remove("my-invisible");
    return(false);

  } else {
    
      console.log(`target Date - I have passed through validation and my value is: ${targetDate.value} and my length ${targetDate.value.length}`)
      targetDate.classList.remove("is-invalid");
      targetDate.removeAttribute("aria-describedby", "email-help");
      helpTargetDate.classList.add("my-invisible");

      return(true)

  };
  
};
