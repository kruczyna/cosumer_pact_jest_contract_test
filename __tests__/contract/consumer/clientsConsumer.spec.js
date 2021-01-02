"use strict"

const { Matchers } = require("@pact-foundation/pact")
const { getKittens } = require("../../../src/consumer")


describe("Clients Service", () => {
    const GET_EXPECTED_BODY = [{
        "id": 1,
        "kittenName": "Zepsuszek",
        "furColor": "White and black",
        "age": 8,
    },
    {
        "id": 2,
        "kittenName": "Bubbles",
        "furColor": "Ginger",
        "age": 11,
    }]

    afterEach(() => provider.verify())

    describe("GET Kittens", () => {
        beforeEach(() => {
            const interaction = {
                state: "i have a list of kittens",
                uponReceiving: "get all available kittens",
                withRequest: {
                    method: "GET",
                    path: "/kittens",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                    },
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: GET_EXPECTED_BODY,
                },
            }
            return provider.addInteraction(interaction)
        })

        test("getKittens() returns expected body, header and statusCode", async() => {
            const response = await getKittens()
            expect(response.headers['content-type']).toBe("application/json; charset=utf-8")
            expect(response.data).toEqual(GET_EXPECTED_BODY)
            expect(response.status).toEqual(200)
        })
    })
})
