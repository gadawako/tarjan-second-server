const express = require("express");

console.log("Look at me, I'm a server!");

// Create an express app
const app = express();

// Server sstatic files from server/public
app.use(express.static("server/public"));

// Define a lsit of actibies for my kid
let activities = [
  {
    acitvites: "typing practice",
    isScreenTime: true,
    type: "Mind Exercises",
  },
  {
    acitvites: "Bike around the lake",
    isScreenTime: false,
    type: "Body Break",
  },
  {
    activites: "FB chat with a friend",
    isScreenTime: true,
    type: "Social",
  },
];

// Endpoint:
// Get /activities
// Rrespond with a list of activities
app.get("/activities", function (req, res) {
  // Send back the array of activities
  res.send(activities);
});
// Listen for requests
const port = 3000;
app.listen(port, function () {
  console.log("This is Gada Wako... I'm listening");
});
