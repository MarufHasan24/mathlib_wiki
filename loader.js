const loader = document.querySelectorAll(".loader")[0];
const falseBody = document.querySelectorAll(".body")[0];

window.onload = () => {
  function local() {
    falseBody.style.display = "block";
    loader.style.display = "none";
  }
  setTimeout(local, 4500);
};
