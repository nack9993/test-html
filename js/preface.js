// CHARACTER
const cloud = document.querySelectorAll("#cloud");
const fire = document.querySelectorAll("#fire");
const square = document.querySelectorAll("#square");

const elementArray = [cloud, fire, square];

const password = document.querySelectorAll(".password");
const enterButton = document.getElementById("enter");
const closeButton = document.getElementById("close");
const goButton = document.getElementById("go");
const characterModal = document.getElementById("character-modal");

$(document).ready(function () {
  $("#navbar").load("/components/navbar.html");
});

if (document.readyState === "complete") {
  console.log("GO");
  // The page is fully loaded
}

// SLIDER SECTION
const slider = [
  { id: "#slide1", imageId: "#paper1" },
  { id: "#slide2", imageId: "#paper2" },
  { id: "#slide3", imageId: "#paper3" },
];

slider.forEach(({ id }, index) => {
  $(id).click(() => {
    const clickedIndex = index + 1;

    $(`#slide${clickedIndex}`).addClass("active");

    slider.map((item, key) => {
      const childKey = key + 1;

      // Remove all the slide button that not active
      if (clickedIndex !== childKey) {
        $(`#slide${childKey}`).removeClass("active");
      }

      if (clickedIndex < childKey) {
        $(item.imageId).removeClass("active");
        return;
      }

      $(item.imageId).addClass("active");
    });
  });
});

let count = 0;
let elementList = [];

elementArray.forEach((element) => {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const isAlreadyActive = ele.classList.contains("active");

      if (isAlreadyActive) return;

      // If already have the active class
      // Remove it and take the element out
      // if (isAlreadyActive) {
      //   ele.classList.remove("active");

      //   count = count - 1;
      //   password[count].classList.remove("active");
      //   return;
      // }

      if (count >= 3) return;

      password[count].classList.add("active");
      elementList.push(ele.id);
      count = count + 1;
      ele.classList.add("active");
    });
  });
});

enterButton.addEventListener("click", () => {
  if (count < 3) return;

  const monster = getMonster(elementList);

  // OPEN MODAL
  const character = document.getElementById("character");
  character.src = `/assets/${monster}_character.png`;
  characterModal.classList.add("active");

  //RESET
  count = 0;
  elementList = [];
  resetPassword();
});

closeButton.addEventListener("click", () => {
  characterModal.classList.remove("active");
});

goButton.addEventListener("click", () => {
  window.location.href = 'Nland.html'
});

function resetPassword() {
  elementArray.forEach((element) => {
    element.forEach((ele) => {
      ele.classList.remove("active");
    });
  });

  password.forEach((pass) => {
    pass.classList.remove("active");
  });
}


function getMonster(answerList) {
  const result = {
    firstElement: "",
    cloud: 0,
    fire: 0,
    square: 0,
  };

  answerList.forEach((item, index) => {
    if (!index) {
      result.firstElement = item;
    }

    result[item] = result[item] + 1;
  });

  let selectedCharacter = "";

  if (result.cloud === 1 && result.fire === 1 && result.square === 1) {
    selectedCharacter = result.firstElement;
  }

  Object.entries(result).forEach((item) => {
    const [name, key] = item;

    if (key >= 2) {
      selectedCharacter = name;
      return;
    }
  });

  result.firstElement = "";
  result.cloud = 0;
  result.fire = 0;
  result.square = 0;

  return selectedCharacter;
}
