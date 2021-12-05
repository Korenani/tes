//Reference to DOM elements
const kasumi = document.querySelector("#kasumi");
const btn = document.querySelector("#btn");
const itungan = document.querySelector("#itungan")

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
addEventListener("touchend", function(e) {
    e.preventDefault();
    kirakira();
})
addEventListener("touchstart", function(e) {
    e.preventDefault();
    dokidoki();
})

//the function
function kirakira() {
	kasumi.src = kirakiraimg;
	kirakirasound.play();
	
}
function dokidoki() {
	kasumi.src = dokidokiimg;
}
