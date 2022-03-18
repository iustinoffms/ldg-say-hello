const sayHello = require("./sayHello.js");

describe("sayHello", () => {
  test("given a name and a function that returns 0 should return `Hello, name, nice to meet you!`", () => {
    const result = sayHello("Adi", () => {
      return 0;
    });
    expect(result).toEqual("Hello, Adi, nice to meet you!");
  });
  test("given a name and function that returns 1 should return `Greetings, name!` ", () => {
    const result = sayHello("Tibi", () => {
      return 1;
    });
    expect(result).toEqual("Greetings, Tibi!");
  });
  test("given a name and function that returns 2 should return `Welcome, name! Have a great day`, ", () => {
    const result = sayHello("Gabriel", () => {
      return 2;
    });
    expect(result).toEqual(`Welcome, Gabriel! Have a great day`);
  });
  test("given a name and function that returns 3 should return `Nice to have you, name!`, ", () => {
    const result = sayHello("Andreea", () => {
      return 3;
    });
    expect(result).toEqual(`Nice to have you, Andreea!`);
  });
  test("given a name and function that returns -1 should return name", () => {
    const result = sayHello("Bogdan", () => {
      return -1;
    });
    expect(result).toEqual(`Bogdan`);
  });
  test("given a name and function that returns 4 should return name", () => {
    const result = sayHello("Gina", () => {
      return 4;
    });
    expect(result).toEqual(`Gina`);
  });
  test("given no name should return Hello Stranger", () => {
    const result = sayHello("");
    expect(result).toEqual("Hello Stranger");
  });
});
