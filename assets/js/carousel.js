export default function carousel() {
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    let cardsPerPage = 3;
    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth; 
    let totalPages = Math.ceil(cards.length / cardsPerPage);

    function updateCardsPerPage() {
        if (window.innerWidth < 768) {
            cardsPerPage = 1; 
        } else if (window.innerWidth < 1024) {
            cardsPerPage = 2; 
        } else {
            cardsPerPage = 3;
        }
        totalPages = Math.ceil(cards.length / cardsPerPage);
        updateCarousel();  
        updateDots();      
    }

    function updateDots() {
        dotsContainer.innerHTML = ''; 
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === currentIndex) dot.classList.add('active');
            dotsContainer.appendChild(dot);

            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
        }
    }

    function updateCarousel() {
        cardWidth = cards[0].offsetWidth;  
        const offset = currentIndex * cardWidth * cardsPerPage;
        cardsContainer.scrollTo({
            left: offset,
            behavior: 'smooth',
        });

        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    cardsContainer.addEventListener('touchmove', (e) => {
        e.preventDefault(); 
    }, { passive: false });

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

    window.addEventListener('resize', () => {
        updateCardsPerPage();  
        updateCarousel();      
    });

    updateCardsPerPage();
    updateDots();
    updateCarousel();
}
