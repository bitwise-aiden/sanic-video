(function() {
    if (window.hasRun) return;
    window.hasRun = true;

    browser.runtime.onMessage.addListener((message) => {
        if (message.command === 'change-speed') {
            const videos = document.querySelectorAll('video');
            if (!videos) return;

            videos.forEach((video) => {
                video.playbackRate = Math.min(4.0, Math.max(0.5, video.playbackRate + message.amount));
            });
        }
    });
})();
