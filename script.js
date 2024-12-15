const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const trackInfo = document.querySelector(".track-info");
const coverImage = document.getElementById("cover-image");
const nextTrackName = document.getElementById("next-track-name");

// GitHub URLs for music and cover images
const musicFolderURL = "https://github.com/Praveenkushinpi/Radio.github.io/tree/main/Music";
const coverFolderURL ="https://github.com/Praveenkushinpi/Radio.github.io/tree/main/Song-covers";

// Placeholder tracks and images
const tracks = ["track1.mp3", "track2.mp3", "track3.mp3"];
const coverImages = ["cover1.jpg", "cover2.jpg", "cover3.jpg"];
let currentTrack = 0;

// Function to update the track and cover image
function updateTrack() {
  // Update track info and cover image
  trackInfo.innerText = `🎶 Now Playing: ${tracks[currentTrack].replace('.mp3', '')}`;
  coverImage.src = `${coverFolderURL}${coverImages[currentTrack]}`;  // Link to cover image
  
  // Update next track name
  nextTrackName.innerText = `🎶 Next: ${tracks[(currentTrack + 1) % tracks.length].replace('.mp3', '')}`;
}

// Play button functionality
playBtn.addEventListener("click", () => {
  updateTrack();
  // Play the track by setting the audio source
  let audio = new Audio(`${musicFolderURL}${tracks[currentTrack]}`);
  audio.play();
});

// Pause button functionality
pauseBtn.addEventListener("click", () => {
  trackInfo.innerText = "⏸️ Paused";
  // Pause the audio if it's playing
  let audio = new Audio(`${musicFolderURL}${tracks[currentTrack]}`);
  audio.pause();
});

// Next button functionality
nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  updateTrack();
});

// Initial track
updateTrack();
