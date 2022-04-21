$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");
  // IF WIN
  $("#result").attr("src", "/assets/m-land-win.png");
  $("#bg").attr("src", "/assets/bg-m-land-win.png");
  $("#lose-button").hide();

  $("#win-button").click(() => {
    console.log("Hi");
  });

  // // IF LOSE 1
  // $("#result").attr("src", "/assets/m-land-lose-1.png");
  // $("#bg").attr("src", "/assets/bg-m-land-lose.png");
  // $("#win-button").hide();
  // $("#lose-button").click(() => {
  //   console.log("Hi");
  // });

  // // IF LOSE 2
  // $("#result").attr("src", "/assets/m-land-lose-2.png");
  // $("#bg").attr("src", "/assets/bg-m-land-lose.png");
  // $("#win-button").hide();
  // $("#lose-button").click(() => {
  //   console.log("Hi");
  // });
});
