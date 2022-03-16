// const sayHello = require("../domain/sayHello");

function sayHello(name) {
  return name === ""
    ? `Hello, Stranger, nice to meet you!`
    : `Hello, ${name}, nice to meet you!`;
}
const button = document.getElementById("button");
const inputArea = document.getElementById("name");
const showGreeting = document.getElementById("show-message");
const paragraph = document.createElement("p");

button.addEventListener("click", function (event) {
  event.preventDefault();
  showGreeting.appendChild(paragraph);
  paragraph.innerHTML = sayHello(inputArea.value);
  inputArea.value = "";
});
