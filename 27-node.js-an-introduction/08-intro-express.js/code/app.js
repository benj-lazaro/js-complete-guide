const http = require("http");

// Create a local web server
const server = http.createServer((request, response) => {
  // Parse incoming HTTP request
  let body = [];

  // Setup an Event Listener for a "data" Event
  request.on("data", (dataChunk) => {
    body.push(dataChunk);
  });

  // Setup an Event Listener for an "end" Event
  request.on("end", () => {
    // Convert the received data chunk into a normal string
    body = Buffer.concat(body).toString();

    let userName = "Unknown User";
    if (body) {
      // Split the concatenated string by "=" & fetch the 2nd element
      userName = body.split("=")[1];
    }

    // Send HTTP response
    response.setHeader("Content-Type", "text/html");
    response.write(
      `<h1>Hello ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`,
    );
    response.end();
  });
});

// Starts the local web server & listen to incoming HTTP request via port 3000
server.listen(3000);
