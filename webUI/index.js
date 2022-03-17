// const sayHello = require("../domain/sayHello");

function sayHello(name) {
  const greetings = [
    `Hello, ${name}, nice to meet you!`,
    `Greetings, ${name}!`,
    `Welcome, ${name}! Have a great day`,
    `Nice to have you, ${name}!`,
  ];

  if (name === "") return `Hello, Stranger, nice to meet you!`;
  return greetings[Math.floor(Math.random() * greetings.length)];
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
