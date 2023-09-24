//copy btn
function copyBtn(elem) {
  //create button
  let btn = document.createElement("button");
  btn.innerHTML = "Copy";
  btn.setAttribute("class", "cpy-btn");
  elem.appendChild(btn);
  //select text
  btn.addEventListener("click", function () {
    let copyText = elem.getElementsByTagName("code")[0];
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        copyText.innerHTML.replace(
          /\<span\sclass="index"\>\d+?\<\/span\>|\<.*?\>/g,
          ""
        )
      );
      alert("Copied to clipboard");
    } else {
      alert("Sorry, your browser doesn't support copying to clipboard");
    }
  });
}
