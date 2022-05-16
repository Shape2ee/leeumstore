function openNav() {
  let sideNav = document.querySelector("aside");
  sideNav.classList.toggle("open");
}

function darkMode() {
  let body = document.body;
  body.classList.toggle("dark");

  let button = document.getElementById("theme_btn");
  if (button.innerHTML == "light mode") {
    button.innerHTML = "dark mode";
  } else {
    button.innerHTMl = "light mode";
  }
}
