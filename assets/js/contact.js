export default function contact() {
    function subWhats(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const tel = '5583988543645';

        const text = `Olá, me chamo ${name}, ${message}.`;
        const msgformatted = encodeURIComponent(text);

        const url = `https://wa.me/${tel}?text=${msgformatted}`;

        window.open(url, '_blank');
    }

    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', subWhats);
    }
}
