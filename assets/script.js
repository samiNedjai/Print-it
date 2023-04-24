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

// Image et texte slide carrousel
const slide_img = document.querySelector(".banner-img")
const slide_p = document.querySelector("p")

// Evenement au Clique des fléches (event listene)

left_arrow.addEventListener("click", function() {
  console.log("Flèche gauche cliquée !");
});
right_arrow.addEventListener("click",  slide_next) // appelle la fonction correspondante à chaque fleche (slide back/slide next)
  


// Variable pour suivre l'index des slide du carrousel
let count = 0

//  fonction changement de slide carrousel
function carrousel_update(count) {
	slide_img.src = "./assets/images/slideshow/" + slides[count].image
	slide_p.innerHTML = slides[count].tagLine
}
// Fonction flece suivant

function slide_next() {
	if (count < slides.length - 1) {
  	count++;
	} 
	else {
  	count = 0;
	}
	carrousel_update(count)
	console.log(count)
}