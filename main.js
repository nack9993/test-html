const toggle = document.getElementById("toggleMenu");
const start = document.getElementById("start");

const route = {
  home: "/",
  preface: "landing",
  nLand: "nLand",
  mLand: "mLand",
  pLand: "pLand",
  summary: "summary",
  contact: "contact",
};

let isOpen = false;

if (toggle) {
  toggle.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    const navModal = document.getElementById("nav-modal");
    isOpen = !isOpen;

    if (isOpen) {
      toggleMenu.src = "assets/x.png";
      nav.style.pointerEvents = "all";
      navModal.classList.add("active");
    } else {
      toggleMenu.src = "assets/lll.png";
      nav.style.pointerEvents = "none";
      navModal.classList.remove("active");
    }
  });
}

if (start) {
  start.addEventListener("click", () => {
    window.location.href = `${route["preface"]}.html`;
  });
}
