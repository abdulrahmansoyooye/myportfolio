const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

// select your navigation bar and the links inside it
const navbar = document.querySelector("nav");
const links = navbar.querySelectorAll("a");

// add click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });
});

// add click event listener to document object
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target)) {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }
});
