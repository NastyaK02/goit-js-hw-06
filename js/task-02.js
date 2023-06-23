const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const ulEl = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
 const itemElem = document.createElement("li");
 itemElem.classList.add("item");
 itemElem.textContent = ingredient;
 return ulEl.append(itemElem);
});

console.log(ulEl);
