export default function typewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const text = [
        "Desenvolvedor Full-Stack",
        "Criador de soluções web",
        "Apaixonado por tecnologia"
    ];

    let textIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function type() {
        const currentPhrase = text[textIndex];

        if (isDeleting) {
            letterIndex--;
            currentText = currentPhrase.substring(0, letterIndex);
        } else {
            letterIndex++;
            currentText = currentPhrase.substring(0, letterIndex);
        }

        typewriterElement.textContent = currentText;

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && letterIndex === currentPhrase.length) {
            typeSpeed = 1500; 
            isDeleting = true;
        }

        if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % text.length; 
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type(); 
}