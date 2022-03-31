const clickcard = document.getElementById("clickcard");
const enter = document.getElementById("enter");

// clickcard.addEventListener("click", () => changeCard());

const cardList = ["n", "m", "p"];
let currentCard = 0;

enter.addEventListener("click", () => {
  const inputPassword = document.getElementById("password");
  console.log(inputPassword.value);

  const card = document.getElementById("card");
  card.src = `/assets/${cardList[currentCard]}-charm.png`;

  const actions = document.getElementById('actions');
  actions.classList.add('disabled')
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
