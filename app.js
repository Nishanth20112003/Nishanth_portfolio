let menu_icon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let close_icon = document.querySelector(".close-icon");
let navlink_sidebar = document.querySelectorAll(".nav-link-sidebar");
menu_icon.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
});
close_icon.addEventListener("click", () => {
  sidebar.classList.add("hidden");
});
navlink_sidebar.forEach((item) => {
  item.addEventListener("click", () => {
    sidebar.classList.add("hidden");
  });
});
let loader = document.getElementById(".loader");
let name_input = document.querySelector(".name-input");
let email_input = document.querySelector(".email-input");
let message_input = document.querySelector(".message-input");
let number_input = document.querySelector(".number-input");
let form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // event.preventDefault();
 
});
