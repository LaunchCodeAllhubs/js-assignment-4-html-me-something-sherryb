let wasClicked = false;

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Content Loaded");
    window.alert("Warning. You are about to see something very cool.")

    addListeners();
});

function garblePage() {

    let audio = new Audio("sounds/sm64_bowser_laugh.mp3")
    audio.play()

    const mainNode = document.querySelector("body");
    mainNode.style.visibility = "hidden";

    let images = document.querySelectorAll("img")
    images.forEach((image) => { 
        image.style.height = 0;
        image.style.width = 0;
    });

    const ohno = document.getElementById(("ohno"));
    ohno.style.visibility = "visible";
    ohno.style.height = "1920px";
    ohno.style.width = "1080px";
    
}

function addListeners() {

    const footerImage = document.getElementById("feet");
    footerImage.addEventListener("click", (event) => {
        window.alert("FEET")
    });

    const img00 = document.getElementById("img00");
    img00.addEventListener("click", (event) => {
        window.alert("boop")
    });

    const img01 = document.getElementById("img01");
    img01.addEventListener("click", (event) => {
        window.alert("he is perfect")
    })

    const ohno = document.getElementById(("ohno"));
    ohno.style.visibility = "hidden"
    ohno.style.width = 0;
    ohno.style.height = 0;

    const img05 = document.getElementById("img05");
    img05.addEventListener("click", (event) => {
        if (!wasClicked) {
            window.alert("do not click this photo");
            wasClicked = true;
        } else {
            window.alert("You shouldn't have done that");
            garblePage();
        }
    })

};

