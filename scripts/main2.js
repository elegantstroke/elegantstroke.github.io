var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.jpg") {
    myImage.setAttribute("src", "images/2.jpg");
  } else {
    myImage.setAttribute("src", "images/1.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Как тебя зовут?");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Приветики, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Приветики, " + storedName;
}

myButton.onclick = function () {
  setUserName();
}; 