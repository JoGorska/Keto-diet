//declare variables for each input field

var contactName = document.getElementById("contact-name")
var email = document.getElementById("email")
var telephone = document.getElementById("telephone")
var enquiry = document.getElementById("enquiry")

document.getElementsByTagName("FORM")[0].addEventListener("submit", handleContactSubmit);

function handleContactSubmit(event) {
    event.preventDefault();
    if (contactFormValidation() == false) {
        highlightErrors()

    } else {
        console.log("all good to go")
        FormData.submit()
    }

}

function validateIfEmpty () {
    this.value = ""
}

function validateLenght() {

}

function validateOnlyLetters () {

}

//functions to validate each input field
function validateContactName () {
    
}

//function to check if all validations passed
function contactFormValidation() {

}

function highlightErrors() {
    console.log("I will add or remove classess")
}
