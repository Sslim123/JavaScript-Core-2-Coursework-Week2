function highlightWords(paragraph, colours) {
  // Write your code here...
  let select1 = document.getElementById("content");
  let p = document.createElement("p");
  select1.appendChild(p);
  //p.innerText = - "  ";

  let span = document.createElement("span");
  span.innerText = paragraph.split("  / ");
  p.appendChild(span);
  let select = document.createElement("select");
  select1.appendChild(select);
  colours.forEach(myOption);  
  

}
  function myOption(colours){
  let select = document.querySelector("select");
   let options = document.createElement("option");
   options.innerHTML = colours;
   select.appendChild(options);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis., nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
