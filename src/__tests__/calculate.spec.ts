import supertest = require('supertest');
import app from '../app';

describe("Calculate", () => {
  it("should return a sum of the two numbers", async () => {
    const calculate = await supertest(app)
      .post("/sum")
      .send({
        numberOne: 1,
        numberTwo: 2
      });

      expect(calculate.body).toMatchObject({
        response: 3
      });
  });

  it("should return a subtract of the two numbers", async () => {
    const calculate = await supertest(app)
      .post("/sub")
      .send({
        numberOne: 1,
        numberTwo: 2
      });

      expect(calculate.body).toMatchObject({
        response: -1
      });
  });
});

describe("Hello", () => {
  it("Should return a string with 'Hello World!'", async () => {
    const response = await supertest(app)
      .get("/hello");

      expect(response.body).toMatchObject({
        message: "Hello World!",
      });
  });
});