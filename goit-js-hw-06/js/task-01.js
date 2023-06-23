const categoriesList = document.querySelector("#categories");
const elemItem = document.querySelectorAll(".item");

console.log("Number of categories", elemItem.length);

elemItem.forEach(function (item) {
 const categoryTitle = item.querySelector("h2").textContent;
 const categoryItemsCount = item.querySelectorAll("li").length;

 console.log(`Category: ${categoryTitle}`);
 console.log(`Elements: ${categoryItemsCount}`);
});
