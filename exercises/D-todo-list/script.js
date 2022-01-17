function todoList(todos) {
  // Write your code here...
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  
  todos.forEach(newLi);
}
function newLi(todo){
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = todo.todo;

}/*
const letMyClick = querySelectorAll("li");
function letTodo(){
  alert("hi this is me");
}
for(let li of letMyClick){
  li.addEventListener("click", letTodo, false); 

}*/

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);