//remember to use ID male and female from welcome question to pre fill the form in calculator

// function - Replace questions Loose Weight -> Excercise More
// I need one function to replace HTML for male and female and two functions to pre fill the form in calculator 



document.getElementById('learn-more').addEventListener("click", function() {
    let mainContainer =document.getElementById("main-container");

    mainContainer.innerHTML = `

    <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="#" alt="little logo" width="72" height="57">
    <h1 class="display-5 fw-bold">Do you want to excercise more?</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4"></p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-danger btn-lg px-4 gap-3">Yes</button>
        <button type="button" class="btn btn-success btn-lg px-4">No</button>
      </div>
    </div>
  </div>
  `
});




// Calculator

