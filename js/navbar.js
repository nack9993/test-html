const toggle = document.getElementById("toggleMenu");

let isOpen = false;

if (toggle) {
  toggle.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    const navModal = document.getElementById("nav-modal");
    isOpen = !isOpen;

    if (isOpen) {
      toggleMenu.src = "assets/x-icon.png";
      nav.style.pointerEvents = "all";
      navModal.classList.add("active");
    } else {
      toggleMenu.src = "assets/menu-icon.png";
      nav.style.pointerEvents = "none";
      navModal.classList.remove("active");
    }
  });
}

const Routes = $(".nav-list a");
Routes.each((_, value) => {
  if (value.href === $(location).attr("href")) {
    $(value).addClass("active");
  }
});
