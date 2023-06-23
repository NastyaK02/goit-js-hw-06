const elemItem = document.querySelectorAll(".item");

console.log("Number of categories", elemItem.length);

elemItem.forEach((item) => {
 console.log(`Category:`, item.firstElementChild.textContent);
 console.log(`Elements:`, item.lastElementChild.length);
 console.log("");
});
