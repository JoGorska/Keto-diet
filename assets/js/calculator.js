
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
    console.log("radio button unknown")
  }
});

//guidance to handle submit and validation javascripttutorial.net/javascript-dom/javascript-form-validation/
//I followed logic created in contact.js and adjusted them to the needs of calculator form


//declare variables for each input field and the contact Form itself
const calulatorForm = document.getElementsByTagName("FORM")[0];

const name = document.getElementById("name");
const selectGender = document.getElementById("select-gender");
const age = document.getElementById("input-age");
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
