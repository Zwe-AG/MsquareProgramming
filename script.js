// console.log('Hello World');

// const divElement = document.createElement("div");
// const textNode= document.createTextNode("Welcome to Myanmar");
// divElement.appendChild(textNode);
// const tagCollection = document.getElementsByTagName("body");
// const bodyElement = tagCollection[0];
// bodyElement.appendChild(divElement);

// const bodyElement = document.getElementsByTagName("body")[0];
// const parentDiv = document.createElement("div");
// parentDiv.classList.add("parent");

// parentDiv.classList.remove("parent");

// const childDivOne = document.createElement("div");
// const childDivOneText = document.createTextNode("child one");
// childDivOne.appendChild(childDivOneText);
// childDivOne.append("child one");

// const childDivTwo = document.createElement("div");

// const childDivTwoText = document.createTextNode("child two");
// childDivTwo.appendChild(childDivTwoText);
//    or
//childDivTwo.append("child two")

// parentDiv.appendChild(childDivOne);
// parentDiv.appendChild(childDivTwo);

// parentDiv.append(childDivOne , childDivTwo);

// bodyElement.appendChild(parentDiv);

// const styleTestDiv = document.getElementsByClassName("styleTest");
// console.log("styleTestDiv's width:", getComputedStyle(styleTestDiv).width);
// console.log("styleTestDiv's height:", getComputedStyle(styleTestDiv).height);
// console.log(
//   "styleTestDiv's background color:",
//   getComputedStyle(styleTestDiv).backgroundColor
// );

const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("bgImg")[0];
const originalSrc = image.src;
const imageArray = [
  "https://images.unsplash.com/photo-1654128700262-74a93a7f43fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1654161054556-a9ff3d0c6ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1654205052383-d6c2046219f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1653919431318-c3ebf2b0ca04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1654183585306-843f5d8ab9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
];
let counter = 0;
const myFunction = () => {
  // console.log("Hi Button");
  // myButton.style.backgroundColor = "lightgreen";
  // image.src = "https://bit.ly/3mde9dC";
  if (counter === 5) {
    image.src = originalSrc;
    counter = 0;
    return;
  }
  let imageLink = imageArray[counter];
  image.src = imageLink;
  counter += 1;
};
// myButton.onclick = myFunction;
myButton.addEventListener("click", myFunction);

// const myFunction = () => {
//   console.log("Hi Button");
// };

// const myFunction2 = () => {
//   console.log("Hi Button2");
// };

// myButton.onclick = myFunction; No working
// myButton.onclick = myFunction2; replace myFunction & Working
// Result : Hi Button2

// const myFunction = () => {
//   console.log("Hi Button");
// };

// const myFunction2 = () => {
//   console.log("Hi Button2");
// };

// myButton.addEventListener("click", myFunction);  working
// myButton.addEventListener("click", myFunction2); Working
// Result : Hi Button Hi Button2
