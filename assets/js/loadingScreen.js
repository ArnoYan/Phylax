"use strict";

document.addEventListener('DOMContentLoaded', init);


function init() {

    document.getElementById('video').addEventListener('ended',relocateAfterEndVideo);


}



function relocateAfterEndVideo() {

    window.location = "http://localhost:63342/Pieterfl/mainPage.html";

}




