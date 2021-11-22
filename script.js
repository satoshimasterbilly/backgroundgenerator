/*var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("Random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

unction getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);*/



var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.querySelector(".random1");
var random2 = document.querySelector(".random2");

// Colour inputs match the background generated on the first page load
// Display the initial CSS linear gradient property on page load
window.onload = init;

function init() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	random1.value = "#ff0000";
	random2.value = "#ffff00";

	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// Input gradient color
function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// Random gradient colors
function setRandomGradient() {
	if (event.target === random1) {
		random1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
		color1.value = random1.value;
	} else if (event.target === random2) {
		random2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
		color2.value = random2.value;
	}

	body.style.background =
	"linear-gradient(to right, "
	+ random1.value
	+ ", "
	+ random2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// Callback functions and event listeners
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random1.addEventListener("click", setRandomGradient);

random2.addEventListener("click", setRandomGradient);
