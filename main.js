//Reference to DOM elements
var kasumi = document.querySelector("#kasumi");
const btn = document.querySelector("#btn");
var itungan = document.querySelector("#score")
var score = 0;

//The two poping pict
const kirakiraimg = "./bp.png";
const dokidokiimg = "./ap.png";

//The two poping sound
const kirakirasound = new Audio("./before.mp3");
const dokidokisound = new Audio("./after.mp3");

//event handler
addEventListener("mouseup", kirakira);
addEventListener("mousedown", dokidoki);

//Touchevent
addEventListener("touchstart", function(e){
        prevenDefault()
        kirakira(e);
        
});
addEventListener("touchend", function(e){
       prevenDefault()
       dokidoki(e);
       
});

//the function
function kirakira() {
	kasumi.src = dokidokiimg;
	kirakirasound.play();
}
function dokidoki() {	
	itungan.innerHTML = score;
        score++;
}
