const supertest = require("supertest");
const app = require("../index");
const { TEST_BASE_URL } = require("./constants");
const testInit = require("./testInit");
const request = supertest(app);

const userDetails = {
  email: "mail6@gmail.com",
  name: "Peter",
  password: "Password",
}

afterAll(async () => {
  await testInit.tearDown();
});

describe("User Test", () => {
  it("should create a new user", async () => {
    const user = await request.post(`${TEST_BASE_URL}/auth/signup`).send(userDetails);
    expect(user.body.error).toBe(false);
    expect(user.body.data.email).toBe(userDetails.email);
  });
  it("should log a user in", async () => {
    const user = await request.post(`${TEST_BASE_URL}/auth/signin`).send({
      email: userDetails.email,
      password: userDetails.password,
    });
    expect(user.body.error).toBe(false);
    expect(user.body.email).toBe(userDetails.email);
  });
});
