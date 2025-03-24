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
        if (window.innerWidth < 780) {
            cardsPerPage = 1; 
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

    let startX = 0;
    let endX = 0;

    function handleTouchStart(e) {
        startX = e.touches[0].pageX; 
    }

    function handleTouchMove(e) {
        endX = e.touches[0].pageX; 
    }

    function handleTouchEnd() {
        if (startX - endX > 100) { 
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                updateCarousel();
            }
        } else if (endX - startX > 100) { 
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }
    }

    if (window.innerWidth < 780) {
        cardsContainer.addEventListener('touchstart', handleTouchStart);
        cardsContainer.addEventListener('touchmove', handleTouchMove);
        cardsContainer.addEventListener('touchend', handleTouchEnd);
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

    window.addEventListener('resize', () => {
        updateCardsPerPage();  
        updateCarousel();      
    });

    updateCardsPerPage();
    updateDots();
    updateCarousel();
}
