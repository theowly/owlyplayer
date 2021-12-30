const owlyPlayer = new Plyr('#owlyplayer');

let owlyYTblocker = document.getElementById("owlyplayer-ytblocker");
let owlyposter = document.getElementsByClassName("plyr__poster");
let owlyposterImg;

function posterowly() {
    if (typeof owlyposterImg === 'undefined') {
        owlyposterImg = owlyposter[0].style.backgroundImage.slice(4, -1).replace(/"/g, "");
        owlyYTblocker.style.backgroundImage = "url('" + owlyposterImg + "')"; 
    }  
}

function showOwlyYTBlocker () {
    if(owlyPlayer.playing){
        owlyYTblocker.classList.remove("show-owlyplayer-ytblocker");
    }

    if(owlyPlayer.paused){
        posterowly()
        owlyYTblocker.classList.add("show-owlyplayer-ytblocker");
    }  
}

owlyYTblocker.addEventListener("click", function() {
    owlyPlayer.play();
    setTimeout(showOwlyYTBlocker, 100);
})

owlyPlayer.on('play', (event) => {
    setTimeout(showOwlyYTBlocker, 100);
});

owlyPlayer.on('pause', (event) => {
    setTimeout(showOwlyYTBlocker, 100);
});

owlyPlayer.on('stop', (event) => {
    setTimeout(showOwlyYTBlocker, 100);
});