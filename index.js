let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  nav.classList.remove("active");
};

const typed = new typed (".Multiple", {
  strings: ['fitness','bodybuilding','Cardio','Martail art','CrossFit','Power Lifting'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
