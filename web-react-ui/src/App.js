import { useState } from "react";
import "./App.css";

function App() {
  function sayHello(name) {
    return name === ""
      ? `Hello, Stranger, nice to meet you!`
      : `Hello, ${name}, nice to meet you!`;
  }

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName(sayHello(e.target[0].value));
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
