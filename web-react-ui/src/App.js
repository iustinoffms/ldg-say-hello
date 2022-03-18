import { useState } from "react";
import "./App.css";

function App() {
  function sayHello(name, greetingSelector) {
    const greetings = [
      `Hello, ${name}, nice to meet you!`,
      `Greetings, ${name}!`,
      `Welcome, ${name}! Have a great day`,
      `Nice to have you, ${name}!`,
    ];
    if (name === "") return "Hello Stranger";

    const selection = greetingSelector();
    if (selection < 0 || selection > 3) return name;
    return greetings[selection];
  }

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName(
      sayHello(e.target[0].value, () => {
        return Math.floor(Math.random() * 4);
      })
    );
    e.target[0].value = "";
  }

  return (
    <div className="App">
      <div className="display" id="display">
        {name}
      </div>
      <div className="functionality">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">What is your name ?</label>
          <input type="text" name="name" id="name"></input>
          <input type="submit" value="Insert"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
