export default function carousel() {
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    const cardsPerPage = 3;

    let currentIndex = 0;
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
    }

    const dots = document.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        cardsContainer.scrollTo({
            left: currentIndex * cardsContainer.clientWidth,
            behavior: 'smooth'
        });

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightBtn.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
}