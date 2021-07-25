//declare variables for each input field

var contactName = document.getElementById("contact-name")
var email = document.getElementById("email")
var telephone = document.getElementById("telephone")
var enquiry = document.getElementById("enquiry")

document.getElementsByTagName("FORM")[0].addEventListener("submit", handleContactSubmit);

function handleContactSubmit(event) {
    event.preventDefault();
    if (allValidationResults() == false) {
        highlightErrors()

    } else {
        console.log("all good to go")
        document.getElementsByTagName("FORM")[0].submit()
    }

}

function validateIfEmpty () {
    this.value = ""
}
function highlightErrors() {
    console.log("I will add or remove classess")
}

function validateLenght() {

}

function validateOnlyLetters () {

}

//functions to validate each input field
function validateResultContactName() {
    if(contactName.value === validateIfEmpty) {
        highlightErrors()

    } else {
        console.log("failed individual validation")
        return(false);
        
    };
    
};



//function to check if all validations passed
function allValidationResults() {
    if (validateResultContactName() == true) {
        console.log("passed all validation results")
        return(true)
        
    } else {
        console.log("failed all validation results")
        return(false)
        
    }
}


