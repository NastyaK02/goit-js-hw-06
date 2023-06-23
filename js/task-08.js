const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onsubmit);

function onsubmit(evt) {
 evt.preventDefault();
 const { email, password } = evt.currentTarget.elements;

 const userInfo = {
  emailUser: email.value,
  passwordUser: password.value,
 };

 if (email.value === "" || password.value === "") {
  return alert("Please fill in all the fields!");
 }
 console.dir(userInfo);
 evt.currentTarget.reset();
}
