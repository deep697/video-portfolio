function showWork() {
    document.getElementById('work').classList.remove('hidden');
    document.getElementById('work').classList.add('animate');
}

function playVideo(url) {
    const videoPlayer = document.getElementById('video-player');
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = url;
    videoPlayer.classList.remove('hidden');
    videoPlayer.scrollIntoView({ behavior: 'smooth' });
}

function showContactDetails() {
    document.getElementById('contact-details').classList.remove('hidden');
}
