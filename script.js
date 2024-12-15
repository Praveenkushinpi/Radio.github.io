const playPauseBtn = document.getElementById("playPause");

const playImage = document.getElementById("playImage");

const trackInfo = document.querySelector(".track-info");

const coverImage = document.getElementById("cover-image");

const nextTrackName = document.getElementById("next-track-name");

const tracks = ["track1.mp3", "track2.mp3", "track3.mp3"];

const coverImages = ["cover1.jpg", "cover2.jpg", "cover3.jpg"];

let currentTrack = 0;

let isPlaying = false; // Track whether the music is playing

// Function to update the track and cover image

function updateTrack() {

  // Update track info and cover image

  trackInfo.innerText = `🎶 Now Playing: ${tracks[currentTrack].replace('.mp3', '')}`;

  coverImage.src = `${coverFolderURL}${coverImages[currentTrack]}`;  // Link to cover image

  

  // Update next track name

  nextTrackName.innerText = `🎶 Next: ${tracks[(currentTrack + 1) % tracks.length].replace('.mp3', '')}`;

}

// Play/Pause button functionality

playPauseBtn.addEventListener("click", () => {

  if (isPlaying) {

    // Pause the track

    let audio = new Audio(`${musicFolderURL}${tracks[currentTrack]}`);

    audio.pause();

    playImage.src = "play.png"; // Change to play image

    trackInfo.innerText = "⏸️ Paused";

  } else {

    // Play the track

    let audio = new Audio(`${musicFolderURL}${tracks[currentTrack]}`);

    audio.play();

    playImage.src = "pause.png"; // Change to pause image

    trackInfo.innerText = `🎶 Now Playing: ${tracks[currentTrack].replace('.mp3', '')}`;

  }

  // Toggle playing state

  isPlaying = !isPlaying;

});

// Update track info when the page loads

window.onload = updateTrack;