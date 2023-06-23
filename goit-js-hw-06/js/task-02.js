const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const ulEl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
 const itemElem = document.createElement("li");
 itemElem.classList.add("item");
 itemElem.textContent = ingredient;
 ulEl.appendChild(itemElem);
});
console.log(ulEl);
