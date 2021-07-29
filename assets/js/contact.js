

//guidance to handle submit and validation javascripttutorial.net/javascript-dom/javascript-form-validation



//declare variables for each input field

const contactName = document.getElementById("contact-name")
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const enquiry = document.getElementById("enquiry");
const contactForm = document.getElementsByTagName("FORM")[0];

//event listener for "submit"

document.getElementsByTagName("FORM")[0].addEventListener("submit", handleContactSubmit);

//variables creating tests for test function, edited and designed in https://regexr.com/

const regexLetters = /[a-zA-Z \,'\.\-\']/g

// regex email copied from javascripttutorial.net/javascript-dom/javascript-form-validation
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const min = 3;

const maxLength50 = 50;

const maxLength300 = 300;

//Functions to test each property

/**
 * Function to test if the input value is empty
 * @returns 
 */

function isEmpty(contactName) {
    let value = contactName.value;

    if (value === "") {
        return true;
    } else {
        return false;
    };

};



/**
 * Universal function to test the length between 3 and 50 input field value
 * ??? I'm not sure how to fill in the below fields 
 * @param {3, 50} 
 * @returns true
 */
function minMax300() {
    let mylength = this.value.length;

    if (mylength < min) {
        return false;
     } else if (mylength > maxLength300) {
        return false;
     } else {
        return true;
     };
};

/**
 * Universal function to test the length between 3 and 50 input field value
 * ??? I'm not sure how to fill in the below fields 
 * @param {3, 50} 
 * @returns true
 */
function minMax50(contactName) {

    let myLength = contactName.value.length;

    if (myLength < min) {
        return false;
     } else if (myLength > maxLength50) {
        return false;
     } else {
        return true;
     };
     
};

/**
 *  function testing any field if they contain letters and chosen characters only, 
 * 
 */

 function containsLetters(contactName) {
    let value = contactName.value
    console.log(value)
    return regexLetters.test(value);
};

function correctEmail(email) {
    let value = email.value
    console.log(value)
    return regexEmail.test(value);
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
  
    if(isEmpty(contactName)) {
        console.log("name - failed validation if it's empty");
        contactName.classList.add("is-invalid");
        contactName.setAttribute("aria-describedby", "contact-name-help")
        //ivisible div, that is aria-describedby label for error becomes visible
        let divContactNameHelp = document.getElementById("contact-name-help");
        divContactNameHelp.innerHTML = "This field is required";
        divContactNameHelp.classList.remove("my-invisible");

        return(false);

    }else if (!minMax50(contactName)) {
        console.log("name - failed individual validation on min or max Length")
        contactName.classList.add("is-invalid");
        document.getElementById("contact-name-help").innerHTML = "The name can be min 2 and max 50 characters long";

        return(false);

    } else if (!containsLetters(contactName)) {
    
        console.log("name - failed individual validation on regex")
        contactName.classList.add("is-invalid");
        document.getElementById("contact-name-help").innerHTML = 'The name can contain letters and some special characters such as "-", "`" "." ';

        return(false);  

    } else {
      
        console.log(`name input field passed validation and name value is: ${contactName.value}`)
        console.log(contactName.value.length);
        return(true)



    };
    
};
/**
 * Function to validate email.
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */




 function validateResultEmail() {
  
    if(email.value === "") {
        console.log("email - failed validation on input required ")
        email.classList.add("is-invalid");
        document.getElementById("email-help").innerHTML = "This field is required"
        return(false);

    }else if (email.value.length < 3) {
        console.log("email - failed individual validation on min or max Length")
        email.classList.add("is-invalid");
        document.getElementById("email-help").innerHTML = "Email too short"
        return(false);
     
    
    
    }else if (email.value.length > 50) {
        console.log("email - failed individual validation on min or max Length")
        email.classList.add("is-invalid");
        document.getElementById("email-help").innerHTML = "Email too long"

        return(false);

    } else if (!correctEmail(email)) {
    
        console.log("email - failed individual validation on regex")
        email.classList.add("is-invalid");

        return(false);  

    } else {
      
        console.log(`email - I have passed through validation and my value is: ${email.value} and my length ${email.value.length}`)

        return(true)



    };
    
};


//function to check if each validation result, for each input field is true

function allValidationResults() {
    if (validateResultContactName() == false) {
        console.log("name failed all validation results")
        return(false)
    
    } else if (validateResultEmail() == false) {
        console.log("email failed all validation results")
        return(false)
        
    } else {
        console.log("all fields passed all validation results")
        return(true)
        
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

