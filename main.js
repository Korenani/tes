//Reference to DOM elements
const kasumi = document.querySelector("#kasumi");
const btn = document.querySelector("#btn");

//The two poping pict
const kirakiraimg = "./bp.png";
const dokidokiimg = "./ap.png";

//The two poping sound
const kirakirasound = new Audio("./before.mp3");
const dokidokisound = new Audio("./after.mp3");

//event handler
btn.addEventListener("mousedown", dokidoki);
btn.addEventListener("mouseup", kirakira);

//event handler
btn.addEventListener("touchstart", function(e){
	e.prevenDefault();
	dokidoki();
})
btn.addEventListener("touchend", function(e){
	e.prevenDefault();
	kirakira();
})
//the function
function kirakira() {
	kasumi.src = kirakiraimg;
	kirakirasound.play();
}
function dokidoki() {
	kasumi.src = dokidokiimg;
}

