Sean Murphy

parse domain name
function domainName(url){
  return url.replace(/.+\/\/|www.|\..+/g, '');
};

function domainName(url){
  return url.replace(/(?:.*\/\/)?(?:www\.)?(.+)\..*/i, (match,domain)=>domain);
};


///////////////////////////////////// to be deleted


//
// code from code pen, explained by Sean Young on Webinar 22/07/2021
//https://codepen.io/seanyoung247/pen/qBmbZQK
// commented out as I don't know how to give 2 different responses to two different buttons.
//function testing(event) {
//  if (this && event) console.log(`this.id = ${this.id}, event.target.id = ${event.target.id}`);
//  return () => document.getElementById("main-container").innerHTML = `<div>ddddd</div>`

//}




/////////////////////////////////////////////////actual content of calculator starts here///////////////////////////////////////////////



//Calculator form validation with javascript - on input for each field regardles which form it is

//event listener for submit with two different functions for two forms - target date and target weight

document.getElementById("main-container").addEventListener("submit", function(event){
  if(event.target.matches("#calcFormTargetDate")) { 
    handleSubmitTargetDate(event)
    
  } else if (event.target.matches("#calcFormTargetWeight")) {
    handleSubmitTargetWeight(event);
  }
});

//functions that</div>

function handleSubmitTargetDate(event) {
  event.preventDefault();
  validateForm()
  addClassH100();
  };

function handleSubmitTargetWeight(event) {
  event.preventDefault();
  addClassH100();
  document.getElementById("main-container").innerHTML = 
  `<p class="shadow-lg">This paragraph will contain result of the calculations</p>`
};
/////function to validate form ON SUBMIT before calculating the result. loop works, gives 11 undefined, but I want to capture this input field with a specific id
function validateForm(){

  let inputs = document.getElementsByTagName("input");
    for(let input of inputs) {
      
       
        if (input.id === "inputName") {
            console.log(`I have the righ input field to validate - target date input field ${input.id} and I can check if your value ${input.value} is matching my validation function`)
            //Alert message to review your answer
            var AZRegex = /^[a-zA-Z.,'/ -/]*$/;
            let inputNameValue = input.value;
            var inputNameResult = AZRegex.test(inputNameValue);

            if (inputNameResult === false) {
              //to input html to div holding name input need for loop to find the right div
              let divs = document.getElementsByTagName("div")
                for(let div of divs ){
                if (div.id === inputNameDiv) {
                  this.innerHTML = 
                  `
                    <label for="ipnutName" class="form-label">Name</label>
                    <input type="text" class="form-control is-invalid" id="inputName" name="name">
                    <div id="ageHelp" class="invalid-feedback">Please use only letters and special characters in the Name field</div>
                  `
                }
              }

                console.log(`flase result of testing the value ${inputNameResult}`)
                                
            } else {
                console.log(`All good to go value ok, create variable: ${input.value} will be used to calculate final result of calcuation`);
                
              };

          }

    };
  };

  //let form = document.getElementById("calcFormTargetDate");
  //let inputName = form.element["inputName"].value
  //let inputAge = form.element["inputAge"]
  //if (inputName !== isNan) {
  //  console.log("change me into letters")
  //} else {
  //  console.log("give me results of calculations")
  //}
//}