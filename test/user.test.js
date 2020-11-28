const supertest = require("supertest");
const app = require("../index");
const { TEST_BASE_URL } = require("./constants");
const testInit = require("./testInit");
const request = supertest(app);

afterAll(async () => {
  await testInit.tearDown();
});

describe("User Test", () => {
  it("should create a new user", async () => {
    const user = await request.post(`${TEST_BASE_URL}/auth/signup`).send({
      email: "mailstoeze@gmail.com",
      name: "Peter",
      password: "Password",
    });
    expect(user.body.error).toBe(false);
    expect(user.body.data.email).toBe("mailstoeze@gmail.com");
  });
});
