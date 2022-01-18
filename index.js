document.addEventListener("DOMContentLoaded", function() {
    loadText()
    console.log("The DOM has loaded");
  });
  
function loadText() {
    document.getElementById("text").innerHTML = "This is really cool!";
}