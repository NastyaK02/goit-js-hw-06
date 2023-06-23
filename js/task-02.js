const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const ulElem = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
 const itemElem = document.createElement("li");
 itemElem.classList.add("item");
 itemElem.textContent = ingredient;
 ulElem.appendChild(itemElem);
});
console.log(ulElem);
