document.querySelector(".unmute").addEventListener("click",function(){
    document.querySelector(".unmute").classList.toggle("d-none");
    document.querySelector(".mute").classList.toggle("d-none");
    document.querySelector(".lap").muted = false;
});

document.querySelector(".mute").addEventListener("click",function(){
    document.querySelector(".mute").classList.toggle("d-none");
    document.querySelector(".unmute").classList.toggle("d-none");
    document.querySelector(".lap").muted = true;
});