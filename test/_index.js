const { expect } = require("chai");
const {display, getpoke, dig} = require("../index.js")

describe("pokemon zukan", () => {
    it("should be function display()", () => {
        expect(typeof display).to.equal("function");
    })
    it("should be function getPoke()", () => {
        expect(typeof getpoke).to.equal("function");
    })
    it("should be function dig()", () => {
        expect(typeof dig).to.equal("function");
    })
})