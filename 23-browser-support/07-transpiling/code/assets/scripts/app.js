/******/ (function() { // webpackBootstrap
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
// NOTE: Code is NOW supported by a broad variety of browsers
// It was NOT back in 2019 when this lecture was published

const button = document.querySelector("button");
const textParagraph = document.querySelector("p");
button.addEventListener("click", () => {
  const text = textParagraph.textContent;

  // Simple feature detection; returns "undefined" (falsy) if NOT supported
  if (navigation) {
    // Copies paragraph text to clipboard
    navigator.clipboard.writeText(text).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
    console.log("Copied to clipboard...");
  } else {
    alert("Feature NOT available. Please copy manually.");
  }
});
/******/ })()
;
//# sourceMappingURL=app.js.map