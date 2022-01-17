function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
    content.appendChild(ul);
    books.forEach(allTheBooks)


}function allTheBooks(books){
  let ul = document.querySelector("ul");
    let titleOne = document.createElement("li");
    ul.appendChild(titleOne);
    let H2 = document.createElement("h2");
    titleOne.appendChild(H2);
    H2.innerHTML = books.title;
    img = document.createElement("img");
    img.src="https://images-na.ssl-images-amazon.com/images/I/41Skgklo4sL._SX330_BO1,204,203,200_.jpg"
    ul.appendChild(img);
  let p = document.createElement("p");
  ul.appendChild(p);
  p.innerHTML = books.author;
}
 


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,

  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);