const express = require("express");
const bodyParser = require("body-parser");

console.log("Look at me, I'm a server!");

// Create an express app
const app = express();

// Server sstatic files from server/public
app.use(express.static("server/public"));

// Setup body parker
app.use(bodyParser.urlencoded({ extended: true }));

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

// Endpoint
// POST /activities
// Create a new activity
// and add it to our activities array
app.post("/activities", function (req, res) {
  let newActivity = null;

  // Add the new activity to our list of activities
  activites.push(newActivity);
  res.send(newActivity);
});

// Listen for requests
const port = 3000;
app.listen(port, function () {
  console.log("This is Gada Wako... I'm listening");
});
