$(window).on('load', function (e) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("page").style.display = "block";
})
  
$(document).ready(function () {
  $("#loading").load("/components/loading.html");
});

function checkLoading() {
//   document.getElementById("loading").style.display = "none";
//   document.getElementById("page").style.display = "block";
}
