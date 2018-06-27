"use strict";

document.addEventListener('DOMContentLoaded', init);


function init() {

    document.getElementById('video').addEventListener('ended',relocateAfterEndVideo);


}



function relocateAfterEndVideo() {

    window.location = "https://arnoyan.github.io/Phylax/mainPage.html";

}




