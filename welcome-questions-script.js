//Welcome Questions - interactions with the user
 
document.getElementById('main-container').addEventListener("click", function(event){
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
  
  document.getElementById('learn-more').addEventListener("click", function() {
    let mainContainer = document.getElementById("main-container");
    
    //Excercise Question
    mainContainer.innerHTML = `
  
      <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
        <h1 id="excercise-question" class="display-5 fw-bold">Do you want to excercise More?</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4"></p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-danger btn-lg px-4 gap-3">Yes</button>
            <button type="button" class="btn btn-success btn-lg px-4">No</button>
          </div>
        </div>
      </div>`
      
    //Loop through all buttons responding to yes and no, loop inside loop once HTML was replaced.  
  
    let buttons = document.getElementsByTagName("button");
      for(let button of buttons) {
        button.addEventListener("click", function() {
          if (this.innerHTML === "Yes") {
              console.log("I clicked Yes")
              //Alert message to review your answer
              alert("I need you to be Honest with me!")
                      
          } else if (this.innerHTML === "No") {
              console.log("I clicked No");
  
              let mainContainer =document.getElementById("main-container");
  
              //Calorie Question 
              mainContainer.innerHTML = `
                <div class="px-4 py-5 my-5 text-center">
                  <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
                  <h1 id="calorie-question" class="display-5 fw-bold">Do you want to calculate Every calorie?</h1>
                  <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4"></p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <button type="button" class="btn btn-danger btn-lg px-4 gap-3">Yes</button>
                      <button type="button" class="btn btn-success btn-lg px-4">No</button>
                    </div>
                  </div>
                </div>` 
  
              //new loop for buttons after HTML has been changed
              let buttons = document.getElementsByTagName("button");
              for(let button of buttons) {
                button.addEventListener("click", function() {
  
                  if (this.innerHTML === "Yes") {
                    console.log("I clicked Yes, to calorie count");
  
                    //Alert message to review your answer
                    alert("I need you to be Honest with me!")
                
  
                  } else if (this.innerHTML === "No") {
                    console.log("I clicked No to calorie count");
  
                    let mainContainer =document.getElementById("main-container");
                      //Calculator Question 
                    mainContainer.innerHTML = `
                  
                      <div class="px-4 py-5 my-5 text-center">
                        <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
                        <h1 id="calorie-question" class="display-5 fw-bold">Predicted Result Calculator</h1>
                        <div class="col-lg-6 mx-auto">
                          <p class="lead mb-4">See what you can acheve by changing your fuel from carbohydrates to fat (yes FAT)</p>
                          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="calculator.html"><button id="target-weight" type="button" class="btn btn-success btn-lg px-4 gap-3">Calculator</button></a>
                            
                          </div>
                        </div>
                      </div>`
                  } else {
                      console.log("button unnknown")
                  };
                });
              } 
          } else {
            console.log("button unnknown")
          }
  
        })
      };
  });