document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        once: false,
        mirror: true
    });
});

let isInviteOpened = false;

function openInvitation() {
    const cover = document.getElementById('cover');
    const music = document.getElementById('weddingMusic');
    const nav = document.querySelector('.fixed-nav-container');

    if (cover) cover.style.transform = 'translateY(-100%)';
    
    document.body.style.overflow = 'auto';

    if (nav) {
        nav.style.opacity = "1";
        nav.style.pointerEvents = "auto";
    }

    if (music) {
        music.play().catch(e => console.log("Autoplay prevented."));
    }

    isInviteOpened = true;

    setTimeout(() => { AOS.refresh(); }, 600);
}

/** * SMART VISIBILITY LOGIC
 * Detects when user leaves the browser tab or minimizes the app
 */
document.addEventListener("visibilitychange", () => {
    const music = document.getElementById('weddingMusic');
    
    
    if (isInviteOpened && music) {
        if (document.hidden) {
            
            music.pause();
        } else {
            
            music.play().catch(e => console.log("Playback resume failed."));
        }
    }
});
