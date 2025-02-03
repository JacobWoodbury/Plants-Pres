
document.getElementById("previous").onclick = function(){prevSlide();}
document.getElementById("next").onclick = function(){nextSlide();} 
let container = document.getElementById("slide-container");
let voice = document.getElementById("voice");
let slide = document.createElement("img");
let clearMe = document.getElementById("clearMe");
let collection = ["titleSlide.png","one.png", "two.png", "three.png", "four.png", "five.png", "six.png", "seven.png", "biblio.png" ];
let audioCollection = ["introAudio.mp3","one.mp3", "two.mp3", "three.mp3", "four.mp3", "five.mp3", "six.mp3", "seven.mp3"]
let currentSlide = -1;
//ok

function nextSlide(){
clearMe.innerHTML = "";
if(currentSlide >= collection.length -1){
    currentSlide = 0;
}else{
    currentSlide++;
}
slide.src = collection[currentSlide];
slide.alt="";
container.appendChild(slide);
voice.src =audioCollection[currentSlide];
}
function prevSlide(){
   
    if(currentSlide < 1){
        currentSlide = collection.length-1;
    }else{
        currentSlide--;
    }
    slide.src = collection[currentSlide];
    slide.alt ="Slide"
    container.appendChild(slide);
    voice.src =audioCollection[currentSlide];
}