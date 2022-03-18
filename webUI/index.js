const button = document.getElementById("button");
const inputArea = document.getElementById("name");
const showGreeting = document.getElementById("show-message");
const paragraph = document.createElement("p");

button.addEventListener("click", function (event) {
  event.preventDefault();
  showGreeting.appendChild(paragraph);
  paragraph.innerHTML = sayHello(inputArea.value, () => {
    return Math.floor(Math.random() * 4);
  });
  inputArea.value = "";
});
