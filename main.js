const toggle = document.getElementById("toggleMenu");

console.log(window.location.pathname);

window.location.href = "/somewhere/else";
// HACKY
const path = window.location.pathname;

let isOpen = false;

toggle.addEventListener("click", () => {
  const navModal = document.getElementById("nav-modal");
  isOpen = !isOpen;

  if (isOpen) {
    toggleMenu.src = "assets/x.png";
    navModal.classList.add("active");
  } else {
    toggleMenu.src = "assets/lll.png";
    navModal.classList.remove("active");
  }
});
