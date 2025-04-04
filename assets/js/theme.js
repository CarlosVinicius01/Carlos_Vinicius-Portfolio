export default function theme() {
    const body = document.querySelector('body')
    const root = document.documentElement;

    document.getElementById('themeSwitcher').addEventListener('click', () => {
        if (body.dataset.theme === 'dark') {
            root.style.setProperty('--dark-color', '#f0f0f0');
            root.style.setProperty('--light-color', '#232323');
            body.dataset.theme = 'light';
        } else {
            root.style.setProperty('--dark-color', 'rgb(2, 0, 34)');
            root.style.setProperty('--light-color', '#f0f0f0');
            body.dataset.theme = 'dark';
        }
    });
}