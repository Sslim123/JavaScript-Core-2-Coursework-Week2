let button = document.querySelector("#blueBtn");
button.addEventListener("click", myButton);
function myButton(){
    let Jumbotron = document.querySelector(".Jumbotron");
    Jumbotron.style.backgroundColor = "#588fbd";
   
    let firstButton = document.querySelector("#firstButton");
    firstButton.style.backgroundColor = "#ffa500";

    secendButton = document.querySelector("#secendButton");
    secendButton.style.backgroundColor = "black";

    secendButton.style.color = "white";

    console.log("hi");
}
let orangeBon = document.querySelector("#orangeBtn");
orangeBon.addEventListener("click", orangeButton);

function orangeButton(){
    let Jumbotron = document.querySelector(".Jumbotron");
    Jumbotron.style.backgroundColor = "#f0ad4e";

    let firstButton = document.querySelector("#firstButton");
    firstButton.style.backgroundColor = "#5751fd";
    secendButton = document.querySelector("#secendButton");
    secendButton.style.backgroundColor = "#31b0d5";
        secendButton.style.color = "white";

}
let greenBon = document.querySelector("#greenBtn");
greenBon.addEventListener("click", greenButton);
function greenButton(){
    let Jumbotron = document.querySelector(".Jumbotron");
    Jumbotron.style.backgroundColor = "#87ca8a";

    let firstButton = document.querySelector("#firstButton");
    firstButton.style.backgroundColor = "black";
    secendButton = document.querySelector("#secendButton");
    secendButton.style.backgroundColor = "#8c9c08";
    

}
let submitTheForm = document.querySelector("#submitTheForm");
submitTheForm.addEventListener("click", 
function(){alert("to thank you for filling out the form");});