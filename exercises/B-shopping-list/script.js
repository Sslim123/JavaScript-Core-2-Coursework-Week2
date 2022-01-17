function shoppingList(shopping) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");

  content.appendChild(ul);
    shopping.forEach(shingList);

}
function shingList(shopping){
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
   li.innerHTML =   shopping;
   ul.appendChild(li);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
