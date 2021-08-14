function headerSelector() {
  const interval = setInterval(() => {
    let header = document.querySelector('._3auIg');
    if (header) {
      clearInterval(interval);
      
      const button = document.createElement('button');
      button.innerHTML = `2x`;
      
      button.classList.add('timerButtonVelocityTwo');
      
      button.addEventListener('click', () => {
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
          audio.playbackRate = 2;
        });
      })
      header.appendChild(button);
    }
  }, 1000)
}
headerSelector();
