 document.addEventListener("DOMContentLoaded", function () {
   let toggleMenu = document.getElementById("toggleMenu");
   let toggleClose = document.getElementById("toggleClose");
   let containerMenu = document.getElementById("containerMenu");

   toggleMenu.addEventListener("click", () => {
     containerMenu.classList.toggle("-translate-x-full");
   });

   toggleClose.addEventListener("click", () => {
     containerMenu.classList.toggle("-translate-x-full");
   });
 });

