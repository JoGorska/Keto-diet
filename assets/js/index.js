// timeout window if answered yes





//Welcome Questions - interactions with the user
  
  document.getElementById('learn-more').addEventListener("click", function() {
    let mainContainer = document.getElementById("main-container");
    
    //Excercise Question
    mainContainer.innerHTML = `
  
      <div class="px-4 py-5 my-5 text-center">
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

              // opens new window asking the user to be honest
              //https://www.w3schools.com/jsref/met_win_settimeout.asp
              var myWindow = window.open("", "", "width=700, height=700");
              myWindow.document.write(
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="description" content="">
                        <meta name="description" content="Change your fuel - website aiming to encourage people to change to keto diet">
                        <meta name="keywords" content="weight loss, keto, keto diet, diet, target weight, ">
                        <meta name="author" content="JoGorska">

                        <!--google fonts-->
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Kodchasan:wght@200&display=swap" rel="stylesheet">

                        <!--my stylesheet link-->
                        <link rel="stylesheet" href="assets/css/style.css">
                    <title>Be Honest!</title>
                </head>
                <body>
                <div class="my-heading-font my-text-shadow my-text-danger">
                    <div class="center my-box rounded-corners my-text-center">
                        <p>I need you to be honest with me!</p>
                
                        
                    </div>
                </div>
                </body>
                </html>`);
              setTimeout(function(){ myWindow.close() }, 3000);

              // moves window from the corner
              // https://www.w3schools.com/jsref/met_win_moveto.asp
              function moveWin() {
                myWindow.moveTo(500, 200);                                  // Moves the new window   
                myWindow.focus();                                           // Sets focus to the new window
              }
              moveWin()
                    
          } else if (this.innerHTML === "No") {
              console.log("I clicked No");
  
              let mainContainer = document.getElementById("main-container");
  
              //Calorie Question 
              mainContainer.innerHTML = `
                <div class="px-4 py-5 my-5 text-center">
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
  
                    // opens new window asking the user to be honest
                    //https://www.w3schools.com/jsref/met_win_settimeout.asp
                    var myWindow = window.open("", "", "width=300, height=300");
                    myWindow.document.write(
                    `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <meta name="description" content="">
                            <meta name="description" content="Change your fuel - website aiming to encourage people to change to keto diet">
                            <meta name="keywords" content="weight loss, keto, keto diet, diet, target weight, ">
                            <meta name="author" content="JoGorska">

                            <!--google fonts-->
                            <link rel="preconnect" href="https://fonts.googleapis.com">
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                            <link href="https://fonts.googleapis.com/css2?family=Baumans&family=Kodchasan:wght@200&display=swap" rel="stylesheet">

                            <!--my stylesheet link-->
                            <link rel="stylesheet" href="assets/css/style.css">
                        <title>Be Honest!</title>
                    </head>
                    <body>
                    <div class="my-heading-font my-text-shadow">
                        <div class="center my-box rounded-corners my-text-center">
                            <p>I need you to be honest with me!</p>
                    
                            
                        </div>
                    </div>
                    </body>
                    </html>`);
                    setTimeout(function(){ myWindow.close() }, 3000);
                    
                    // moves window from the corner
                    // https://www.w3schools.com/jsref/met_win_moveto.asp
                    function moveWin() {
                      myWindow.moveTo(500, 200);                                  // Moves the new window   
                      myWindow.focus();                                           // Sets focus to the new window
                    }
                    moveWin()
  
                  } else if (this.innerHTML === "No") {
                    console.log("I clicked No to calorie count");
  
                    let mainContainer =document.getElementById("main-container");
                      //Calculator Question 
                    mainContainer.innerHTML = `
                  
                      <div class="px-4 py-5 my-5 text-center">
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