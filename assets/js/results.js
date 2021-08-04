
//https://stackoverflow.com/questions/8648892/how-to-convert-url-parameters-to-a-javascript-object

var search = location.search.substring(1);
console.log(JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }));

console.log(search);
// this object holds all data that user has input in the calculator form

var allFormData = (JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }));
console.log(allFormData);

// this injects user input into the results.html page

document.getElementById("input-name").innerHTML = allFormData["input-name"];

// display current weight 

if (allFormData["current-weight-kg"] !== "") {
    document.getElementById("current-weight").innerHTML = allFormData["current-weight-kg"];
} else if ((allFormData["current-weight-stone"] !== "") && (allFormData["current-weight-pounds"] !== "")) {
    document.getElementById("current-weight").innerHTML = `Your current weight is ${allFormData["current-weight-stone"]}st ${allFormData["current-weight-pounds"]}`
}


