//Reference to DOM elements
const kasumi = document.querySelector("#kasumi");
const btn = document.querySelector("#btn");
const itungan = document.querySelector("#itungan")

//The two poping pict
const kirakiraimg = "./https://scontent.fsub1-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/102407877_885175825293763_9027030403347813712_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeEnQgVLvYj8uK8wbOu43NgbZhAwhiVTC_5mEDCGJVML_loNGz10wzmC0pSXIz4ILimGXluZTefC3wxrk_eKJEg1&_nc_ohc=RbkbzNLhNdwAX870iMC&_nc_ht=scontent.fsub1-1.fna&oh=fa4189b12f63e2c9b1513cb159381d1e&oe=61D3EA3A";
const dokidokiimg = "./https://scontent.fsub1-2.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/64819357_630258374118844_5520945386857955328_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=05277f&efg=eyJpIjoidCJ9&_nc_eui2=AeHqqfDSPaKLtRTjA5x9i5IfiPn6HXSxlB-I-foddLGUHxlA8EPIseU6yuBiQPT1Mj1b9ytTxXvIZva1M9g2qQpu&_nc_ohc=HuKjcUJAhr0AX8-W7NX&_nc_ht=scontent.fsub1-2.fna&oh=f467e78cf7d602ade8599238e08eec3b&oe=61D37F84";

//The two poping sound
const kirakirasound = new Audio("./before.mp3");
const dokidokisound = new Audio("./after.mp3");

//event handler
btn.addEventListener("mouseup", kirakira);
btn.addEventListener("mousedown", dokidoki);

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
	.play();
	
}
function dokidoki() {
	kasumi.src = dokidokiimg;
}
