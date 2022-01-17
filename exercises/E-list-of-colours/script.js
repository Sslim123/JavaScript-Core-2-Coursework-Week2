function listOfColours(colours) {
  // Write your code here...
  let content = document.querySelector("#content");
    let select = document.createElement("select");
    let selcP = document.createElement("p");
    selcP.innerText = "Note: The text-decoration-line property is not supported in Edge prior 79, and only with a -webkit- prefix in Safari.";
  select.appendChild(selcP);
    content.appendChild(select);
    colours.forEach(allColors);
}
  function allColors(colours){
    let select = document.querySelector("select");
    let options = document.createElement("option");
    select.appendChild(options);
    options.innerHTML = colours;
    options.addEventListener("click", function myAlert(){ alert("hello");}
    ); 
  }
const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
