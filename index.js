// document.addEventListener("click",function(){

// });


document.querySelector(".navbar-toggler").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("toggle-color");
});

document.querySelector(".unmute").addEventListener("click", function () {
    document.querySelector(".unmute").classList.toggle("d-none");
    document.querySelector(".mute").classList.toggle("d-none");
    document.querySelector(".lap").muted = false;
});

document.querySelector(".mute").addEventListener("click", function () {
    document.querySelector(".mute").classList.toggle("d-none");
    document.querySelector(".unmute").classList.toggle("d-none");
    document.querySelector(".lap").muted = true;
});

document.querySelector(".theme-o").addEventListener("click", function () {
    document.querySelector(".theme-o").classList.toggle("d-none");
    document.querySelector(".theme-b").classList.toggle("d-none");
    document.querySelector(".navbar-toggler").classList.toggle("blue");
    document.querySelector(".navbar-toggler").classList.toggle("green");
});

document.querySelector(".theme-b").addEventListener("click", function () {
    document.querySelector(".theme-o").classList.toggle("d-none");
    document.querySelector(".theme-b").classList.toggle("d-none");
    document.querySelector(".navbar-toggler").classList.toggle("blue");
    document.querySelector(".navbar-toggler").classList.toggle("green");
});

document.querySelector(".theme-o").addEventListener("click", function () {
    for (i = 0; i < 15; i++) {
        document.querySelectorAll(".hero-btn")[i].classList.toggle("blue");
        document.querySelectorAll(".hero-btn")[i].classList.toggle("green");
        document.querySelectorAll(".nav-link")[i].classList.toggle("b");
        document.querySelectorAll(".nav-link")[i].classList.toggle("g");
    }
});

document.querySelector(".theme-b").addEventListener("click", function () {
    for (i = 0; i < 15; i++) {
        document.querySelectorAll(".hero-btn")[i].classList.toggle("blue");
        document.querySelectorAll(".hero-btn")[i].classList.toggle("green");
        document.querySelectorAll(".nav-link")[i].classList.toggle("b");
        document.querySelectorAll(".nav-link")[i].classList.toggle("g");
    }
});


document.querySelector(".theme-o").addEventListener("click", function () {
    for (i = 0; i < 4; i++) {
        document.querySelectorAll(".color")[i].classList.toggle("black");
        document.querySelectorAll(".color")[i].classList.toggle("orange");
    }
});

document.querySelector(".theme-b").addEventListener("click", function () {
    for (i = 0; i < 4; i++) {
        document.querySelectorAll(".color")[i].classList.toggle("black");
        document.querySelectorAll(".color")[i].classList.toggle("orange");
    }
});