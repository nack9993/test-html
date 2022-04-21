$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");

  // // IF WIN
  $("#result").attr("src", "/assets/p-land-win.png");
  $("#bg").attr("src", "/assets/bg-p-land-win.png");
  $("#lose-button").hide();

  $("#win-button").click(() => {
    window.location.href = "Summary.html";
  });

  // // IF LOSE 1
  // $("#result").attr("src", "/assets/p-land-lose-1.png");
  // $("#bg").attr("src", "/assets/bg-p-land-lose.png");
  // $("#win-button").hide();
  // $("#lose-button").click(() => {
  //   console.log("Hi");
  // });

  // IF LOSE 2
  // $("#result").attr("src", "/assets/p-land-lose-2.png");
  // $("#bg").attr("src", "/assets/bg-p-land-lose.png");
  // $("#win-button").hide();
  // $("#lose-button").click(() => {
  //   console.log("Hi");
  // });
});
