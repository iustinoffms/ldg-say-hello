function sayHello(name) {
  return name === ""
    ? `Hello, Stranger, nice to meet you!`
    : `Hello, ${name}, nice to meet you!`;
}
module.exports = sayHello;
