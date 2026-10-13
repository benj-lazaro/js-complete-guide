// Import Puppeteer
const puppeteer = require("puppeteer");

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

// End-to-end test
test("should create an element with text and correct class", async () => {
  // Launch a browser instance
  const browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 80,
    // args: ["--window-size=1024,768"],
  });

  try {
    // Launch a browser window
    const page = await browser.newPage();

    // Loads the web app
    await page.goto(
      "http://127.0.0.1:5500/31-introduction-to-testing/06-write-run-e2e-tests/code/index.html",
    );

    // Input test data
    await page.click("input#name");
    await page.type("input#name", "John Wick");
    await page.click("input#age");
    await page.type("input#age", "60");
    await page.click("#btnAddUser");

    // Fetch returned data
    const finalText = await page.$eval(".user-item", (el) => el.textContent);

    // Check returned data
    expect(finalText).toBe("John Wick (60 years old)");
  } finally {
    // Gracefully close the browser
    browser.close();
  }
}, 10000);
