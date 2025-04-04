export default function theme() {
    const body = document.querySelector('body');
    const root = document.documentElement;
    const themeSwitcher = document.getElementById('themeSwitcher');

    themeSwitcher.addEventListener('click', () => {
        if (body.dataset.theme === 'dark') {
            root.style.setProperty('--dark-color', '#d9d9d9'); 
            root.style.setProperty('--light-color', '#1a1a1a'); 
            root.style.setProperty('--light-color-gray', 'rgba(70, 70, 70, 0.8)');
            root.style.setProperty('--glass', 'rgba(0, 0, 0, 0.15)');
            root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.4)');
            root.style.setProperty('--text-shadow-color', 'rgba(255, 255, 255, 0.5)');
            root.style.setProperty('--navbar-bg', 'rgba(200, 200, 200, 0.9)');
            root.style.setProperty('--nav-burguer-bg', 'rgb(180, 180, 180)');
            root.style.setProperty('--hover-color', 'rgb(107, 103, 224)');
            root.style.setProperty('--overlay-bg', 'rgba(255, 255, 255, 0.4)');
            root.style.setProperty('--form-bg', 'rgba(0, 0, 0, 0.07)');
            root.style.setProperty('--footer-bg', 'rgb(160, 160, 160)');
            root.style.setProperty('--dot-bg', 'rgba(30, 30, 30, 0.5)'); 
            root.style.setProperty('--button-form-bg', 'linear-gradient(45deg, #3588e8, #5a4dff)');

            body.dataset.theme = 'light';
            themeSwitcher.textContent = "dark_mode";
        } else {
            root.style.setProperty('--dark-color', 'rgb(2, 0, 34)');
            root.style.setProperty('--light-color', '#f0f0f0');
            root.style.setProperty('--light-color-gray', 'rgba(226, 232, 240, 0.8)');
            root.style.setProperty('--glass', 'rgba(255, 255, 255, 0.1)');
            root.style.setProperty('--shadow-color', 'rgba(78, 70, 229, 0.5)');
            root.style.setProperty('--text-shadow-color', 'rgba(0, 0, 0, 0.5)');
            root.style.setProperty('--navbar-bg', 'rgba(15, 23, 42, 0.8)');
            root.style.setProperty('--nav-burguer-bg', 'rgb(3, 2, 22)');
            root.style.setProperty('--hover-color', 'rgb(24, 21, 114)');
            root.style.setProperty('--overlay-bg', 'rgba(0, 0, 0, 0.5)');
            root.style.setProperty('--form-bg', 'rgba(255, 255, 255, 0.05)');
            root.style.setProperty('--footer-bg', 'rgb(1, 0, 17)');
            root.style.setProperty('--dot-bg', 'rgba(255, 255, 255, 0.5)'); 
            root.style.setProperty('--button-form-bg', 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))');

            body.dataset.theme = 'dark';
            themeSwitcher.textContent = "brightness_7";
        }
    });
}
