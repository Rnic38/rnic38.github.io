function togglePlayButton() {
    // Select all elements with the .cs-picture class
    const picture = document.querySelector('#why-choose-2058 .cs-video-wrapper');
    const playButton = document.querySelector('#why-choose .cs-play');

    function togglePlayButton() {
        playButton.classList.toggle('cs-hide');
    }

    picture.addEventListener('click', togglePlayButton);
    playButton.addEventListener('click', togglePlayButton);
}

// Call the function to activate the event listeners
togglePlayButton();

function toggleVideoPlayback() {
    // Select the video element
    const video = document.querySelector('#why-choose video');
    const playButton = document.querySelector('#why-choose .cs-play');

    function togglePlay() {
        // Check if the video is paused
        if (video.paused) {
            video.play(); // Play the video if it is paused
        } else {
            video.pause(); // Pause the video if it is playing
        }
    }

    video.addEventListener("click", togglePlay);
    playButton.addEventListener("click", togglePlay);
}

// Call the function to activate the event listener
toggleVideoPlayback();
                            