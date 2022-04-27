$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");

  const result = localStorage.getItem("m-land");

  // IF WIN
  if (result === "win") {
    $("#result").attr("src", "/assets/m-land-win.png");
    $("#bg").attr("src", "/assets/bg-m-land-win.png");
    $("#lose-button").hide();

    $("#win-button").click(() => {
      window.location.href = "PLand.html";
    });
  }

  if (result === "lose-1") {
    // IF LOSE 1
    $("#result").attr("src", "/assets/m-land-lose-1.png");
    $("#bg").attr("src", "/assets/bg-m-land-lose.png");
    $("#win-button").hide();
    $("#lose-button").click(() => {
      window.location.href = "MLand.html";
    });
  }

  if (result === "lose-2") {
    // IF LOSE 2
    $("#result").attr("src", "/assets/m-land-lose-2.png");
    $("#bg").attr("src", "/assets/bg-m-land-lose.png");
    $("#win-button").hide();
    $("#lose-button").click(() => {
      window.location.href = "MLand.html";
    });
  }
});
