
//Radio Buttons event listener and functions to make divs disapear, to display requested content in the form
// code from code pen, explained by Sean Young on Webinar 22/07/2021
//https://codepen.io/seanyoung247/pen/qBmbZQK

document.getElementsByTagName("FORM")[0].addEventListener("change", function(event){
  if(event.target.matches("#radio-target-date")) {
    //make visible
    document.getElementById("div-target-date").classList.remove("my-invisible")
    //make invisible
    document.getElementById("div-target-metric").classList.add("my-invisible")
    document.getElementById("div-target-imperial").classList.add("my-invisible")
       
  } else if (event.target.matches("#radio-target-weight")){
    //make invisible
    document.getElementById("div-target-date").classList.add("my-invisible")
    //make visible
    document.getElementById("div-target-metric").classList.remove("my-invisible")
    document.getElementById("div-target-imperial").classList.remove("my-invisible")
    
  } else if (event.target.matches("#imperial")){
    //make invisible
    document.getElementById("div-all-metric").classList.add("my-invisible")
    //make visible
    document.getElementById("div-all-imperial").classList.remove("my-invisible")
  
  } else if (event.target.matches("#metric")){
    //make visible
    document.getElementById("div-all-metric").classList.remove("my-invisible")
    //make invisible
    document.getElementById("div-all-imperial").classList.add("my-invisible")

  } else {
    console.log("radio button unknown")
  }
});


