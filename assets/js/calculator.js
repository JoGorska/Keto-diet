


//////////////////////////////////////////////////////////////////Caclulator starts here///////////////////////////////////////////////////////////////////////////

// Calculator

//Radio Buttons event listeners

document.getElementsByTagName("FORM")[0].addEventListener("change", function(event){
  if(event.target.matches("#targetDate")) {
    console.log("make target date invisible and make target weight apear")

    
  } else if (event.target.matches("#targetWeight")){
    console.log("make target weight invisible and make target date apear")

    
  } else if (event.target.matches("#imperial")){
    console.log("I will change form to Metric")
    
  
  } else if (event.target.matches("#metric")){
    console.log("I will change form to Imperial")
    
  
  } else {
    console.log("radio button unknown")
    
  }
});

//universal function to make things visible
//universal function to make things invisible

// choose between Target Weight and Target Date

//event listener to replace Metric with imperial and the other way arround
