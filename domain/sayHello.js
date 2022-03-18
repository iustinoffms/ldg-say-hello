function sayHello(name, greetingSelector) {
  const greetingsMessages = [
    `Hello, ${name}, nice to meet you!`,
    `Greetings, ${name}!`,
    `Welcome, ${name}! Have a great day`,
    `Nice to have you, ${name}!`,
  ];
  if (name === "") return "Hello Stranger";

  const selectedGreet = greetingSelector();
  if (selectedGreet < 0 || selectedGreet > 3) return name;
  return greetingsMessages[selectedGreet];
}

module.exports = sayHello;
