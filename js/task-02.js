const ingredients = [
 "Potatoes",
 "Mushrooms",
 "Garlic",
 "Tomatos",
 "Herbs",
 "Condiments",
];

const ulElem = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
 const itemElem = document.createElement("li");
 itemElem.classList.add("item");
 itemElem.textContent = ingredient;
 return ulElem.append(itemElem);
});

console.log(ulElem);
