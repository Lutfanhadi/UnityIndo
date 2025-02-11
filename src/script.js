// sidebar
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


// Dark mode
//   document.addEventListener("DOMContentLoaded", () => {
//   let containerDarkMode = document.getElementById("containerDarkMode");
//   let toggleDarkMode = document.getElementById("toggleDarkMode");
//   let bgContent1 = document.getElementsByClassName("bgContent1");
//   let bgContent2 = document.getElementsByClassName("bgContent2")
//   let text = document.getElementsByClassName("textContent")

//   let darkMode = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M18 9C16.8065 10.1935 16.136 11.8122 16.136 13.5C16.136 15.1878 16.8065 16.8065 18 18C19.1935 19.1935 20.8122 19.864 22.5 19.864C24.1878 19.864 25.8065 19.1935 27 18C27 19.78 26.4722 21.5201 25.4832 23.0001C24.4943 24.4802 23.0887 25.6337 21.4442 26.3149C19.7996 26.9961 17.99 27.1743 16.2442 26.8271C14.4984 26.4798 12.8947 25.6226 11.636 24.364C10.3774 23.1053 9.5202 21.5016 9.17294 19.7558C8.82567 18.01 9.0039 16.2004 9.68509 14.5558C10.3663 12.9113 11.5198 11.5057 12.9999 10.5168C14.4799 9.52784 16.22 9 18 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M25 9V13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M27 11H23" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>`;

//   let lightMode = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M18 8V10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M18 26V28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M10.9299 10.93L12.3399 12.34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M23.6599 23.66L25.0699 25.07" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M8 18H10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M26 18H28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M12.3399 23.66L10.9299 25.07" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             <path d="M25.0699 10.93L23.6599 12.34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>`;


  
//   toggleDarkMode.addEventListener(("click"), () => {
//     let tampungDarkMOde = containerDarkMode.classList.contains("bg-darkmode-primary");

//     containerDarkMode.classList.toggle("bg-darkmode-primary");


//     toggleDarkMode.innerHTML = tampungDarkMOde ? darkMode : lightMode
  
//     for (let valuetext = 0 ; valuetext < text.length ; valuetext++){
//        text[valuetext].style.color = tampungDarkMOde ? "black" : "white";

//     }

//     for (let valueBg1 = 0; valueBg1 < bgContent1.length; valueBg1++) {
//       bgContent1[valueBg1].style.background = tampungDarkMOde ? "white" : "#374151";
//     }

//     for (let valueBg2 = 0; valueBg2 < bgContent2.length; valueBg2++) {
//       bgContent2[valueBg2].style.background = tampungDarkMOde ? "white" : "#26282e";
//     }


//   })

// })
 





// masih memplajari localstorage

document.addEventListener("DOMContentLoaded", () => {
  let containerDarkMode = document.getElementById("containerDarkMode");
  let toggleDarkMode = document.getElementById("toggleDarkMode");
  let bgnav = document.getElementsByClassName("bgnav");
  let bgContent1 = document.getElementsByClassName("bgContent1");
  let bgContent2 = document.getElementsByClassName("bgContent2");
  let text = document.getElementsByClassName("textContent");

  let darkMode = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9C16.8065 10.1935 16.136 11.8122 16.136 13.5C16.136 15.1878 16.8065 16.8065 18 18C19.1935 19.1935 20.8122 19.864 22.5 19.864C24.1878 19.864 25.8065 19.1935 27 18C27 19.78 26.4722 21.5201 25.4832 23.0001C24.4943 24.4802 23.0887 25.6337 21.4442 26.3149C19.7996 26.9961 17.99 27.1743 16.2442 26.8271C14.4984 26.4798 12.8947 25.6226 11.636 24.364C10.3774 23.1053 9.5202 21.5016 9.17294 19.7558C8.82567 18.01 9.0039 16.2004 9.68509 14.5558C10.3663 12.9113 11.5198 11.5057 12.9999 10.5168C14.4799 9.52784 16.22 9 18 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 9V13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27 11H23" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

  let lightMode = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 8V10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 26V28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9299 10.93L12.3399 12.34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.6599 23.66L25.0699 25.07" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 18H10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M26 18H28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.3399 23.66L10.9299 25.07" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.0699 10.93L23.6599 12.34" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

  // Cek di localStorage apakah dark mode sudah aktif



  if (localStorage.getItem("darkMode") === "enabled") {
    aktifkanDarkMode();
  }


  toggleDarkMode.addEventListener("click", () => {
    if (containerDarkMode.classList.contains("bg-darkmode-primary")) {
      nonaktifkanDarkMode();
    } else {
      aktifkanDarkMode();
    }
  });

  function aktifkanDarkMode() {
    containerDarkMode.classList.add("bg-darkmode-primary");
    toggleDarkMode.innerHTML = lightMode;
    localStorage.setItem("darkMode", "enabled");

    for (let valuetext = 0; valuetext < text.length; valuetext++) {
      text[valuetext].style.color = "white";
    }

    for (let valueBgNav = 0; valueBgNav < bgnav.length; valueBgNav++) {
      bgnav[valueBgNav].style.background = "#374151";
    }

    for (let valueBg1 = 0; valueBg1 < bgContent1.length; valueBg1++) {
      bgContent1[valueBg1].style.background = "#374151";
    }

    for (let valueBg2 = 0; valueBg2 < bgContent2.length; valueBg2++) {
      bgContent2[valueBg2].style.background = "#26282e";
    }
  }

  function nonaktifkanDarkMode() {
    containerDarkMode.classList.remove("bg-darkmode-primary");
    toggleDarkMode.innerHTML = darkMode;
    localStorage.setItem("darkMode", "disabled");

    for (let valuetext = 0; valuetext < text.length; valuetext++) {
      text[valuetext].style.color = "black";
    }

    for (let valueBgNav = 0; valueBgNav < bgnav.length; valueBgNav++) {
      bgnav[valueBgNav].style.background = "white";
    }

    for (let valueBg1 = 0; valueBg1 < bgContent1.length; valueBg1++) {
      bgContent1[valueBg1].style.background = "#f3f4f6";
    }

    for (let valueBg2 = 0; valueBg2 < bgContent2.length; valueBg2++) {
      bgContent2[valueBg2].style.background = "white";
    }
  }

});

console.log(localStorage)
