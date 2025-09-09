document.addEventListener('DOMContentLoaded', () => {
    // Select the video and play button elements
    const video = document.querySelector('.preview-video');
    const playButton = document.querySelector('.play-button');
  
    // Check if elements exist
    if (!video || !playButton) {
      console.error('Error: Video or play button element not found.');
      return;
    }
  
    // Play button click event
    playButton.addEventListener('click', () => {
      // Attempt to play the video
      video.play().then(() => {
        // Successfully playing, hide the play button
        playButton.classList.add('hidden');
      }).catch(error => {
        console.error('Error playing video:', error);
      });
    });
  
    // Show play button when video is paused
    video.addEventListener('pause', () => {
      playButton.classList.remove('hidden');
    });
  
    // Show play button when video ends
    video.addEventListener('ended', () => {
      playButton.classList.remove('hidden');
    });
  });