

//guidance to handle submit and validation javascripttutorial.net/javascript-dom/javascript-form-validation



//declare variables for each input field

const contactName = document.getElementById("contact-name")
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const enquiry = document.getElementById("enquiry");
const contactForm = document.getElementsByTagName("FORM")[0];

//event listener for "submit"

document.getElementsByTagName("FORM")[0].addEventListener("submit", handleContactSubmit);

//variables creating tests for test function, edited and designed in https://regexr.com/ enabling names with a dash, space or apostrophe, dot or a coma and a space. 

const regexLetters = /[a-zA-Z \,'\.\-\']/g

// regex email copied from javascripttutorial.net/javascript-dom/javascript-form-validation

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// regex for UK phone number in any format copied from
//https://stackoverflow.com/questions/11518035/regular-expression-for-gb-based-and-only-numeric-phone-number

const regexTelephone = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;

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
 *  functions testing particular field if they are in line with Regex
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

function correctTelephone(telephone) {
    let value = telephone.value
    console.log(value)
    return regexTelephone.test(value);
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
    let divContactNameHelp = document.getElementById("contact-name-help");
    if(isEmpty(contactName)) {
        console.log("name - failed validation if it's empty");
        contactName.classList.add("is-invalid");
        contactName.setAttribute("aria-describedby", "contact-name-help");

        //ivisible div, that is aria-describedby label for error becomes visible
        
        divContactNameHelp.innerHTML = "This field is required";
        divContactNameHelp.classList.remove("my-invisible");

        return(false);

    }else if (!minMax50(contactName)) {
        console.log("name - failed individual validation on min or max Length");
        contactName.classList.add("is-invalid");
        contactName.setAttribute("aria-describedby", "contact-name-help");
        //error description
        divContactNameHelp.classList.remove("my-invisible");
        divContactNameHelp.innerHTML = "The name can be min 2 and max 50 characters long";
        
        return(false);

    } else if (!containsLetters(contactName)) {
    
        console.log("name - failed individual validation on regex");
        contactName.classList.add("is-invalid");
        contactName.setAttribute("aria-describedby", "contact-name-help");
        //error description
        divContactNameHelp.classList.remove("my-invisible");
        divContactNameHelp.innerHTML = 'The name can contain letters and some special characters such as "-", "`" "." ';

        return(false);  

    } else {
      
        console.log(`name input field passed validation and name value is: ${contactName.value}`)
        console.log(contactName.value.length);
        return(true);
    };
    
};

/**
 * Function to validate email.
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */




 function validateResultEmail() {
    let divEmailHelp = document.getElementById("email-help");
    if(email.value === "") {
        console.log("email - failed validation on input required ");
        email.classList.add("is-invalid");
        email.setAttribute("aria-describedby", "email-help");
        divEmailHelp.innerHTML = "This field is required"
        divEmailHelp.classList.remove("my-invisible");
        return(false);

    }else if (email.value.length < 3) {
        console.log("email - failed individual validation on min or max Length");
        email.classList.add("is-invalid");
        email.setAttribute("aria-describedby", "email-help");
        divEmailHelp.innerHTML = "Email too short"
        divEmailHelp.classList.remove("my-invisible");
        return(false);
     
    
    
    }else if (email.value.length > 50) {
        console.log("email - failed individual validation on min or max Length");
        email.classList.add("is-invalid");
        email.setAttribute("aria-describedby", "email-help");
        document.getElementById("email-help").innerHTML = "Email too long";
        divEmailHelp.classList.remove("my-invisible");

        return(false);

    } else if (!correctEmail(email)) {
    
        console.log("email - failed individual validation on regex");
        email.classList.add("is-invalid");
        email.setAttribute("aria-describedby", "email-help");
        document.getElementById("email-help").innerHTML = "Please enter email in correct format for example email@domain.co.uk";
        divEmailHelp.classList.remove("my-invisible");

        return(false);  

    } else {
      
        console.log(`email - I have passed through validation and my value is: ${email.value} and my length ${email.value.length}`)

        return(true)



    };
    
};



/**
 * Function to validate telephone number.
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */




 function validateResultTelephone() {
  
    if(telephone.value === "") {
        console.log("telephone - failed validation on input required ");
        telephone.classList.add("is-invalid");
        document.getElementById("telephone-help").innerHTML = "This field is required";
        return(false);

    }else if (telephone.value.length < 3) {
        console.log("telephone - failed individual validation on min or max Length");
        telephone.classList.add("is-invalid");
        document.getElementById("telephone-help").innerHTML = "Telephone number too short, please enter valid UK number containing 11 digits";
        return(false);
     
    
    
    }else if (telephone.value.length > 50) {
        console.log("telephone - failed individual validation on min or max Length");
        telephone.classList.add("is-invalid");
        document.getElementById("telephone-help").innerHTML = "Telephone number too long, please enter valid UK number containing 11 digits.";

        return(false);

    } else if (!correctTelephone(telephone)) {
    
        console.log("telephone - failed individual validation on regex");
        telephone.classList.add("is-invalid");
        document.getElementById("telephone-help").innerHTML = "Please enter valid UK number containing 11 digits.";

        return(false);  

    } else {
      
        console.log(`telephone - I have passed through validation and my value is: ${telephone.value} and my length ${telephone.value.length}`);

        return(true);



    };
    
};


/**
 * Function to validate email.
 * Returns true or false, if false - changes the look of the input field 
 * and displays line of text with detailed information why it failed
 */




 function validateResultEnquiry() {
    let divEnquiryHelp = document.getElementById("enquiry-help");

    if(enquiry.value === "") {
        enquiry.classList.add("is-invalid");
        enquiry.setAttribute("aria-describedby", "enquiry-help");
        divEnquiryHelp.innerHTML = "This field is required"
        divEnquiryHelp.classList.remove("my-invisible");
        return(false);

    } else if (enquiry.value.length < 3) {
        enquiry.classList.add("is-invalid");
        enquiry.setAttribute("aria-describedby", "enquiry-help");
        divEnquiryHelp.innerHTML = "Message too short"
        divEnquiryHelp.classList.remove("my-invisible");
        return(false);
     
    
    
    } else if (enquiry.value.length > 400) {
        enquiry.classList.add("is-invalid");
        enquiry.setAttribute("aria-describedby", "enquiry-help");
        divEnquiryHelp.innerHTML = "Message too long. Please use maximum 400 characters.";
        divEnquiryHelp.classList.remove("my-invisible");

        return(false);

    } else {
      
        console.log(`enquiry - I have passed through validation and my value is: ${enquiry.value} and my length ${enquiry.value.length}`)

        return(true)

    };
    
};



/**
 * Function to check if each validation result, for each input field is false
*/

function allValidationResults() {
    if (validateResultContactName() == false) {
        console.log("name failed all validation results");
        return(false);
    
    } else if (validateResultEmail() == false) {
        console.log("email failed all validation results");
        return(false);

    } else if (validateResultTelephone() == false) {
        console.log("telephone failed all validation results");
        return(false);
        
    } else if (validateResultEnquiry() == false) {
        console.log("enquiry failed all validation results");
        return(false);
        
    } else {
        console.log("all fields passed all validation results");
        return(true);
        
    }
}

/**
 * Main function to handle submit event
 */

function handleContactSubmit(event) {
    event.preventDefault();
    if (allValidationResults() == false) {
        console.log("display whole form with highlited fields in red");

    } else {
        console.log("all good to go");
        document.getElementsByTagName("FORM")[0].submit();
    };

}
////////////////////////////////////////////https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/
//might need removing, gives unpredictable results

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

contactForm.addEventListener ('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            validateResultContactName();
            break;
        case 'email':
            validateResultEmail();
            break;
        case 'telephone':
            validateResultTelephone();
            break;
        case 'enquiry':
            validateResultEnquiry();
            break;
    }
}));