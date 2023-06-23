const inputElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

inputElem.addEventListener("input", oninput);

function oninput(evt) {
 const fontSize = inputElem.value + "px";
 textElem.style.fontSize = fontSize;
}
