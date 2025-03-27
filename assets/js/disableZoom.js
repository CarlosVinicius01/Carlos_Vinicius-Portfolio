export default function disableZoom() {
    document.addEventListener('dblclick', function (e) {
        e.preventDefault();
    }, { passive: false });

    let lastTouch = 0;
    document.addEventListener('touchstart', function (e) {
        const now = Date.now();
        if (now - lastTouch <= 300) {
            e.preventDefault();
        }
        lastTouch = now;
    }, { passive: false });
}