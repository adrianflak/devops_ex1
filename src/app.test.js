const { describe } = require("node:test")
const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("Wynik testu:", async () => {
        const response = await request.get("/test")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Witaj Adrian!")
    })
})