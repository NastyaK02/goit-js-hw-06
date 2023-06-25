const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const elemList = ingredients.map((ingredient) => {
 const itemElem = document.createElement("li");
 itemElem.classList.add("item");
 itemElem.textContent = ingredient;
 return itemElem;
});
ulEl.append(...elemList);
console.log(ulEl);
