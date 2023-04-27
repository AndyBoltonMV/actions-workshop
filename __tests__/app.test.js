const request = require("supertest");
const app = require("../src/app.js");

describe("app endpoint tests", () => {
  it("should have get on /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });

  it("should have post on /", async () => {
    const res = await request(app).post("/").send({ data: "Steve" });
    expect(res.body).toEqual({ msg: "Steve" });
  });
});
