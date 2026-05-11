document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: false,
        mirror: true
    });
});

// Flag to track if the user has unlocked the invitation
let isInviteOpened = false;

function openInvitation() {
    const cover = document.getElementById('cover');
    const music = document.getElementById('weddingMusic');
    const nav = document.querySelector('.fixed-nav-container');

    if (cover) cover.style.transform = 'translateY(-100%)';
    
    // Unlocking the body for scrolling
    document.body.style.overflow = 'auto';

    if (nav) {
        nav.style.opacity = "1";
        nav.style.pointerEvents = "auto";
    }

    if (music) {
        music.play().catch(e => console.log("Autoplay prevented."));
    }

    // Set flag to true once invitation is opened
    isInviteOpened = true;

    setTimeout(() => { AOS.refresh(); }, 600);
}

/** * SMART VISIBILITY LOGIC
 * Detects when user leaves the browser tab or minimizes the app
 */
document.addEventListener("visibilitychange", () => {
    const music = document.getElementById('weddingMusic');
    
    // We only control the music if the user has already opened the invitation
    if (isInviteOpened && music) {
        if (document.hidden) {
            // User minimized the app or switched tabs - PAUSE
            music.pause();
        } else {
            // User returned to the invitation - RESUME
            music.play().catch(e => console.log("Playback resume failed."));
        }
    }
});
