const a = document.querySelectorAll("a");

for (let i = 0; i < a.length; i++) {
  if (a[i].dataset.target === "blank" || !a[i].dataset.target) {
    a[i].target = "_blank";
  }
}
