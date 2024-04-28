// Check if the webpage has audio elements
const audioElements = document.querySelectorAll('audio');

// Function to boost the volume
function boostVolume() {
  audioElements.forEach(audio => {
    // Increase volume by 200% (double the current volume)
    audio.volume *= 2;
  });
}

// Call boostVolume function
boostVolume();
