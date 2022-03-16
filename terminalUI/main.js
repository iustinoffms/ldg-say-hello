const sayHello = require("../domain/sayHello");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your name? ", (name) => {
  const greeting = sayHello(name);
  console.log(greeting);
  readline.close();
});
