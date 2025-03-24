export default function menu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    function closeMenu() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    } 
    
    if (menuLinks.length > 0) {
        menuLinks.forEach((link => {
            link.addEventListener('click', () => {
                closeMenu();
            })
        }))
    }

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideHamburger) {
            closeMenu();
        }
    });
}
