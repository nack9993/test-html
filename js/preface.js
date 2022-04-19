// PAPER
const paper2 = document.getElementById("paper2");
const paper3 = document.getElementById("paper3");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

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

slide1.addEventListener("click", (e) => {
  slide1.classList.add("active");
  slide2.classList.remove("active");
  slide3.classList.remove("active");

  paper2.classList.remove("active");
  paper3.classList.remove("active");
});

slide2.addEventListener("click", (e) => {
  slide1.classList.remove("active");
  slide2.classList.add("active");
  slide3.classList.remove("active");

  paper2.classList.add("active");
  paper3.classList.remove("active");
});

slide3.addEventListener("click", (e) => {
  slide1.classList.remove("active");
  slide2.classList.remove("active");
  slide3.classList.add("active");

  paper2.classList.add("active");
  paper3.classList.add("active");
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
  console.log(elementList);

  let firstElement = "";
  let cloud = 0;
  let fire = 0;
  let square = 0;

  elementList.forEach((item, index) => {
    if (!index) {
      firstElement = item;
    }

    if (item === "cloud") {
      cloud = cloud + 1;
    }

    if (item === "fire") {
      fire = fire + 1;
    }

    if (item === "square") {
      square = square + 1;
    }
  });

  console.log(cloud, fire, square);

  let selectedCharacter = "";

  if (cloud === 1 && fire === 1 && square === 1) {
    selectedCharacter = firstElement;
  }

  if (cloud >= 2) {
    selectedCharacter = "cloud";
  }

  if (fire >= 2) {
    selectedCharacter = "fire";
  }

  if (square >= 2) {
    selectedCharacter = "square";
  }

  console.log(selectedCharacter);

  // OPEN MODAL
  const character = document.getElementById("character");
  character.src = `/assets/${selectedCharacter}_character.png`;
  characterModal.classList.add("active");

  //RESET
  firstElement = "";
  cloud = 0;
  fire = 0;
  square = 0;
  count = 0;
  elementList = [];
  selectedCharacter = "";
  resetPassword();
});

closeButton.addEventListener("click", () => {
  characterModal.classList.remove("active");
});

goButton.addEventListener("click", () => {
  console.log("Go");
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

function checkLoading() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}
