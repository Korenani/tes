//Reference to DOM elements
var kasumi = document.querySelector("#kasumi");

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
	kasumi.src = kirakiraimg
	kirakirasound.play();
}
function dokidoki() {	
        kasumi.src = dokidokiimg
	itungan.innerHTML = score;
        score++;
}
