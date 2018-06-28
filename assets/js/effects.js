"use strict";

document.addEventListener('DOMContentLoaded', init);


function init() {

    document.addEventListener("mousewheel", fadeIn);


    for (let i = 0; i < document.querySelectorAll("#songs iframe").length; i++){

        document.querySelectorAll("#songs iframe")[i].addEventListener("mouseover",stopAnimation);
        document.querySelectorAll("#songs iframe")[i].addEventListener("click",stopAnimation);

    }


}





function fadeIn(e){

    document.getElementById("about").classList.add("fadeInLeft");
    document.getElementById("about").classList.add("animated");


}



function stopAnimation(e) {

    e.target.classList.toggle("pulse");
    e.target.classList.toggle("animated");
    e.target.classList.toggle("infinite");


}