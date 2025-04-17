const btn = document.getElementById('enableSound');
const video = document.getElementById('bgvid');

btn.addEventListener('click', () => {
    video.muted = false;
    video.volume = 0.03; 
    video.play();
    btn.style.display = 'none';
});