// Track data

const tracks = [

  {

    name: "Echo",

    audio: "music/track1.mp3",

    cover: "covers/cover1.jpg",

    nextTrack: "Hollow"

  },

  {

    name: "Hollow",

    audio: "songs/track2.mp3",

    cover: "covers/cover2.jpg",

    nextTrack: "I Can Feel "

  },

  {

    name: "I Can Feel",

    audio: "songs/track3.mp3",

    cover: "covers/cover3.jpg",

    nextTrack: "Break My Heart"

  },

  {

    name: "Break My Heart",

    audio: "songs/track4.mp3",

    cover: "covers/cover4.jpg",

    nextTrack: "may be future thanks"

  }

];

// Player controls

let currentTrackIndex = 0;

const audioElement = new Audio(tracks[currentTrackIndex].audio);

const playButton = document.getElementById('play');

const pauseButton = document.getElementById('pause');

const prevButton = document.getElementById('prev');

const nextButton = document.getElementById('next');

// Update track information

function updateTrackInfo() {

  document.querySelector('.track-info').textContent = `🎶 Track: ${tracks[currentTrackIndex].name}`;

  document.getElementById('cover-image').src = tracks[currentTrackIndex].cover;

  document.getElementById('next-track-name').textContent = `🎶 Next: ${tracks[currentTrackIndex].nextTrack}`;

}

// Event listeners for controls

playButton.addEventListener('click', () => {

  audioElement.play();

  playButton.style.display = 'none';

  pauseButton.style.display = 'inline-block';

});

pauseButton.addEventListener('click', () => {

  audioElement.pause();

  pauseButton.style.display = 'none';

  playButton.style.display = 'inline-block';

});

prevButton.addEventListener('click', () => {

  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;

  audioElement.src = tracks[currentTrackIndex].audio;

  audioElement.play();

  updateTrackInfo();

});

nextButton.addEventListener('click', () => {

  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;

  audioElement.src = tracks[currentTrackIndex].audio;

  audioElement.play();

  updateTrackInfo();

});

// Initialize player

updateTrackInfo();