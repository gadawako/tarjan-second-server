console.log("in client.js");

$(document).ready(onReady);

function onReady() {
  console.log("im ready");
  $.ajax({
    url: "/activities",
    method: "GET",
  })
    .then(function (activities) {
      console.log("we got a response!", activities);

      // Render the activites
      for (let activity of activities) {
        $("tbody").append(`
      <tr>
      <td>${activity.activity}</td>
      <td>${activity.isScreenTime}</td>
      <td>${activity.type}</td>
      </tr>
      `);
      }
    })
    .catch(function (errorInfo) {
      console.log("something bad hapened!", errorInfo);
      alert("server is down, try again later");
    });
}

// let activities;

// // AJAX!!!!!!!!
// $.ajax({
//   url: "/activities",
// }).then(function (activites) {
//   console.log("we got a response!", activities);

//   // Render the activites
//   for (let activity in activities) {
//     $("tbody").append(`
//     <tr>
//     <td>${activity.activity}</td>
//     <td>${activity.isScreenTime}</td>
//     <td>${activity.type}</td>
//     </tr>
//     `);
//   }
// });
