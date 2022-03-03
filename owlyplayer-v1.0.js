//Set up multiple Plyrs
const owlyPlayer = Plyr.setup('.owlyplayers'); // All video players

let owlyPlayerWrappers = document.getElementsByClassName("owlyplayer-wrapper"); // Select all Owly Player Wrappers
let owlyYTblocker = []; // Select all YT blockers
let owlyPoster = document.getElementsByClassName("plyr__poster"); // Select all YT IMG wrappers
let owlyPosterImg = []; // Background images of YT Blockers
let owlyPlayerNumber;


// Assign background image to YT blockers
function posterowly(owlyPlayerNumber) {
    if (owlyPosterImg[owlyPlayerNumber] == "") {
        owlyPosterImg[owlyPlayerNumber] = owlyPoster[owlyPlayerNumber].style.backgroundImage
        owlyYTblocker[owlyPlayerNumber].style.backgroundImage = owlyPosterImg[owlyPlayerNumber];
    }
}

// Add/remove class to show/hide YT blocker
function showOwlyYTBlocker (owlyPlayerNumber) {
    if(owlyPlayer[owlyPlayerNumber].playing){
        owlyYTblocker[owlyPlayerNumber].classList.remove("show-owlyplayer-ytblocker");
    }

    if(owlyPlayer[owlyPlayerNumber].paused){
        posterowly(owlyPlayerNumber)
        owlyYTblocker[owlyPlayerNumber].classList.add("show-owlyplayer-ytblocker");
    }
}


for (let iOwly = 0; iOwly < owlyPlayer.length; iOwly++) {

  // Search for custom background images
  owlyYTblocker[iOwly] = owlyPlayerWrappers[iOwly].querySelector(".owlyplayer-ytblockers") || "";

  // Check if YT Blocker doesn't exist
  if (owlyYTblocker[iOwly] === "") {
    owlyPosterImg[iOwly] = "No YT Blocker";
  }

  // Check if YT Blocker exist
  if (owlyYTblocker[iOwly] !== "") {

    // Assign default background images
    owlyPosterImg[iOwly] = owlyYTblocker[iOwly].style.backgroundImage;


    // Plays video on YT Blocker click
    owlyYTblocker[iOwly].addEventListener("click", function() {
        owlyPlayer[iOwly].play();
        owlyPlayerNumber = iOwly;
        setTimeout(showOwlyYTBlocker, 100, owlyPlayerNumber);
    })

    // Hides YT Blocker when video is playing
    owlyPlayer[iOwly].on('play', (event) => {
      owlyPlayerNumber = iOwly;
      setTimeout(showOwlyYTBlocker, 100, owlyPlayerNumber);
    })

    // Shows YT Blocker when video is on Pause
    owlyPlayer[iOwly].on('pause', (event) => {
      owlyPlayerNumber = iOwly;
      setTimeout(showOwlyYTBlocker, 100, owlyPlayerNumber);
    })

    // Shows YT Blocker when video ended
    owlyPlayer[iOwly].on('stop', (event) => {
      owlyPlayerNumber = iOwly;
      setTimeout(showOwlyYTBlocker, 100, owlyPlayerNumber);
    })

  }

}
