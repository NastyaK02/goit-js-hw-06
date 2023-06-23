const userName = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

userName.addEventListener("input", (event) => {
 if (userName.value) {
  return (spanElem.textContent = event.currentTarget.value);
 }
 return (spanElem.textContent = "Anonymous");
});
