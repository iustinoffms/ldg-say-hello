const sayHello = require("./sayHello.js");

describe("sayHello", () => {
  test("given a name, print Hello name nice to meet you", () => {
    //Arange
    const name = "Iustin";

    //Act
    const result = sayHello(name);

    //Assert
    expect(result).toEqual("Hello, Iustin, nice to meet you!");
  });
  test("given no name, print Hello Stranger nice to meet you", () => {
    //Arange
    const name = "";

    //Act
    const result = sayHello(name);

    //Assert
    expect(result).toEqual("Hello, Stranger, nice to meet you!");
  });
});
