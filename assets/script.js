const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Fleche Gauche/Droite 
// sélectionner l'élement
const left_arrow = document.querySelector(".arrow_left");
const right_arrow = document.querySelector(".arrow_right");

// Evenement auc Clique des fléches (event listene)

left_arrow.addEventListener("click", function() {
  console.log("Flèche gauche cliquée !");
});
right_arrow.addEventListener("click", function() {
  console.log("Flèche droite cliquée !");
});


