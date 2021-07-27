//declare variables for each input field

const contactName = document.getElementById("contact-name")
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const enquiry = document.getElementById("enquiry");
const contactForm = document.getElementsByTagName("FORM")[0];

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
    
    if(contactName.value !== inputRequired) {
        //contactName = document.getElementById("contact-name");
        console.log(`display ${contactName.value}`)
        
        return(true)

    } else {
        
        console.log("failed individual validation")
        contactName.classList.add("is-invalid");
        contactName.setAttribute("aria-describedby", "contact-name-help");
        let nextSibling = document.getElementsByTagName("LABEL")[1];
        let errorDiv = document.createElement("div")
        errorDiv.innerHTML = 
        `<div id="contact-name-help" class="invalid-feedback">Please use only letters and special characters in the Name field</div>
        `

        nextSibling.insertBefore(errorDiv.innerHTML, nextSibling);
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

