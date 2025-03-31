const test = require("node:test");
const assert = require("node:assert");
const { fizzbuzz } = require("./fizzbuzz.js");

test("fizzbuzz(3)", () => {
  assert.strictEqual(fizzbuzz(3), "Fizz");
});
