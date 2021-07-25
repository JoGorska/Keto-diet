


//////////////////////////////////////////////////////////////////Caclulator starts here///////////////////////////////////////////////////////////////////////////

// Calculator

//Radio Buttons event listeners

document.getElementsByTagName("FORM")[0].addEventListener("change", function(event){
  if(event.target.matches("#radio-target-date")) {
    //make visible
    document.getElementById("div-target-date").classList.remove("my-invisible")
    //make invisible
    document.getElementById("div-target-metric").classList.add("my-invisible")
    document.getElementById("div-target-imperial").classList.add("my-invisible")
    
    console.log("make target weight invisible and make target date apear")

    
  } else if (event.target.matches("#radio-target-weight")){
    //make invisible
    document.getElementById("div-target-date").classList.add("my-invisible")
    //make visible
    document.getElementById("div-target-metric").classList.remove("my-invisible")
    document.getElementById("div-target-imperial").classList.remove("my-invisible")
    
    console.log("make target date invisible and make target weight apear")

    
  } else if (event.target.matches("#imperial")){

    
    console.log("I will change form to Imperial")
    
  
  } else if (event.target.matches("#metric")){
    
    console.log("I will change form to Metric")
  
  } else {
    console.log("radio button unknown")
    
  }
});

//universal function to make things visible
//function removeClass(invisible) {
//  this.classList.remove("invisible");
//}
//universal function to make things invisible

//function addClass(invisible) {
 // this.classList.add("invisible");
//}
// choose between Target Weight and Target Date

//event listener to replace Metric with imperial and the other way arround
