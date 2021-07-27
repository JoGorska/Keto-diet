//declare variables for each input field

const contactName = document.getElementById("contact-name")
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const enquiry = document.getElementById("enquiry");
const contactForm = document.getElementsByTagName("FORM")[0];

//event listener for "submit"

document.getElementsByTagName("FORM")[0].addEventListener("submit", handleContactSubmit);

//variables creating tests for test function

const regexLetters = /^[a-z][A-Z].,'\.-\ ]*$/;

const min = 3;

const maxLength50 = 50;

const maxLength300 = 300;

/**
 * Function to test if the input value is empty, when user did not write anything in the field
 * @returns 
 */

function isEmpty(contactName) {
    let length = contactName.value.length;

    if (length === "") {
        return true;
    } else {
        return false;
    };

};

/**
 * Function to test the length between 3 and 50 for contact Name input field value
 * ??? I'm not sure how to fill in the below fields
 * @param {3, 50} contactName 
 * @returns true
 */
function minMax50(contactName) {
    let length = contactName.value.length;

    if (length < min) {
        return false;
     } else if (length > maxLength50) {
        return false;
     } else {
        return true;
     };
};

/**
 * universal function testing any field if they contain letters and chosen characters only, 
 * 
 */

 function containsLetters() {
    let value = this.value
    return regexLetters.test(value);
};

/**
 * Universal function to highlight errors in a form, once the field failed validation on submit
 * and it doesn't work!!!
 */
 //function highlightErrors() {
//    console.log("I will add or remove classess")
//    this.classList.add("bg-danger")
//}

//functions to display result of the validation of each particular field, returns true or highlights the input field red

/**
 * Function to validate Contact Name.
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */

function validateResultContactName() {
  
    if(!isEmpty(contactName)) {
        console.log("failed individual validation on input Required")
        contactName.classList.add("is-invalid", "border", "border-danger");

        return(false);

    }else if (!minMax50(contactName)) {
        console.log("failed individual validation on min or max Length")
        contactName.classList.add("is-invalid", "border", "border-danger");

        return(false);

    } else if (!containsLetters(contactName)) {
    
        console.log("failed individual validation on regex")
        contactName.classList.add("is-invalid", "border", "border-danger");

        return(false);  

    } else {
      
        console.log(`I have passed through validation and my value is: ${contactName.value}`)
        console.log(contactName.value.length);
        return(true)



    };
    
};



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

