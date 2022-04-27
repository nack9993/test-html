const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const enter = document.getElementById("enter");

leftArrow.addEventListener("click", () => changeCard("left"));
rightArrow.addEventListener("click", () => changeCard("right"));

const cardList = ["n", "m", "p"];
let currentCard = 0;

enter.addEventListener("click", () => {
  const inputPassword = document.getElementById("password");
  console.log(inputPassword.value);
  console.log(cardList[currentCard]);

  if (String(inputPassword.value).toLowerCase() === cardList[currentCard]) {
    const card = document.getElementById("card");
    card.src = `/assets/${cardList[currentCard]}-charm.png`;

    const actions = document.getElementById("actions");
    actions.classList.add("disabled");
  } else {
    alert("Not correct");
  }
});

function changeCard(direction) {
  if (direction === "right") {
    if (currentCard < cardList.length - 1) {
      currentCard = currentCard + 1;
    } else {
      currentCard = 0;
    }
  }

  if (direction === "left") {
    if (currentCard == 0) {
      currentCard = 2;
    } else if (currentCard == 2) {
      currentCard = 1;
    } else if (currentCard == 1) {
      currentCard = 0;
    }
  }

  const card = document.getElementById("card");
  card.src = `/assets/${cardList[currentCard]}-key.png`;

  const inputPassword = document.getElementById("password");
  inputPassword.setAttribute("key", cardList[currentCard]);

  const actions = document.getElementById("actions");
  actions.classList.remove("disabled");
  console.log(inputPassword.getAttribute("key"));
}

$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");
  $("#follow-button").click(() => {
    window.location.href = "https://www.instagram.com/devilmonstergame/";
  });

  $("#contact").click(() => {
    window.location.href = "Contact.html";
  });
});
