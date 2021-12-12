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

//event handler
addEventListener("touchstart", function(){
        prevenDefault()
        kirakira();
        
})
addEventListener("touchend", function(){
       prevenDefault()
       dokidoki();
       
})

//the function
function kirakira() {
	kasumi.src = kirakiraimg;
	kirakirasound.play();
        score++;
	itungan.innerHTML = score;
}
function dokidoki() {
	kasumi.src = dokidokiimg;
	
}
