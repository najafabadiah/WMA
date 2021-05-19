const root = document.querySelector("#root");
const fontIncreaseBtn = document.querySelector("#font-increase-button");
const fontDecreaseBtn = document.querySelector("#font-decrease-button");

fontIncreaseBtn.addEventListener("click", function(){
	root.style.fontSize = "150%";
});

fontDecreaseBtn.addEventListener("click", function(){
	root.style.fontSize = "100%";
});