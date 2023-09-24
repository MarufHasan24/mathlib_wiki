let navbtn = document.getElementById("navbtn"),
  sidebar = document.getElementById("sidebar"),
  section = document.querySelectorAll("section")[0];
navbtn.addEventListener("click", function () {
  if (sidebar.classList.contains("opend")) {
    sidebar.className = "hide";
    navbtn.innerHTML = "&#9776;";
    if (window.innerWidth > 750) section.style.transform = "translateX(0)";
  } else {
    sidebar.className = "opend";
    navbtn.innerHTML = "&times;";
    if (window.innerWidth > 750) section.style.transform = "translateX(100px)";
  }
});
