let isScrolling = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initScrollAnimations();
    initCounterAnimations();
    initMobileMenu();
    initParallaxEffects();
    initHeaderScroll(); // Updated for shrink class
    initDownloadButtons();
    addScrollProgress();
});

/****************************
 * Download Buttons
 ***************************/
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', downloadApp);
    });
}

function downloadApp(event) {
    event.preventDefault();

    const downloadBtn = event.target.closest('.download-btn');
    if (!downloadBtn) return;

    const originalHTML = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Preparing...';
    downloadBtn.disabled = true;

    setTimeout(() => {
        downloadBtn.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Downloading...';

        // Trigger actual download via hidden link
        const link = document.createElement('a');
        link.href = downloadBtn.getAttribute('href') || 'downloads/Quizzler.apk';
        link.download = 'Quizzler.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show completed state
        setTimeout(() => {
            downloadBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Started!';
            downloadBtn.style.background = 'var(--color-success)';

            setTimeout(() => {
                downloadBtn.innerHTML = originalHTML;
                downloadBtn.style.background = '';
                downloadBtn.disabled = false;
            }, 2500);
        }, 800);
    }, 1200);
}
