//declare variables for each input field

//var contactName = document.getElementById("contact-name")
var email = document.getElementById("email")
var telephone = document.getElementById("telephone")
var enquiry = document.getElementById("enquiry")

//event listener for "submit"

document.getElementsByTagName("FORM")[0].addEventListener("submit", handleContactSubmit);

//variables creating tests for test function

const inputRequired = "";

const regexLetters = /^[a-z][A-Z].,'\.-\ ]*$/;

const maxLenght = 160;

/**
 * Universal function to highlight errors in a form, once the field failed validation on submit
 * and it doesn't work!!!
 */
 //function highlightErrors() {
//    console.log("I will add or remove classess")
//    this.classList.add("bg-danger")
//}

//functions to display result of the validation of each particular field, returns true or highlights the input field red
function validateResultContactName() {
    
    if(document.getElementById("contact-name").value !== inputRequired) {
        let contactName = document.getElementById("contact-name");
        console.log(`display ${contactName.value}`)
        
        return(true)

    } else {
        console.log("failed individual validation")
        document.getElementById("contact-name").classList.add("bg-danger")
        
        return(false);
        
    };
    
};


function highlightErrors() {
    console.log("I will add or remove classess")
   this.classList.add("bg-danger")
}

//function to check if each validation result, for each input field is true

function allValidationResults() {
    if (validateResultContactName() == true) {
        console.log("passed all validation results")
        return(true)
        
    } else {
        console.log("failed all validation results")
        return(false)
        
    }
}

//Main function to handle submit event
function handleContactSubmit(event) {
    event.preventDefault();
    if (allValidationResults() == false) {
        console.log("display whole form with highlited fields in red")

    } else {
        console.log("all good to go")
        document.getElementsByTagName("FORM")[0].submit()
    }

}

