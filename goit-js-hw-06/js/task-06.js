const inputElem = document.querySelector("#validation-input");
const dataLength = inputElem.getAttribute("data-length");

inputElem.addEventListener("blur", () => {
 const inputLength = inputElem.value.length;

 if (inputLength === Number(dataLength)) {
  inputElem.classList.add("valid");
  inputElem.classList.remove("invalid");
 } else {
  inputElem.classList.add("invalid");
  inputElem.classList.remove("valid");
 }
});
