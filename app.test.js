import app from "./app.js";
import supertest from "supertest";
import { describe, expect, test } from "@jest/globals";

describe("POST /api/v1/users:", () => {
  describe("[+] Given a valid user account include email and password", () => {
    test("Should response with a 200 status code", async () => {
      const response = await supertest(app).post("/api/v1/users").send({
        email: "email",
        password: "password",
      });

      expect(response.statusCode).toBe(200);
    });

    test("Should specify json in the content type header", async () => {
      const response = await supertest(app).post("/api/v1/users").send({
        email: "email",
        password: "password",
      });

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });
  });
});
