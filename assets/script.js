// Tableau slides
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

left_arrow.addEventListener("click", Slide_back ) //  appelle la fonction correspondante slide back
right_arrow.addEventListener("click",  Slide_next) // appelle la fonction correspondante slide next
 
// division des dots
const dots_div = document.querySelector(".dots")
// Boucle qui crée les dots ("i" est une variable choisie par convention 
// pour représenter l'indice ou l'index d'un élément dans un tableau)
for (let i = 0; i < slides.length; i++) {
		// crée un point de navigatioçn "dot"
	const dot = document.createElement("div") 
		// applique les proprieter CSS au "dot"
	dot.className = "dot"
		// ajoute le dot a la div conteneur des dot dans le HTML en tant que enfant 
	dots_div.appendChild(dot)
		// fait appelle à la fonction Carrousel_update pour rendre les dots cliquable
	dot.addEventListener('click',() => { Carrousel_update (count, i) })
}

// Sélection points de navigation
const dots = document.querySelectorAll(".dot")
dots[0].classList.add("dot_selected")

// Variable pour suivre l'index des slide du carrousel
let count = 0

//  fonction changement de slide carrousel
function Carrousel_update(count_back,count_add) {
	count = count_add
	slide_img.src = `./assets/images/slideshow/${slides[count_add].image}`
	slide_p.innerHTML = slides[count_add].tagLine
	dots[count_back].classList.remove("dot_selected")
	dots[count_add].classList.add("dot_selected")
}

// Fonction fleche suivant

function Slide_next() {
	// let count_add;
	if (count < slides.length - 1) {
		count_add = count + 1;
	} 
	else {
		count_add = 0;
	}
	Carrousel_update(count, count_add )
	 console.log(count)
}
// Fonction fleche précédant 

function Slide_back() {
	if (count === 0) {
		count_back = slides.length -1
	} 
	else {
		count_back = count-1
	}
	Carrousel_update(count,count_back)
	console.log(count)
}
