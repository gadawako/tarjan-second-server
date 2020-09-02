const express = require("express");

console.log("Look at me, I'm a server!");

// Create an express app
const app = express();

// Server sstatic files from server/public
app.use(express.static("server/public"));
// Listen for requests
const port = 3000;
app.listen(port, function () {
  console.log("This is Gada Wako... I'm listening");
});
