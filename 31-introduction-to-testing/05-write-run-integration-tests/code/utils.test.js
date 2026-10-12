// Native way of how Jest imports functions to be test
const { generateText, checkAndGenerate } = require("./util");

// Unit tests for the function "generateText()"
test("should output name and age", () => {
  // Double check test
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");

  const text2 = generateText("John Wick", 60);
  expect(text2).toBe("John Wick (60 years old)");
});

test("should output data-less text", () => {
  // Opposite check test
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

// Integration test for function "checkAndGenerate()" that is
// Dependent on functions "generateText()" & "validateInput()"
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});
