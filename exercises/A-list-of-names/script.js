function listOfNames() {
  let content = document.querySelector("#content");
  people.forEach(myNames);

}

  function myNames(people){
  let h1 = document.createElement("h1");
  content.appendChild(h1);
  h1.innerHTML = people.name + " " + people.job;
  }

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
