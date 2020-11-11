var GameOver = false;
var R;
var G;
var B;
var correctColorH1;
var correctBoxNum;
var correctBox;
var Mode = "hard"; //Initiating with HARD MODE

document.querySelector(".modes .levels ." + Mode).classList.add("current"); 

function generateGame(){
	R = Math.floor((Math.random() * 255) + 1);
	console.log(R);
	G = Math.floor((Math.random() * 255) + 1);
	console.log(G);
	B = Math.floor((Math.random() * 255) + 1);
	console.log(B);	
	
	correctColorH1 = document.querySelector(".header h1");
	correctColorH1.textContent = `RGB(${R}, ${G}, ${B})`;

	AssignColorsToBoxes();
}

function AssignColorsToBoxes(){
	if(Mode == "easy"){
		correctBoxNum = Math.floor((Math.random() * 3) + 1);
		document.querySelector(".color-boxes .r2").style.display = "none";
	}
	else{
		correctBoxNum = Math.floor((Math.random() * 6) + 1);
		document.querySelector(".color-boxes .r2").style.display = "flex";
	}

	correctBox = document.querySelector(".color-boxes .row .box" + correctBoxNum);
	console.log(correctBoxNum);

	correctBox.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;

	for(var i=1; i<=6 ; i++){
		if(i != correctBoxNum){
			document.querySelector(".color-boxes .row .box" + i).style.backgroundColor = `rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)})`
		}
	}
}

function toggleMode(el1, el2){
	playAgain();
	Mode = el1;
	document.querySelector(".modes .levels ." + Mode).classList.add("current");
	document.querySelector(".modes .levels ." + el2).classList.remove("current");
	AssignColorsToBoxes();
}

function fadeOut(el){
	if(GameOver){
		return;
	}
	if(el == correctBoxNum){
		document.querySelector(".modes .try").textContent = `Correct!`;
		for(var i=1; i<=6 ; i++){
			document.querySelector(".color-boxes .row .box" + i).style.opacity = "1";
			document.querySelector(".color-boxes .row .box" + i).style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
		}
		document.querySelector(".modes .again span").textContent = `Play Again?`;
		GameOver = true;
	}
	else{
		document.querySelector(".modes .try").textContent = `Try Again!`;
		document.querySelector(".color-boxes .row .box" + el).style.opacity = "0";
	}
}

function playAgain(){
	GameOver = false;
	document.querySelector(".modes .again span").textContent = `NEW COLORS`;
	document.querySelector(".modes .try").textContent = ``;	
	for(var i=1; i<=6 ; i++){
			document.querySelector(".color-boxes .row .box" + i).style.opacity = "1";
	}
	generateGame();
}

generateGame(); //START THE GAME
