const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const enter = document.getElementById("enter");

leftArrow.addEventListener("click", () => changeCard());
rightArrow.addEventListener("click", () => changeCard())

const cardList = ["n", "m", "p"];
let currentCard = 0;

enter.addEventListener("click", () => {
  const inputPassword = document.getElementById("password");
  console.log(inputPassword.value);

  const card = document.getElementById("card");
  card.src = `/assets/${cardList[currentCard]}-charm.png`;

  const actions = document.getElementById("actions");
  actions.classList.add("disabled");
});

function changeCard() {
  if (currentCard < cardList.length - 1) {
    currentCard = currentCard + 1;
  } else {
    currentCard = 0;
  }
  const card = document.getElementById("card");
  card.src = `/assets/${cardList[currentCard]}-key.png`;

  const inputPassword = document.getElementById("password");
  inputPassword.setAttribute("key", cardList[currentCard]);
  console.log(inputPassword.getAttribute("key"));
}

$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");

  $('#contact').click(() =>  {
    window.location.href = 'contact.html'
  })
});
